var express = require('express');
var router = express.Router();
var Product = require('../models/products')

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
//Com Method 
/** 
* @param {*} reqPayload
* @param {*} validationConfig
* @returns Array
*/
const validateRequestPayload = (reqPayload ={}, validationConfig =[]) =>{

    const isError = [];
    //const name = reqPayload.name
    // const price = reqPayload.price
    // if(!name ) {
    //    isError = isError + `Name is Required`
    // }
    const vConfigLength = validationConfig.length;
    for(let i = 0; i< vConfigLength; i++){
        const key = validationConfig[i]
        const isKeyFound = reqPayload[key];
        if(!isKeyFound){
            isError.push({
            key,
            error: `${key} is Required`
            })
        }
    }
    return isError;
}
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
            const validationConfig = ["name","description", "price","timestamp"];
            if(!isError.length){
            const newProduct = new Product({"_id":_id,"name":name, "description":description, "price":price, "timestamp":timestamp});
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