<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Database\Eloquent\Model;
class User_Admin extends Model
{
    use HasFactory;
    protected $table="admin";
    protected $fillable = [
        'userName',
        'password',
        'code',
        'birth_day'
    ];
    public $timestamps=false;
    
}
