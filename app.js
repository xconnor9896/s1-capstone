require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

// controller goes here

// middleware goes here

const port = process.env.PORT || 3000;

app
    .use(express.json())
    // .use(express.static('/'public))
    //methods for the controlers

    app.use('/api/v1/products', productRouter)
    app.use('/api/v1/cart', cartRouter)
const start = async () => {
    try {
        app.listen(port, console.log(`listening @ port ${port}`));
    } catch (err) {
        console.log(err);
    }
}

start();


//*farts on ur app.js* (cause connor wrote it its cringe and gets farted on)