<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Selection extends Model
{
    use HasFactory;
    protected $table ="selections";
    protected $filltables =[
    "name",
    "birthday",
    "card",
    "mail",
    "phone",
    "graduation_years",
    "address",
    "link_facebook",
    "major",
    "graduation_score"
    ];
    public $timestamps =false;
}
