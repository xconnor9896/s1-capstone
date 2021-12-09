const mongoose = require('mongoose')

const Product = new mongoose.Schema({
    name: {
        type: String,
        required: [true, `Must enter a name...`],
        unique: true
    },
    price: {
        type: String,
        required: [true, 'Must enter a price...'],
        match: [/\$\d+\.\d\d/, 'Enter a valid price.'] //might remove if regex decides it wants to be cringe (very likely)
    },
    image: {
        type: String,
        required: [true, `Please add a picture for your product.`]
    }
})

module.exports = mongoose.model('Product', Product)