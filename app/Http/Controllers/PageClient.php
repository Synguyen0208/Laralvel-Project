<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Mail;
use App\Models\Selection;
use Illuminate\Http\Request;
use App\Jobs\SendEmail;
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