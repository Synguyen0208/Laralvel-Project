<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Sharing;

class PageClient extends Controller
{
    public function index()
    {
        return view('pages/client');
    }
    public function getSharing()
    {
        $data=Sharing::all();
        return response()->json($data);
    }
}
