<?php



namespace App\Models;



use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Database\Eloquent\Model;

class Become_Partner extends Model
{
    protected $table = "partner_become";
    use HasFactory;
    protected $filltables = [
        'name_company',
        'address_company',
        'company_representative',
        'position_representative ',
        'phone_contact',
        'email_contact',
        'reason'
    ];
    public $timestamps = false;
}
