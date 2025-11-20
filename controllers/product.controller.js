const Product = require('../models/product.model.js');



const getProducts = async(req, res) =>{
    try{
        const product = await Product.find({});
        res.status(200).json(product)
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

const getSingleProduct = async(req, res) =>{
     try{
        const product = await Product.findById(id);
        res.status(200).json(product);

        if(!product){
            return res.status(404).json({message:'Product NotFound'});
        }
     }
     catch(error){
        res.status(500).json(error.message);
     }
};

const postProduct = async(req, res) => {
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};

const updateProduct = async(req, res) =>{
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);

        if(!product){
            return res.status(404).json({message:'Product not Found'});
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};


const deleteProduct = async(req, res) =>{
    try{
        const{id} = req.params;
        const deleteProduct = await Product.findByIdAndDelete(id);
           
        if(!deleteProduct){
            return res.status(404).json({message:'No Product Found'});
        }
            res.status(200).json({message:'Product Deleted Successfully'});
        }
        catch(error){
            res.status(505).json({message:'error.message'});
        }
};

module.exports = {
    getProducts,
    getSingleProduct,
    postProduct,
    updateProduct,
    deleteProduct
};