module.exports = {
    obtener: function (conexion, funcion) {
        conexion.query("SELECT * FROM productos", funcion)
    },
    obtenerJabones: function (conexion, funcion) {
        conexion.query("SELECT * FROM productos WHERE categoria='jabones'", funcion)
    },
    obtenerCremas: function (conexion, funcion) {
        conexion.query("SELECT * FROM productos WHERE categoria='cremas'", funcion)
    },
    obtenerBanoNutricionTratamiento: function (conexion, funcion) {
        conexion.query("SELECT * FROM productos WHERE categoria='bano-nutricion-tratamiento'", funcion)
    },
    obtenerCapilares: function (conexion, funcion) {
        conexion.query("SELECT * FROM productos WHERE categoria='capilares'", funcion)
    },
    obtenerExfoliantes: function (conexion, funcion) {
        conexion.query("SELECT * FROM productos WHERE categoria='exfoliantes'", funcion)
    },
    obtenerJabonesLiquidos: function (conexion, funcion) {
        conexion.query("SELECT * FROM productos WHERE categoria='jabones-liquidos'", funcion)
    },
    obtenerLimpiadores: function (conexion, funcion) {
        conexion.query("SELECT * FROM productos WHERE categoria='limpiadores'", funcion)
    },
    obtenerMascarillas: function (conexion, funcion) {
        conexion.query("SELECT * FROM productos WHERE categoria='mascarillas'", funcion)
    },
    obtenerOtros: function (conexion, funcion) {
        conexion.query("SELECT * FROM productos WHERE categoria='otros'", funcion)
    },
    obtenerSerum: function (conexion, funcion) {
        conexion.query("SELECT * FROM productos WHERE categoria='serum'", funcion)
    },
    obtenerTonicos: function (conexion, funcion) {
        conexion.query("SELECT * FROM productos WHERE categoria='tonicos'", funcion)
    },
    retornarDatosIDJabones: function (conexion, id,funcion) {
            conexion.query("SELECT * FROM productos WHERE id=? AND categoria='jabones'", [id],funcion)
    },
    retornarDatosIDCremas: function (conexion, id, funcion) {
            conexion.query("SELECT * FROM productos WHERE id=? AND categoria='cremas'", [id], funcion)
    },
    retornarDatosIDBanoNutricion: function (conexion, id, funcion) {
            conexion.query("SELECT * FROM productos WHERE id=? AND categoria='bano-nutricion-tratamiento'", [id], funcion)
    },
    retornarDatosIDCapilares: function (conexion, id, funcion) {
            conexion.query("SELECT * FROM productos WHERE id=? AND categoria='capilares'", [id], funcion)
    },
    retornarDatosIDExfoliantes: function (conexion, id, funcion) {
            conexion.query("SELECT * FROM productos WHERE id=? AND categoria='exfoliantes'", [id], funcion)
    },
    retornarDatosIDJabonesLiquidos: function (conexion, id, funcion) {
            conexion.query("SELECT * FROM productos WHERE id=? AND categoria='jabones-liquidos'", [id], funcion)
    },
    retornarDatosIDLimpiadores: function (conexion, id, funcion) {
            conexion.query("SELECT * FROM productos WHERE id=? AND categoria='limpiadores'", [id], funcion)
    },
    retornarDatosIDMascarillas: function (conexion, id, funcion) {
            conexion.query("SELECT * FROM productos WHERE id=? AND categoria='mascarillas'", [id], funcion)
    },
    retornarDatosIDOtros: function (conexion, id, funcion) {
            conexion.query("SELECT * FROM productos WHERE id=? AND categoria='otros'", [id], funcion)
    },
    retornarDatosIDSerum: function (conexion, id, funcion) {
            conexion.query("SELECT * FROM productos WHERE id=? AND categoria='serum'", [id], funcion)
    },
    retornarDatosIDTonicos: function (conexion, id, funcion) {
            conexion.query("SELECT * FROM productos WHERE id=? AND categoria='tonicos'", [id], funcion)
    },
}