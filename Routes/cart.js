const express = require('express')
const router = express.Router()

const { addItem, removeItem } = require('../Controllers/cartCon')

router.route('/')
    .post(addItem)
    .delete(removeItem)