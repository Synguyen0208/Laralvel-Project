<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class Department extends Model
{
    use HasFactory;
    use HasFactory;
    protected $table="department";
    protected $fillable = [
        'name'
    ];
    public function department(){
        return $this->hasMany('App\Staff', 'department_id', 'id');
    }
}
