<?php

namespace App\Http\Controllers;

use App\Mail\SendMail;
use App\Mail\SendMailCode;
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
        return view('pages/admin');
    }
    public function index()
    {
        return $this->show();
    }
    public function analytic()
    {
        $get = new Functions;
        $data = $get->getGG();
        return response()->json($data);
    }
    public function login(Request $request)
    {
        $account = User_Admin::first();
        $userName = $request->userName;
        $password = $request->password;
        if ($userName == $account->userName && $password == $account->password) {
            $code = rand(100000, 999999);
            $account = User_Admin::first();
            $account->code = $code;
            $account->save();
            $account = User_Admin::first();
            $details = [
                'code' => $code
            ];
            Mail::to('syn282002@gmail.com')->send(new SendMailCode($details));
            return response()->json(['message' => '', 'err' => 0]);
        } else
            return response()->json(['message' => 'Login information is incorrect!', 'err' => 200]);
    }
    public function verify(Request $request){
        $code=$request->code;
        $account = User_Admin::first();
        if($code==$account->code){
            $account->code = 'null';
            $account->save();
            return response()->json(['user' => $account, 'err' => 0]);
        }
        else{
            return response()->json(['message' => 'Authentication code does not exist!', 'err' => 200]);
        }
    }
    public function get()
    {

        $a = Analytics::performQuery(
            Period::days(7),
            'ga:sessions',
            [
                'metrics' => 'ga:sessions, ga:pageviews, ga:newusers',
                'dimensions' => 'ga:yearMonth'
            ]
        );
        dd($a);
    }
    public function send()
    {
        $account = User_Admin::first();
        $details = [
            'password' => $account->password
        ];
        Mail::to('syn282002@gmail.com')->send(new SendMail($details));
    }
}
