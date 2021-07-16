<?php

namespace App\Http\Controllers;

use App\Models\Training;
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
}
