const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Product = new Schema({
    prodId: {
    type: Number
  },
  prodName: {
    type: String
  },
  pizza: {
    type: String
  } ,
  price: {
    type:Number
  } ,
  base: {
    type: String
  },
  type: {
    type: String
  }
},{
    collection: 'productpizza'
});

module.exports = mongoose.model('Product', Product);


