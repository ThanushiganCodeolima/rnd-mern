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
    }

});
// TODO :
// Create Product

// Product Update by Id 

// Delete Product

module.exports = router;