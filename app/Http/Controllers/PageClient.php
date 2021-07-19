<?php

namespace App\Http\Controllers;

use App\Models\Selection;
use Illuminate\Http\Request;
class PageClient extends Controller
{
    public function index()
    {
        return view('pages/client');
    }

    public function getSelection(){
        //$selection = Selection::all();
        
    }
}