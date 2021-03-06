<?php

namespace App\Http\Controllers;
use App\Models\Donate;
use App\Models\DonateGGP;
use App\Models\Donator;
use App\Models\Training;
use App\Models\Partner;

use App\Models\Staff;
use Illuminate\Http\Request;
use App\Models\Sharing;

use Illuminate\Support\Facades\Mail;
use App\Models\Selection;
use App\Jobs\SendEmail;
use App\Mail\MailITnuoiIT;
use App\Models\Become_Partner;
use App\Models\ITnuoiIT;

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
         
            $m->to('sy.nguyen22@student.passerellesnumeriques.org')->subject('Contact Form Mail!');
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
            'type' => 'Th??ng b??o b???n ???? ????ng k?? h???c b???ng Passerellesnumeriques th??nh c??ng',
            'thanks' =>'C???m ??n '.$request->name . ' ???? ????ng k?? ',
            'content' => 'H??y ch??? th???y c?? li??n h??? v???i b???n nh?? !',
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
        return response()->json('T??n kh??ng ???????c b??? tr???ng', 400);
       }
    }
    public function getStaff(){
        $staff = Staff::All();
        return response()->json($staff);
    }
    public function addBecomePartner(Request $request){
        $become_partner = new Become_Partner();
        $become_partner->name_company= $request->name_company;
        $become_partner->address_company= $request->address_company;
        $become_partner->company_representative= $request->company_representative;
        $become_partner->position_representative= $request->position_representative;
        $become_partner->phone_contact= $request->phone_contact;
        $become_partner->email_contact= $request->email_contact;
        $become_partner->description= $request->reason;
        $become_partner->save();
        return response()->json(["Error"=>0]);
    }
    public function donateIT(Request $request){
        $new =new ITnuoiIT();
        $new->name=$request->name;
        $new->email=$request->email;
        $new->phone=$request->phone;
        $new->type=$request->type;
        $new->status='No transfer yet!';
        $new->save();
        $find=ITnuoiIT::find($new->id);
        $code='ITNUOIIT'.$new->id;
        $find->code=$code;
        $find->save();
        $details = [
            'code' => $code
        ];
        Mail::to($request->email)->send(new MailITnuoiIT($details));
        return response()->json(['Error'=>0]);
    }
}
