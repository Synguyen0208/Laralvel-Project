<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Department extends Model
{
    use HasFactory;
    protected $table ='department';
    protected $filltable=[
        'name'
    ];
    public $timestamps=false;
    public function staff(){
        return $this->hasMany('App\Staff','department_id','id');
    }
}
