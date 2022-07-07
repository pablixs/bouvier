var express = require('express');
var router = express.Router();
const carritoController = require('../controllers/carritoController')
const Checkout = require('../models/Checkout')
/* GET home page. */

router.post('/add-to-cart',carritoController.addToCart)

router.get('/',carritoController.index)

router.post('/eliminar-producto',carritoController.deleteFromTheCart)



router.post('/editar-cantidad',carritoController.editQuantity)



router.get('/checkout',carritoController.checkout)
  

router.post('/checkout/place_order',carritoController.placeOrder);

router.post('/checkout/gracias',carritoController.gracias)


module.exports = router;
