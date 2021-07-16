<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sharing extends Model
{
    use HasFactory;
    protected $table="sharings";
    protected $fillable = [
        'image',
        'content',
        'name',
        'role'
    ];
    public $timestamps =false;
}
