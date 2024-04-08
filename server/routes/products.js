var express = require('express');
var router = express.Router();
var Product = require('../models/products')
var { validateRequestPayload } = require('../util/validateRequestPayload')

// List Products  
router.get('/', async (req, res, next) => {
  setTimeout(async() => {
    try{
        const productList = await Product.find({}).limit(3).exec()
        return res.status(200).json(productList)
    }catch(e){
        res.status(500).json(e)
    }
},2000)

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
const validationConfigCreateObj = [
    { key: "name", type: "string", isRequired: true },
    { key: "price", type: "number", isRequired: true }
 ];
router.post('/', async (req, res, next) => {
    
    try{
       
        const isError = validateRequestPayload(req.body, validationConfigCreateObj)
            if(!isError.length){
                const newProduct = new Product(req.body)
                await newProduct.save()
            // TODO : if product already exsist in db should return 409 
            return res.status(200).json(newProduct)
        }else{
            return res.status(400).json()
        }
    }catch(err){
        return res.status(500).json(isErrorr)
    }

});


// Product Update by Id 
const validationConfigUpdateObj = [
    { key: "name", type: "string", isRequired: false },
    { key: "price", type: "number", isRequired: false },
    { key: "desc", type: "string", isRequired: false }
 ];
router.put('/:id', async (req, res, next) => {
    
    // req.params eg : /products/:id = /products/1234 ->    id = req.params.id     =>  id = 1234
    // req.query  eg : /products?page=1 ->                  page = req.query.page  => page = 1
    // req.body   eg : { name : 'abc'} ->                   name = req.body.name   => name = "abc"

    try{
        const id = req.params.id
        const isError = validateRequestPayload(req.body, validationConfigUpdateObj)
        if(!isError.length){
            const product = await Product.findOne({_id : id }).exec() 
            if(product){                
                const updateProduct = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true } )
                // TODO : if product already exsist in db should return 409 
                return res.status(200).json(updateProduct)
            }else{
                return res.status(404).json()
            }
        }else{
            return res.status(400).json(isError)
        }
    }catch(err){
        return res.status(500).json()
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