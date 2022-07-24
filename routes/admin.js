var express = require('express');
var router = express.Router();
const crudController = require('../controllers/crudController');
const adminController = require('../controllers/adminController')
const authPermissions = require("../middlewares/authPermissions")
var multer = require('multer');
var fecha = Date.now();



var rutaAlmacen = multer.diskStorage({

        destination: function (request, file, callback) {
            callback(null, './public/images/productos/subidosporweb')
        },
        filename: function (request, file, callback) {
            console.log(file)
            callback(null, fecha + "_" + file.originalname)
        }
    }
);

var cargar = multer({
    storage: rutaAlmacen
})

router.get('/login',crudController.login)
router.post('/login/try',adminController.login)

router.use(authPermissions({
    authRequired:true,
    exclude:["/admin/login"]
}))

router.get('/', crudController.index);



router.get('/productos', crudController.productosAdmin)

router.get('/pedidos', crudController.pedidos)

router.post('/pedidos', crudController.pedidosEditar)

router.post('/pedidos/eliminar', crudController.pedidosEliminar)


router.get('/crear', crudController.crear)

router.post('/crear',cargar.single("imagen") , crudController.crearPost)

router.post('/editar/:id',crudController.editar)

router.post('/eliminar/:id',crudController.eliminar)

router.post('/actualizar',cargar.single("imagen"),crudController.actualizar)

module.exports = router;