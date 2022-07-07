var express = require('express');
var router = express.Router();
const productosController = require('../controllers/productosController')
/* GET home page. */
router.get('/',productosController.index)

router.get('/jabones',productosController.jabones);

router.get('/cremas',productosController.cremas)

router.get('/bano-nutricion-tratamiento',productosController.banoNutricionTratamiento)

router.get('/capilares',productosController.capilares)

router.get('/exfoliantes',productosController.exfoliantes)

router.get('/jabones-liquidos',productosController.jabonesLiquidos)

router.get('/limpiadores',productosController.limpiadores)

router.get('/mascarillas',productosController.mascarillas)

router.get('/otros',productosController.otros)

router.get('/serum',productosController.serum)

router.get('/tonicos',productosController.tonicos)




router.get('/jabones/:id',productosController.mostrarPorIdJabones)

router.get('/cremas/:id',productosController.mostrarPorIdCremas)

router.get('/bano-nutricion-tratamiento/:id',productosController.mostrarPorIdBanoNutricion)

router.get('/capilares/:id',productosController.mostrarPorIdCapilares)

router.get('/exfoliantes/:id',productosController.mostrarPorIdExfoliantes)

router.get('/jabones-liquidos/:id',productosController.mostrarPorIdJabonesLiquidos)

router.get('/limpiadores/:id',productosController.mostrarPorIdLimpiadores)

router.get('/mascarillas/:id',productosController.mostrarPorIdMascarillas)

router.get('/otros/:id',productosController.mostrarPorIdOtros)

router.get('/serum/:id',productosController.mostrarPorIdSerum)

router.get('/tonicos/:id',productosController.mostrarPorIdTonicos)

module.exports = router;
