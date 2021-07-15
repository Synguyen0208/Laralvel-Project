<?php

namespace App\Http\Controllers;

use App\Models\Training;
use Illuminate\Http\Request;

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
}
