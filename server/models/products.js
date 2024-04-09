const mongoose = require('mongoose')

const schema = new mongoose.Schema({ 
    name: String,
    price: Number,  
    desc:String
});

const Product = mongoose.model('Product', schema);

module.exports = Product;