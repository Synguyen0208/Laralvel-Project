<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Type_product;
use Illuminate\Support\Facades\DB;
class PageController extends Controller
{
    public function getType()
    {
        $type = Type_product::select('id', 'name')->get();
        echo json_encode($type);
    }
    public function getProduct()
    {
        $product = Product::join('type_products', 'products.id_type', '=', 'type_products.id')
        ->select('products.*', 'type_products.name as type')
        ->orderByDesc('id')
        ->get();
        echo json_encode($product);
    }
    public function addProduct(Request $request)
    {
        $new=new Product();
        $new->name=$request->name;
        $new->id_type=$request->type;
        $new->unit_price=$request->unit_price;
        $new->promotion_price=$request->promotion_price;
        $new->unit=$request->unit;
        $new->description=$request->description;
        $file =  $request->file("image");
        $file->move('C:/xampp/htdocs/laravel_project/public/source/image/product/',$file->getClientOriginalName());
        $name_file=$file->getClientOriginalName();
        $new->image=$name_file;
        $new->save();
        echo 'Thêm sản phẩm thành công!';
        
    }

    public function deleteProduct(Request $request)
    {
        $id=$request->id;
        Product::where('id', $id)->delete();
        session()->flash('message', 'Xóa sản phẩm thành công!');
        return redirect()->route("Admin")->with(['flash_level'=>"success", 'flash_message'=>'Xóa sản phẩm thành công!']);
    }
    public function updateProduct(Request $request)
    {
        // print_r($request->all());
        $id=$request->id;
        $type = Type_product::all();
        if($request->file("image")!=null){
            $file =  $request->file("image");
            $file->move('C:/xampp/htdocs/sylaravel/public/source/image/product/',$file->getClientOriginalName());
            $name_file=$file->getClientOriginalName();
        }
        else{
            $image=Product::select('image')->where('id', $id)->first();
            $name_file=$image->image;
        }
        Product::where('id', $id)
        ->update
        ([
            'name'=>$request->name,
            'id_type'=>$request->type,
            'unit_price'=>$request->unit_price,
            'promotion_price'=>$request->promotion_price,
            'unit'=>$request->unit,
            'description'=>$request->description,
            'image'=>$name_file,
            'new'=>'1'
        ]);
    }
}
