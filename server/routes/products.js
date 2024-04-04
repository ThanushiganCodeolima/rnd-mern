var express = require('express');
const { v4: uuidv4 } = require('uuid');
const { DUMMY_PRODUCT_LIST } = require('../dummy/dummy-products');
var router = express.Router();
var Product = require('../models/products')

// List Products 
router.get('/', async (req, res, next) => {
  console.log('Run')
    try{
        const productList = await Product.find({}).exec()
        return res.status(200).json(productList)
    }catch(e){
        res.status(500).json(e)
    }

});

// Product Get By Id
router.get('/:id', async (req, res, next) => {
    
    try{
        const _id = req.params.id;
        const product = await Product.findOne({_id : _id }).exec()
        console.log(_id)     
        if(product){
            return res.status(200).json(product)
        }else{
            return res.status(404).json()
        }
    }catch(err){
        return res.status(500).json()
    }

});

// Create Product
router.put('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const { name, description, price, timestamp } = req.body;
        console.log(name, description, price, timestamp);

        if (!name) {
            return res.status(400).json("Name is not defined");
        }

        if (!description) {
            return res.status(400).json("Description is not defined");
        }

        if (!price || isNaN(price)) {
            return res.status(400).json("Price is not defined or is not a number");
        }

        if (!timestamp) {
            return res.status(400).json("Timestamp is not defined");
        }

        const product = await Product.updateOne({ _id: id }, { name: name, description: description, price: price, timestamp: timestamp });
        
        if (product) {
            return res.status(200).json(product);
        } else {
            return res.status(404).json();
        }
    } catch (err) {
        return res.status(500).json(err);
    }
});

// Create Product
router.post('/', async (req, res, next) => {
    
    try{
        const {_id, name,description, price,timestamp } = req.body;
        if(_id && name && description && price && !isNaN(price) && timestamp){
            const newProduct = new Product({"_id":_id,"name":name, "description":description, "price":price, "timestamp":timestamp});
            await newProduct.save()
            // TODO : if product already exsist in db should return 409 
            return res.status(200).json(newProduct)
        }else{
            return res.status(400).json()
        }
    }catch(err){
        return res.status(500).json(err)
    }

});

// Delete Product by Id
router.delete('/:id', async (req, res, next) => {
    try{
        const id = req.params.id;
        const product = await Product.deleteOne({_id: id});
        if(product){
            return res.status(200).json(product)
        }
        else{
            return res.status(404).json()
        }
    }catch(err) {
        return res.status(500, err).json()
    }
})


module.exports = router