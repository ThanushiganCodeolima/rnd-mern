var express = require('express');
var router = express.Router('express');
const { DUMMY_PRODUCT_LIST } = require('../dummy/dummy-products');
var router = express.Router();

// List Products 
router.get('/', function(req, res, next) {

    return res.status(200).json(DUMMY_PRODUCT_LIST)
    const products = DUMMY_PRODUCT_LIST
    return res.status(200).json(products)

});


// Product Get By Id 
router.get('/:id', function(req, res, next) {

    const id = req.params.id;
    const product = DUMMY_PRODUCT_LIST.find((item) => item._id === id)
    if(product){
        return res.status(200).json(product)
    }else{
        return res.status(404).json()
    try{
        const id = req.params.id;
        const product = DUMMY_PRODUCT_LIST.find((item) => item._id === id)
        if(product){
            return res.status(200).json(product)
        }else{
            return res.status(404).json()
        }
    }catch(err){
        return res.status(500).json()
    }

}});
// TODO :
// Create Product

// Product Update by Id 

// Delete Product
// Delete Product by Id
router.delete('/:id', function(req, res, next) {

    try{
        const id = req.params.id;
        // Start : Should replace by Actual DB Query 
        const product = DUMMY_PRODUCT_LIST.find((item) => item._id === id)
        // End 
        if(product){
            // Start : Should replace by Actual DB Query 
            const index = DUMMY_PRODUCT_LIST.findIndex((item) => item._id === product._id)
            DUMMY_PRODUCT_LIST.splice(index, 1)
            // End 
            return res.status(200).json()
        }else{
            return res.status(404).json()
        }
    }catch(err){
        return res.status(500).json()
    }

});




module.exports = router;