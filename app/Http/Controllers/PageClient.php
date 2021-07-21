<?php

namespace App\Http\Controllers;

use App\Models\Donate;
use App\Models\DonateGGP;
use App\Models\Donator;
use App\Models\Training;
use App\Models\Partner;
use Illuminate\Http\Request;
use App\Models\Sharing;

use Illuminate\Support\Facades\Mail;

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
    public function getPartner(){
        $partner = Partner::all();
        return response()->json($partner);
    }
    public function donate(Request $request){
        $donator=new Donator();
        $donator->first_name=$request->first_name;
        $donator->last_name=$request->last_name;
        $donator->birth_day=$request->birth_day;
        $donator->email=$request->emaill;
        $donator->address=$request->address;
        $donator->save();

        $donate=new Donate();
        $donate->id_key=$request->id;
        $donate->country_code=$request->country_code;
        $donate->email=$request->email;
        $donate->given_name=$request->given_name;
        $donate->surname=$request->surname;
        $donate->payer_id=$request->payer_id;
        $donate->amount=$request->amount;
        $donate->currency_code=$request->currency_code;
        $donate->status=$request->status;
        $donate->id_donator=$donator->id;
        $donate->save();
        return response()->json(["Error"=>0]);
    }
    public function donateGGP(Request $request){
        $donator=new Donator();
        $donator->first_name=$request->first_name;
        $donator->last_name=$request->last_name;
        $donator->birth_day=$request->birth_day;
        $donator->email=$request->emaill;
        $donator->address=$request->address;
        $donator->save();

        $donate=new DonateGGP();
        $donate->description=$request->description;
        $donate->type=$request->type;
        $donate->token=$request->token;
        $donate->cardDetails=$request->cardDetails;
        $donate->cardNetwork=$request->cardNetwork;
        $donate->id_donator=$donator->id;
        $donate->amount=$request->amount;
        $donate->save();
        return response()->json(["Error"=>0]);
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
