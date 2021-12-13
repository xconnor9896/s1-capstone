const mongoose = require('mongoose')

const Cart = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('Cart', Cart)