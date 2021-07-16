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
}
