<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Database\Eloquent\Model;
class Partner_become extends Model
{
    use HasFactory;
    protected $table="partner_become";
    protected $fillable = [
        'name_company',
        'address__company',
        'company_representative',
        'position_representative',
        'phone_contact',
        'email_contact',
        'description'
    ];
    public $timestamps=false;
}
