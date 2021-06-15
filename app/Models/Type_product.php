<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Type_product extends Model
{
    use HasFactory;
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $table="type_products";
    protected $fillable = [
        'name',
        'discription',
        'image',
        'created_at',
        'updated_at',
    ];
    public function cat(){
        return $this->hasMany('App\Product', 'id_type', 'id');
    }
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'cost' => 'float',
    ];
}
