<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Position extends Model
{
    use HasFactory;
    protected $table = 'position';
    protected $fillable=[
        'name'
    ];
    public $timestamps=false;
 
    public function staff(){
        return $this->hasMany('App\Staff','position_id','id');
    }

   
}
