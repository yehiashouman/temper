<?php 
namespace App\Models\Backend;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;


use Illuminate\Database\Eloquent\Model;


class UserCSV extends Model{
      
    protected $rows;
    protected $cols;
     /**
     * @param array $attributes
     */
    public function __construct(array $attributes = [])
    {
        //SET Carbon start and end day of the week
        Carbon::setWeekStartsAt(Carbon::MONDAY);
        Carbon::setWeekEndsAt(Carbon::SUNDAY);
        //load CSV file
        $this->loadAndParse();
        
    }
    protected function loadAndParse(){
        $disk = Storage::disk('local');
        $data = $disk->get('export.csv');//disk( 'local' );
        $raw_rows = explode("\n",$data);
        $this->rows = [];
        $this->cols = explode(";",array_shift($raw_rows));
        foreach($raw_rows as $raw_row)
         {
            $fields = explode(";",$raw_row);
            if(count($this->cols)==count($fields)){
                
                $assoc_row = array_combine($this->cols,$fields);
                if(empty($assoc_row["onboarding_perentage"]))
                {
                    continue;
                }
                //collect rows
                array_push($this->rows, $assoc_row);
            }
             
         }
        
    }
    
    public function getUserRetentionStatsForChart(){
        
        // IN DATABASE CASE 
        // $this->rows will come from a select query with an associated array.
        
        $series = [];
        foreach($this->rows as $assoc_row){
                //collect steps
                $onboarding_perentage[(string)($assoc_row["onboarding_perentage"])]=0; 
                //collect weekly cohorts
                $created_at= strtotime($assoc_row['created_at']);
                $created_at_carbon = Carbon::parse($assoc_row['created_at']);
                
                $week = date('W', ($created_at));
                $week_start = $created_at_carbon->startOfWeek()->toDateString();
                $week_end = $created_at_carbon->endOfWeek()->toDateString();
                //echo " (".$week_start."-".$week_end.")";die();
                 // create new empty array if it hasn't been created yet
                if( !isset($series[$week]) ) {
                    $series[$week] = [];
                    $series[$week]["name"] = "W".$week. ": ($week_start)";//  TO  $week_end)";
                    $series[$week]["data"] = array();
                    //array_push($series_names,"Week ".$week);
                }
                  // append the post to the array
                array_push($series[$week]["data"], $assoc_row["onboarding_perentage"]);
            
         }
         //no need anymore for keys
         $series = array_values($series);
         //calculate percentages of users in each step for each week, must have collected first to find out totals
         foreach($series as &$week_series ) {
                //user entries in export.csv are unique per user
                //how many user per step
                $users_count_per_step = (array_count_values( $week_series["data"] ));
                //total users in week and remaining users at step start at total 
                $total_users_in_week = $remaining_users_at_step = array_sum(array_values($users_count_per_step));
                //here we want to make sure that each array per week has all boarding steps defined either with a 0 or with a count of users
                $users_count_per_step =  $users_count_per_step+$onboarding_perentage;
                ksort($users_count_per_step,SORT_NUMERIC );
                
                
                $week_series["data"] = $users_count_per_step;
                foreach($week_series["data"] as &$step ){
                    $remaining_users_at_step-= $step;
                    $step = round(($remaining_users_at_step/$total_users_in_week)*100,2); 
                    
                }
                $week_series["data"] = array_values($week_series["data"]);
         }
         $onboarding_steps =array_keys($onboarding_perentage); 
         sort ($onboarding_steps);
         return 
            [
                "yAxis"=>[],
                "xAxis"=>$onboarding_steps,
                "series"=>$series
            ];
        
    }
  
}

?>