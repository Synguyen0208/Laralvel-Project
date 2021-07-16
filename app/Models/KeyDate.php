<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Database\Eloquent\Model;
class KeyDate extends Model
{
    use HasFactory;
    protected $table="key_dates";
    protected $fillable = [
        'timeline',
        'description',
        'country_id'
    ];
    public function country(){
        return $this->belongsTo('App\Models\Country', 'country_id', 'id');
    }
    public $timestamps=false;
}
