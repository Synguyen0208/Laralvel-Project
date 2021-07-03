<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Blog;
class PageClient extends Controller
{
    public function index()
    {
        return view('pages/client');
    }
    public function getBlog()
    {
        $data=Blog::all();
        return response()->json($data);
    }
}
