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
use App\Models\Selection;
use App\Jobs\SendEmail;
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
        $message = [
            'type' => 'Thông báo bạn đã đăng kí học bổng Passerellesnumeriques thành công',
            'thanks' =>'Cảm ơn '.$request->name . ' Đã đăng kí ',
            'content' => 'Hãy chờ thầy cô liên hệ với bạn nhé !',
            'name'=>$request->name ,
            'birtday'=>$request->birthday,
            'card'=>$request->card,
            'mail'=>$request->email,
            'phone'=>$request->phone,
            'graduation_years'=>$request->graduation_years,
            'address'=>$request->address,
            'link_facebook'=>$request->link_facebook,
            'major'=>$request->major,
            'graduation_score'=>$request->graduation_score,

        ];
        
        SendEmail::dispatch($message, $request->email)->delay(now()->addMinute(1));

       if($checkResponse){
        return response()->json($selection, 200);
       }else{
        return response()->json('Tên không được bỏ trống', 400);
       }
    }
}
