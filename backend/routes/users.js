var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Vendor_Db').then(()=>console.log('hello JO'));
const Schema = mongoose.Schema;
const ObjectId=Schema.ObjectId;
const VendorSchema = new Schema({
    id:ObjectId,
    createdOn:Date,
    fullname:String, 
    phone:Number,
    email:String,
    address:String,
    businessName:String,
    password:String
});
const vendorModel = mongoose.model('vendors',VendorSchema); //VendorSchema


    // create vendors
  router.post('/vendor',async function (req,res,next) {
    try{
      const vendors = await vendorModel.create(req.body)
        console.log(vendors)
        res.send(vendors);
      }
    catch(err){
      res.send({
        message:"No vendor is created"
      })

    }
  })

  // get vendors list
  router.get('/vendorList',async function(req,res,next){
  try{

  const vendorList = await vendorModel.find();
  console.log(vendorList);
  res.send(vendorList);
  }
  catch(err){
  message:"No Valid vendor data available"
  }
  })
    
    const categorySchema = new Schema({
      id:ObjectId,
      name:{
        required : true,
        type: String
      }
    });

    const category = mongoose.model('categories',categorySchema)
  
  // create category by vendors
  router.post('/category',async function(req,res,next){
    try{
      let categories = await category.create(req.body)
      console.log(categories);
      res.send({
        message:"category created",categories})
    }
    catch(err){
      message:"category is ot created"
    }
  });


  // get category list
  router.get('/categoryList', async function(req, res, next){
  try{
    const categoryList = await category.find()
    console.log(categoryList);
    res.send(categoryList);
  }
    catch(er){
      message:"No category list available"
    }
  });
  // create product details
  const productSchema = new Schema({
    id:ObjectId,
    name:{
      required:true,
      type:String
    },
    quantity:{
      required:true,
      type:String
    },
    price:{
      required:true,
      type:Number
    },
    categoryId:{
      required:true,
      type:ObjectId,
      ref:'category'

    },
    image:{
      required:true,
      type:String
    }
  });
  const productModel = mongoose.model('products',productSchema);

  // create product details by vendor

  router.post('/product',async function(req,res,next){
    try{
      let product = await productModel.create(req.body);
      console.log(product);
      res.send(product);
    }
  catch(er){
    message:"product is not created"
  }
  })
  // get product details list
  router.get('/productList',async function(req,res,next){
    try{
    const productList = await productModel.find()
    console.log(productList);
    res.send(productList);
    }
    catch(er){
      message:"No products available"
    }
  });
  // order selection
  const orderSchema = new Schema({
    id:ObjectId,
    
    quantity:{
      required:true,
      type:String
    },
    price:{
      required:true,
      type:Number
    },
    productId:{
      required:true,
      type:ObjectId,
      ref:'productModel'

    },
    categoryId:{
      required:true,
      type:ObjectId,
      ref:'category'

    }
  })
  const orderModel = mongoose.model('orders',orderSchema);

  router.post('/orderSelect',async function(req,res,next){
    try{
      const orderSelect = await orderModel.create(req.body)
      console.log(orderSelect);
      res.send(orderSelect);
    }
    catch(er){
      message:"No order selected"
    }
  })
// get order list by vendor
router.get('/orders',async function(req,res,next){
  try{
    const orders= await orderModel.find()
    console.log(orders);
    res.send(orders);
  }
  catch(er){
    message:"No orders available"
  }
})

module.exports = router;

