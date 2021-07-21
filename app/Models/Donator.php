<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Donator extends Model
{
    use HasFactory;
    protected $table="donator";
    protected $fillable = [
        'first_name',
        'last_name',
        'last_name',
        'email',
        'address',
    ];
    public $timestamps=false;
    public function donate(){
        return $this->hasMany('App\Models\Donate', 'id_donator', 'id');
    }
}
