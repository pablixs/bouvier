module.exports = {
    buscar: function (conexion,busqueda,funcion) {
        conexion.query("SELECT * FROM `productos` WHERE `nombre` LIKE ?",[busqueda],funcion)
    },
}