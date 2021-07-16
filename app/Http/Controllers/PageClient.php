<?php

namespace App\Http\Controllers;

use App\Models\Training;
use App\Models\Partner;
use Illuminate\Http\Request;
use App\Models\Sharing;

class PageClient extends Controller
{
    public function index()
    {
        return view('pages/client');
    }
    public function getTraining()
    {
        $training=Training::all();
        return response()->json($training);
    }
    public function getSharing()
    {
        $data=Sharing::all();
        return response()->json($data);
    }
    public function getPartner(){
        $partner = Partner::all();
        return response()->json($partner);
    }
}
