<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageClient extends Controller
{
    public function index()
    {
        return view('pages/client');
    }
}
