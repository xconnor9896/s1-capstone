const mongoose = require('mongoose')

const Product = new mongoose.Schema({
    name: {
        type: String,
        required: [true, `Must enter a name...`],
        unique: true
    },
    price: {
        type: Number,
        required: [true, 'Must enter a price...'],
    },
    image: {
        type: String,
        required: [true, `Please add a picture for your product.`]
    }
})

module.exports = mongoose.model('Product', Product)