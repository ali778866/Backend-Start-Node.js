const express = require('express');

const productController = require('../controllers/product')

const router = express.Router();

router.get('/contactus', productController.getContact);

router.post('/success', productController.postContact)

module.exports = router;