require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const connectDB = require('./db/connect');

const fileUpload = require('express-fileupload');
const cloudinary = require('cloudinary').v2;

const productRouter = require('./Routes/products');
const cartRouter = require('./Routes/cart');
const paymentCon = require('./Controllers/paymentCon');
// controller goes here

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

// middleware goes here

const port = process.env.PORT || 3000;

app
    .use(express.json())
    .use(express.static('./public'))
    .use(fileUpload({useTempFiles: true}))
    .post('/stripe', paymentCon)
    .use('/api/v1/products', productRouter)
    .use('/api/v1/cart', cartRouter)
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, console.log(`listening @ port ${port}`));
    } catch (err) {
        console.log(err);
    }
}

start();


//*farts on ur app.js* (cause connor wrote it its cringe and gets farted on)