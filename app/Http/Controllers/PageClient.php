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
        $selection = Selection::All();
        return response()->json($selection);
    }

    public function addSelection(Request $request)
    {
        $selection=new Selection();
        $selection->name=$request->name;
        $selection->birthday=$request->birthday;
        $selection->card=$request->card;
        $selection->mail=$request->email;
        $selection->phone=$request->phone;
        $selection->graduation_years=$request->graduation_years;
        $selection->address=$request->address;
        $selection->link_facebook=$request->link_facebook;
        $selection->major=$request->major;
        $selection->graduation_score=$request->graduation_score;
        $selection->save();

        $checkResponse = $selection->save();
       if($checkResponse){
        return response()->json($selection, 200);
       }else{
        return response()->json('Tên không được bỏ trống', 400);
       }
    }
}