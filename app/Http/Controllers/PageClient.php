<?php

namespace App\Http\Controllers;

use App\Models\Staff;
use Illuminate\Http\Request;

class PageClient extends Controller
{
    public function index()
    {
        return view('pages/client');
    }
    public function getStaff(){
        $staff = Staff::All();
        return response()->json($staff);
    }
}
