<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Database\Eloquent\Model;
class PNValue extends Model
{
    use HasFactory;
    protected $table="pn_values";
    protected $fillable = [
        'name_value',
        'image'
    ];
    public $timestamps=false;
}
