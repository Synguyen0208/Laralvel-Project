<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Database\Eloquent\Model;
class Partner extends Model
{
    use HasFactory;
    protected $table="partners";
    protected $fillable = [
        'name',
        'image',
        'description',
        'link'
    ];
    public $timestamps=false;
}
