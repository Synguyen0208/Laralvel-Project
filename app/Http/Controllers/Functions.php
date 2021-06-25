<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Analytics;
use Carbon\Carbon;
use Illuminate\Support\Facades\Artisan;
use League\Flysystem\Config;
use Spatie\Analytics\Period;

class Functions extends Controller
{
    public function getGG()
    {
        $firstDay = Carbon::now()->firstOfMonth();
        $startDate = Carbon::now();
        Artisan::call('config:clear');
        Artisan::call('cache:clear');
        Artisan::call('config:cache');
        $month = Analytics::fetchVisitorsAndPageViews(Period::create($firstDay, $startDate));
        $start = new Carbon('first day of last month');
        $end = new Carbon('last day of last month');
        $lastmonth = Analytics::fetchVisitorsAndPageViews(Period::create($start->startOfMonth(), $end->endOfMonth()));
        $data=['month'=>$month, 'lastMonth'=>$lastmonth];
        return $data;
    }
}
