var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Vendor_Db').then(()=>console.log('hello JO'));
  const Schema = mongoose.Schema;
const ObjectId=Schema.ObjectId;
const userSchema = new Schema({
    id:ObjectId,
    createdOn:Date,
    username: String, 
    phone: Number,
    email: String,
    address:String,
    businessName:String,
    password:String
   
  });

  const userModel =mongoose.model("users",userSchema);

  


//Read Customer API

router.get('/', function(req, res, next) {
  userModel.find().then((users)=>{
res.send(users);
  }).catch((e)=>{
    res.send("Error",e);
  })
});

//Signup API

router.post('/create', function(req, res, next) {
  userModel.create(req.body).then((user)=>{
    res.send(user);
  }).catch((e)=>{
    res.send("Error",e);
  })
});

//Login API

router.get('/login', function(req, res, next) {

  let email= req.body.email;
  let password = req.body.password;

  userModel.findOne({email:email, password:password}).then((user)=>{
    res.send(user);
  }).catch((e)=>{
    res.send("Error",e);
  })
});





//Category Schema
const categorySechema = new Schema({
  id:String,
  
  categoryname:String,
  
 
});

const category  =mongoose.model("categories",categorySechema);

// read category
router.get('/categoryList', async function(req, res, next){
  try{
    const categoryList = await category.find()
    console.log(categoryList);
    res.send(categoryList);
  }
    catch(er){
      res.send({
        message:"No category list available"
      })
    }
  });


 // create Category 
 router.post('/category',async function(req,res,next){
  try{
    let categories = await category.create(req.body)
    console.log(categories);
    res.send({
      message:"category created",categories})
  }
  catch(err){
    res.send({
      message:"category is ot created"
    })
  }
});



//Product Schema
const productSchema = new Schema({
  ProductId:String,
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
    type:String,
    ref:'category'

  },
  image:{
    required:true,
    type:String
  }
});
const productModel = mongoose.model('products',productSchema);

//create product details
router.post('/product',async function(req,res,next){
  try{
    let product = await productModel.create(req.body);
    console.log(product);
    res.send(product);
  }
catch(er){
  res.send({
    message:"product is not created"
  })
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
    res.send({
      message:"No products available"
    })
  }
});






module.exports = router;
