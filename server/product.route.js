const express = require('express');
const app = express();
const apiprodRouter = express.Router();

// // Require Business model in our routes module
 let Product = require('./Product');
// let Product=require('./product')
// // Defined store route
// prodRoutes.route('/add').post(function (req, res) {
//   let product = new Product(req.body);///{prodId:9010,prodName:"adf",designation:"asd"};
//   console.log("Product.route.js : Product : "+Product);
//   Product.save()
//     .then(Product => {
//       res.status(200).json({'Product': 'Product in added successfully'});
//     })
//     .catch(err => {
//     res.status(400).send("unable to save to database");
//     });
// });

// // Defined get data(index or listing) route
// prodRoutes.route('/allProd').get(function (req, res) {
//   console.log("/Products called "); 
//   Product.find(function (err, Product){
//     if(err){
//       console.log(err);
//     }
//     else {
//       console.log(Product);
//       res.json(Product);
//     }
//   });
// });

// // Defined delete data
// prodRoutes.route('/delete/:prodId').delete(function (req, res) {
//   console.log("/Products called "); 
//   Product.findOneAndDelete({prodId:req.params.prodId},function (err, Product){
//     if(err){
//       console.log(err);
//     }
//     else {
//       console.log(Product);
//       res.send(req.params.prodId+"removed");
//     }
//   });
// });

// module.exports=prodRoutes;


//get all Product
apiprodRouter.route('/allProd').get((req,resp)=>{
  //resp.send("<h1>Called All prod</h1>");
  //1. get Data from mongodb
  Product.find((err,data)=>{
    if(err) {
        resp.send("Failure");
    }
    resp.send(data);
  });
});

//get Product by prodId
apiprodRouter.route('/:prodId').get((req,resp)=>{
 // resp.send("<h1>Called getby prod</h1>");
 let p_prodId=req.params.prodId;
 Product.find({prodId:p_prodId},(err,data)=>{
  if(err) resp.send("Failed to load data for:"+p_prodId);
      resp.send(data);
});
});

// //get Product by prodName
// apiprodRouter.route('/ename/:prodName').get((req,resp)=>{
//  // resp.send("<h1>Called getby prodName</h1>");
//  let p_prodName=req.params.prodName;
//  Product.find({prodName:p_prodName},(err,data)=>{
//   if(err) resp.send("Failed to load data for:"+p_prodName);
//       resp.send(data);
// });
// });

//add Product 
apiprodRouter.route('/add').post((req,resp)=>{
  let body_Product=new Product(req.body);
  //resp.send(Product);
  body_Product.save().then(
              ()=>resp.send("New Product added to database"),
              (err)=>resp.send("Failure while adding Product details! ")
  );
});
//delete Product 
apiprodRouter.route('/delete/:prodId').delete((req,resp)=>{
  //resp.send("<h1>Called delete by prod1</h1>");
  let p_prodId=req.params.prodId;
  Product.findOneAndDelete({prodId:p_prodId},(err,data)=>{
      if(err) resp.send("no records found");
      resp.send(data+"deleted records");
  });
});

//update Product
apiprodRouter.route('/update/:prodId/:price').put((req,resp)=>{
let p_prodId=req.params.prodId;
let p_price=req.params.price;

  Product.findOneAndUpdate({prodId:p_prodId},{price:p_price},(err,data)=>{
      if(err) resp.send("failed to update");
      resp.send("updated records for "+p_prodId+" as "+p_price);
  });
});

module.exports=apiprodRouter;