<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Mail;

class PageClient extends Controller
{
    public function index()
    {
        return view('pages/client');
    }

    public function mail(Request $request)
    {
        
        $data = [
                'name'  => $request->input('name'),
                'email' => $request->input('email'),
                'subject' => $request->input('subject'),
                'message' => $request->input('message'),
                ];
        
        //Mail Function
        Mail::send('emails.name', ['data1' => $data], function ($m) {
         
            $m->to('trung.trinh22@student.passerellesnumeriques.org')->subject('Contact Form Mail!');
    });
        return response()->json(["message" => "Email sent successfully."]);
    }
}
