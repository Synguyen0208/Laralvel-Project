<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Donate extends Model
{
    use HasFactory;
    protected $table="donate";
    protected $fillable = [
        'country_code',
        'email',
        'given_name',
        'surname',
        'payer_id',
        'amount',
        'currency_code',
        'created_time',
        'status',
        'id_donator'
    ];
    public $timestamps=false;
    public function donator(){
        return $this->belongsTo('App\Models\Donator', 'id_donator', 'id');
    }
}
