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
use App\Models\Country;
use App\Models\Department;
use App\Models\Partner;
use App\Models\Position;
use App\Models\Staff;
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
        // Artisan::call('config:clear');
        // Artisan::call('cache:clear');
        // Artisan::call('config:cache');
        // $data=[];
        // $currentMonth = date('m');
        // for ($i=$currentMonth-1; $i >=0 ; $i--) { 
        //     $start = new Carbon("first day of $i month ago");
        //     $end = new Carbon("last day of $i month ago");
        //     $dataMonth=Analytics::performQuery(
        //     Period::create($start, $end),
        //     'ga:sessions',
        //     [
        //         'metrics' => 'ga:sessions, ga:pageviews, ga:newusers, ga:users, ga:bouncerate, ga:avgsessionduration, ga:CPC',
        //         'dimensions' => 'ga:yearMonth'
        //     ]);
        //     if($i==0){
        //         $data[]=[
        //             'month'=>$dataMonth->totalsForAllResults
        //         ];
        //     }
        //     else
        //     $data[]=[
        //         'month'.$i=>$dataMonth->totalsForAllResults
        //     ];
        // }
        // Artisan::call('config:clear');
        // Artisan::call('cache:clear');
        // Artisan::call('config:cache');
        $data = Analytics::getAnalyticsService();
        return response()->json($data->data_realtime->get(
            'ga:'.config('analytics.view_id'),
            'rt:activeUsers'
        )->totalResults);
    }
    //Staff Page
    public function getStaff()
    {
        $board_staffs = Staff::join('position', 'staffs.position_id', '=', 'position.id')
        ->join('countries', 'staffs.work_at', '=', 'countries.id')
        ->join('department', 'staffs.department_id', '=', 'department.id')
        ->where('staffs.department_id', 1)
        ->select('staffs.id','staffs.name', 'staffs.image', 'staffs.facebook', 'staffs.linkedin', 'staffs.twitter', 'staffs.description', 'position.name as position', 'countries.name as country','department.name as department')
        ->orderByRaw('staffs.id ASC')
        ->get();
        $coordination_staffs = Staff::join('position', 'staffs.position_id', '=', 'position.id')
        ->join('countries', 'staffs.work_at', '=', 'countries.id')
        ->join('department', 'staffs.department_id', '=', 'department.id')
        ->where('staffs.department_id', 2)
        ->select('staffs.id','staffs.name', 'staffs.image', 'staffs.facebook', 'staffs.linkedin', 'staffs.twitter', 'staffs.description', 'position.name as position', 'countries.name as country','department.name as department')
        ->orderByRaw('staffs.id ASC')
        ->get();
        $local_staffs = Staff::join('position', 'staffs.position_id', '=', 'position.id')
        ->join('countries', 'staffs.work_at', '=', 'countries.id')
        ->join('department', 'staffs.department_id', '=', 'department.id')
        ->where('staffs.department_id', 3)
        ->select('staffs.id','staffs.name', 'staffs.image', 'staffs.facebook', 'staffs.linkedin', 'staffs.twitter', 'staffs.description', 'position.name as position', 'countries.name as country','department.name as department')
        ->orderByRaw('staffs.id ASC')
        ->get();
        $data=[
            'board'=>$board_staffs,
            'coordination'=>$coordination_staffs,
            'local'=>$local_staffs
        ];
        return response()->json($data);
    }
    public function getDataForm(){
        $country=Country::all();
        $department=Department::all();
        $position=Position::all();
        $data=[
            'country'=>$country,
            'department'=>$department,
            'position'=>$position
        ];
        return response()->json($data);
    }
    public function addStaff(Request $request)
    {
        $new=new Staff();
        $new->name=$request->name;
        $new->description=$request->description;
        $new->facebook=$request->facebook;
        $new->linkedin=$request->linkedin;
        $new->twitter=$request->twitter;
        $new->work_at=$request->work_at;
        $new->position_id=$request->position_id;
        $new->department_id=$request->department_id;
        $file =  $request->file("image");
        $file->move('./images/',$file->getClientOriginalName());
        $name_file=$file->getClientOriginalName();
        $new->image=$name_file;
        $new->save();
        return response()->json(['message'=>"Add staff success!", 'err'=>0]);
    }
    public function updateStaff(Request $request)
    {
        $update=Staff::find($request->id);
        $update->name=$request->name;
        $update->description=$request->description;
        $update->facebook=$request->facebook;
        $update->linkedin=$request->linkedin;
        $update->twitter=$request->twitter;
        $update->work_at=$request->work_at;
        $update->position_id=$request->position_id;
        $update->department_id=$request->department_id;
        if($request->file('image')!=null){
            $file =  $request->file("image");
            $file->move('./images/',$file->getClientOriginalName());
            $name_file=$file->getClientOriginalName();
            $update->image=$name_file;
        }
        $update->save();
        return response()->json(['message'=>'Update Staff success', 'err'=>0]);
    }
    public function deleteStaff($id)
    {
        $staff=Staff::find($id);
        $staff->delete();
        return response()->json(['message'=>"Delete staff success!", 'err'=>0]);
    }
//End Staff Page
    public function send()
    {
        $account=User_Admin::first();
        $details = [
            'password' => $account->password
        ];
        Mail::to('syn282002@gmail.com')->send(new SendMail($details));
    }

//Partner page
    function getPartner(){
        $partners=Partner::all();
        return response()->json($partners);
    }
    public function addPartner(Request $request)
    {
        $new=new Partner();
        $new->name=$request->name;
        $new->description=$request->description;
        $new->link=$request->link;
        $new->type=$request->type;
        $file =  $request->file("image");
        $file->move('./images/partners/',$file->getClientOriginalName());
        $name_file=$file->getClientOriginalName();
        $new->image='partners/'.$name_file;
        $new->save();
        return response()->json(['message'=>"Add partner success!", 'err'=>0]);
    }
    public function updatePartner(Request $request)
    {
        $update=Partner::find($request->id);
        $update->name=$request->name;
        $update->description=$request->description;
        $update->link=$request->link;
        $update->type=$request->type;
        if($request->file('image')!=null){
            $file =  $request->file("image");
            $file->move('./images/partners/',$file->getClientOriginalName());
            $name_file=$file->getClientOriginalName();
            $update->image='partners/'.$name_file;
        }
        $update->save();
        return response()->json(['message'=>'Update Staff success', 'err'=>0]);
    }
    public function deletePartner($id)
    {
        $staff=Partner::find($id);
        $staff->delete();
        return response()->json(['message'=>"Delete staff success!", 'err'=>0]);
    }
//End Partner page
}
