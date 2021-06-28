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
        Artisan::call('config:clear');
        Artisan::call('cache:clear');
        Artisan::call('config:cache');
        $data = [];
        $currentMonth = date('m');
        for ($i = $currentMonth - 1; $i >= 0; $i--) {
            $start = new Carbon("first day of $i month ago");
            $end = new Carbon("last day of $i month ago");
            $dataMonth = Analytics::performQuery(
                Period::create($start, $end),
                'ga:sessions',
                [
                    'metrics' => 'ga:sessions, ga:pageviews, ga:newusers, ga:users, ga:bouncerate, ga:avgsessionduration, ga:CPC',
                    'dimensions' => 'ga:yearMonth'
                ]
            );
            $data[] = [
                'month' => $dataMonth->totalsForAllResults
            ];
        }
        return $data;
    }
}
