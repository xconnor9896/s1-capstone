const mongoose = require('mongoose')

const Product = new mongoose.Schema({
    name: {
        type: String,
        required: [true, `must enter a name...`],
        unique: true
    }
})
