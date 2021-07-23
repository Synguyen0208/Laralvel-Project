<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Database\Eloquent\Model;
class ITnuoiIT extends Model
{
    use HasFactory;
    protected $table="itnuoiit";
    protected $fillable = [
        'name',
        'email',
        'phone',
        'type',
        'code',
        'status'
    ];
    public $timestamps=false;
}
