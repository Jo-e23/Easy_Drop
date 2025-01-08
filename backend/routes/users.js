var express = require('express');
var router = express.Router();

var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Vendor_Db').then(()=>console.log('hello JO'));
const Schema = mongoose.Schema;
const ObjectId=Schema.ObjectId;
const VendorSchema = new Schema({
    id:ObjectId,
    createdOn:Date,
    fullname: String, 
    phone: Number,
    email: String,
    address:String,
    businessName:String,
    password:String
});
const vendorModel = mongoose.model('vendors',VendorSchema); //VendorSchema

/* GET Vendor listing. */
router.get('/',async function(req, res, next) {
  try{  
  let users= await vendorModel.find();
  console.log(vendors);
  res.send(vendors);
  }
  catch(e){res.send({
    message:'user list',
    status:'error',
    data:[]
  })
  }
});
module.exports = router;
