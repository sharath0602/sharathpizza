const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./DB');
 
    
const productRoutes=require('./server/product.route');

//instead of callback called promise cz they can not return any thing while any error in return 
    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB, { useNewUrlParser: true }).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );

//step 2+3: 
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    app.use(express.static(path.join(__dirname, 'public')));
    app.use('/product',productRoutes);    
    const port = process.env.PORT || 4000;
    
    app.get('/',(req,resp)=>{
      resp.sendFile(__dirname+"/index.html");
    });  
    app.use('/prod',productRoutes)
    
    app.listen(4000,()=>{console.log("server listening at 4000")});