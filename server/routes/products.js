var express = require('express');
var router = express.Router();
var Product = require('../models/products')
var { validateRequestPayload } = require('../util/validateRequestPayload')

// List Products 
router.get('/', async (req, res, next) => {
  setTimeout(async() => {
        try{
            const productList = await Product.find({}).skip((page - 1) * limit).limit(limit).sort({_id : -1 }).exec()
            return res.status(200).json(productList)
        }catch(e){
            res.status(500).json()
        }
},2000)

});

// Product Get By Id 
router.get('/:id', async (req, res, next) => {
    
    try{
        const _id = req.params.id;
        const product = await Product.findOne({_id : _id }).exec()        
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
   { key: "price", type: "number", isRequired: true },
   { key: "desc", type: "string", isRequired: false }
];
router.post('/', async (req, res, next) => {

    try{
    
        // TODO : Use lib for paylod validation
        const isError = validateRequestPayload(req.body, validationConfigCreateObj)
        if(!isError.length){
            const newProduct = new Product(req.body)
            await newProduct.save()
            // TODO : if product already exsist in db should return 409 
            return res.status(200).json(newProduct)
        }else{
            return res.status(400).json(isError)
        }
    }catch(err){
        return res.status(500).json()
    }

});

// Product Update by Id 
const validationConfigUpdateObj = [
    { key: "name", type: "string", isRequired: false },
    { key: "price", type: "number", isRequired: false },
    { key: "desc", type: "string", isRequired: false }
 ];
router.put('/:id', async (req, res, next) => {


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
        const product = await Product.findOne({_id : id }).exec() 
        if(product){
            await Product.deleteOne({ _id : product._id })
            return res.status(200).json()
        }else{
            return res.status(404).json()
        }
    }catch(err){
        return res.status(500).json()
    }

});



module.exports = router;