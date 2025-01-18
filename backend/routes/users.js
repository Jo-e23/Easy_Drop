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
  id:ObjectId,
  
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


// get vendors list




module.exports = router;
