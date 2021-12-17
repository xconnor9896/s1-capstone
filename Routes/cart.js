const express = require('express')
const router = express.Router()

const { addItem, updateItem, getItems } = require('../Controllers/cartCon')

router.route('/')
    .get(getItems)
    .post(addItem)
    .put(updateItem)

module.exports = router