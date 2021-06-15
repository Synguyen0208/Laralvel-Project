<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Database\Eloquent\Model;
class Product extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $table="products";
    protected $fillable = [
        'name',
        'title',
        'image',
        'id_type',
        'discription',
        'unit_price',
        'promotion_price',
        'unit',
        'new',
        'created_at',
        'updated_at',
    ];
    public function cat(){
        return $this->belongsTo('App\Category');
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
