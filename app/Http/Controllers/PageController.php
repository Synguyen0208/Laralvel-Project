<?php

namespace App\Http\Controllers;

use App\Mail\SendMail;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Type_product;
use App\Models\User_Admin;
// use Google\Service\Analytics;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Analytics;
use Carbon\Carbon;
use Illuminate\Support\Facades\Artisan;
use League\Flysystem\Config;
use Spatie\Analytics\Period;

class PageController extends Controller
{
    public function show()
    {
        $cookie=Cookie::get('admin');
        if($cookie==null)
        return redirect()->route("Login");
        else
        return view('pages/admin');
    }
    public function index()
    {
        return $this->show();
    }
    public function analytic()
    {
        $get=new Functions;
        $data=$get->getGG();
        return response()->json($data);
    }
    public function login(Request $request)
    {
        $account=User_Admin::first();
        $userName=$request->userName;
        $password=$request->password;
        if($userName==$account->userName&&$password==$account->password){
            return response()->json(['message'=>'Login susscess!', 'err'=>0]);
        }
        else
        return response()->json(['message'=>'Login information is incorrect!', 'err'=>200]);
    }
    public function get()
    {
        Artisan::call('config:clear');
        Artisan::call('cache:clear');
        Artisan::call('config:cache');
        $data=[];
        $currentMonth = date('m');
        for ($i=$currentMonth-1; $i >=0 ; $i--) { 
            $start = new Carbon("first day of $i month ago");
            $end = new Carbon("last day of $i month ago");
            $dataMonth=Analytics::performQuery(
            Period::create($start, $end),
            'ga:sessions',
            [
                'metrics' => 'ga:sessions, ga:pageviews, ga:newusers, ga:users, ga:bouncerate, ga:avgsessionduration, ga:CPC',
                'dimensions' => 'ga:yearMonth'
            ]);
            if($i==0){
                $data[]=[
                    'month'=>$dataMonth->totalsForAllResults
                ];
            }
            else
            $data[]=[
                'month'.$i=>$dataMonth->totalsForAllResults
            ];
        }
        dd($data);
    }
    public function send()
    {
        $account=User_Admin::first();
        $details = [
            'password' => $account->password
        ];
        Mail::to('syn282002@gmail.com')->send(new SendMail($details));
    }
}
