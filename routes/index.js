var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController')
// const generateSitemap =  require('../middlewares/generateSitemap')


/* GET home page. */

router.get('/',indexController.getIndex)
// router.get('/sitemap.xml',generateSitemap)


router.get('/buscar',indexController.buscarIndex)

router.post('/buscar-consulta',indexController.buscar)

module.exports = router;