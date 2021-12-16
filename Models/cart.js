const mongoose = require('mongoose')

const Cart = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        default: 1
    }
})

module.exports = mongoose.model('Cart', Cart)