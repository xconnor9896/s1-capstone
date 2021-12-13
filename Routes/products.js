const express = require('express')
const router = express.Router()

const { getAllProducts, createProduct } = require('../Controllers/products')
const uploadFile = require('../Controllers/fileUpload')

router.route('/')
    .get(getAllProducts)
    .post(createProduct)

router.route('/upload')
    .post(uploadFile)

module.exports = router;