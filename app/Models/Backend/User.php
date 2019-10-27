<?php 
namespace App\Models\Backend\User;

use Illuminate\Database\Eloquent\Model;

class User{
        //use Notifiable;
      
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [];

     /**
     * @param array $attributes
     */
    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);
        Carbon::setWeekStartsAt(Carbon::MONDAY);
        Carbon::setWeekEndsAt(Carbon::SUNDAY);
        
        //$this->table = config('access.categories_table');
    }
        
    
    
}

?>