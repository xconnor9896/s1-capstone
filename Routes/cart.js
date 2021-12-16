const express = require('express')
const router = express.Router()

const { addItem, removeItem, getItems } = require('../Controllers/cartCon')

router.route('/')
    .get(getItems)
    .post(addItem)
    .delete(removeItem)

module.exports = router