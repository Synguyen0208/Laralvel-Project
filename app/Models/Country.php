<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    use HasFactory;
    protected $table="countries";
    protected $fillable = [
        'name'
    ];
    public function staff(){
        return $this->hasMany('App\Staff', 'work_at', 'id');
    }
    public function keydate(){
        return $this->hasMany('App\Models\KeyDate', 'country_id', 'id');
    }
}
