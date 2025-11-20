const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        name:    {type: String, required: [true, 'Enter Product Name']},
        quantity:{type: Number, required: true, default: 0},
        image:   {type: String, required: false},
    },
    {   
        timestamps: true,
    }
);

module.exports = mongoose.model('Product' , ProductSchema)
