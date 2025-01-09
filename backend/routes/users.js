var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Vendor_Db').then(()=>console.log('hello JO'));
  const Schema = mongoose.Schema;
const ObjectId=Schema.ObjectId;
const userSchema = new Schema({
    id:ObjectId,
    createdOn:Date,
    fullname: String, 
    phone: Number,
    email: String,
    password:String
   
  });

  const userModel =mongoose.model("userdetails",userSchema);

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

module.exports = router;
