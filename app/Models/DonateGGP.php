<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DonateGGP extends Model
{
    use HasFactory;
    protected $table="donate_gg";
    protected $fillable = [
        'description',
        'cardDetails',
        'cardNetwork',
        'type',
        'token',
        'id_donator',
        'amount'
    ];
    public $timestamps=false;
    public function donator(){
        return $this->belongsTo('App\Models\Donator', 'id_donator', 'id');
    }
}
