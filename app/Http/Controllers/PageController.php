<?php

namespace App\Http\Controllers;

use App\Mail\SendMail;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Type_product;
use App\Models\User_Admin;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class PageController extends Controller
{
    public function index()
    {
        $cookie=Cookie::get('admin');
        if($cookie==null)
        return redirect()->route("Login")->with(['flash_level'=>"success", 'flash_message'=>'Thêm sản phẩm thành công!']);
        else
        return view('pages/admin');
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
        echo Cookie::get('name');
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
