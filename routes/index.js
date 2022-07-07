var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bouvier Artesanal' });
});

router.get('/buscar',indexController.buscarIndex)

router.post('/buscar-consulta',indexController.buscar)

module.exports = router;