<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Staff extends Model
{
    use HasFactory;
    protected $table = 'staffs';
    protected $fillable=[
        'name',
        'image',
        'facebook',
        'linkedin',
        'twitter',
        'work_at',
        'position_id',
        'department_id',
        'description'
    
    ];
    public $timestamps=false;
    public function position(){
        return $this->belongsTo('App\Position','position_id','id');
    }
    public function department(){
        return $this->belongsTo('App\Department','department_id','id');
    }
}
