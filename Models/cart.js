const mogoose = require('mongoose')

const Cart = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: [true, `Please add a picture for your product.`]
    },
    
})

module.exports = mongoose.model('Cart', Cart)