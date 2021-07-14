<?php

namespace App\Http\Controllers;

use App\Models\Partner;
use Illuminate\Http\Request;

class PageClient extends Controller
{
    public function index()
    {
        return view('pages/client');
    }

    public function getPartner(){
        $partner = Partner::all();
        return response()->json($partner);
    }
}
