<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Position extends Model
{
    use HasFactory;
    use HasFactory;
    protected $table="position";
    protected $fillable = [
        'name'
    ];
    public function cat(){
        return $this->hasMany('App\Staff', 'position_id', 'id');
    }
    protected $casts = [
        'cost' => 'float',
    ];
}
