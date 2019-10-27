<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Laravel\Lumen\Routing\Controller as BaseController;
use App\Models\Backend\UserCSV;
class APIController extends BaseController
{
    
	public function user_retention_stats(Request $request){

        $users = new UserCSV();
        
        return ($users->getUserRetentionStatsForChart());
		
	}
}
