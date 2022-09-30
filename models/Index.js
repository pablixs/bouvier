module.exports = {
    buscar: function (conexion,busqueda,funcion) {
        conexion.query("SELECT * FROM `productos` WHERE `nombre` LIKE ?",[busqueda],funcion)
    },
    jabonesRandom: function( conexion,funcion){
        conexion.query("SELECT * FROM productos WHERE categoria = 'capilares' ORDER BY RAND() LIMIT 8",funcion)
    }
}