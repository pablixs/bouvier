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
    obtenerKits: function (conexion, funcion) {
        conexion.query("SELECT * FROM productos WHERE categoria='kits'", funcion)
    },
    retornarDatosIDJabones: function (conexion, id,funcion) {
            conexion.query("SELECT * FROM productos WHERE id=? AND categoria='jabones'", [id],funcion)
    },
    retornarDatosIDCremas: function (conexion, id, funcion) {
            conexion.query("SELECT * FROM productos WHERE id=? AND categoria='cremas'", [id], funcion)
    },
    retornarDatosIDCapilares: function (conexion, id, funcion) {
            conexion.query("SELECT * FROM productos WHERE id=? AND categoria='capilares'", [id], funcion)
    },
    retornarDatosIDExfoliantes: function (conexion, id, funcion) {
            conexion.query("SELECT * FROM productos WHERE id=? AND categoria='exfoliantes'", [id], funcion)
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
    retornarDatosIDKits: function (conexion, id, funcion) {
            conexion.query("SELECT * FROM productos WHERE id=? AND categoria='kits'", [id], funcion)
    },
    insertarPregunta: function(conexion, datos,funcion){
        conexion.query("INSERT INTO `comentarios` (`comentario_fecha`,`comentario_text`,`comentario_productoid`) VALUES (?)",[datos],funcion)
    },
    leerPreguntaPorProducto: function(conexion,id,funcion){
        conexion.query("SELECT * FROM `comentarios` WHERE `comentario_productoid`=?; SELECT * FROM `respuesta`",[id],funcion)
        // conexion.query("SELECT * FROM `respuesta`",funcion)
    },
    insertarRespuesta: function(conexion, datos,id,funcion){
        conexion.query("INSERT INTO `respuesta` (`respuesta_fecha`,`respuesta_text`,`padre_id`) VALUES (?); UPDATE comentarios SET comentario_respondido = '1' WHERE comentario_id=?",[datos,id],funcion)
        // conexion.query("UPDATE `comentarios` SET `comentario_respondido` = '1' WHERE `comentarios`.`comentario_id`=(?)",[id],funcion)
        console.log("desde la query"+id)
    },
    eliminarPregunta: function(conexion,id,funcion){
        conexion.query("DELETE FROM comentarios WHERE comentario_id=?",[id],funcion)
    },
    eliminarRespuesta: function(conexion,id,padre_id,funcion){
        conexion.query("DELETE FROM respuesta WHERE respuesta_id=?; UPDATE comentarios SET comentario_respondido = '0' WHERE comentario_id=?",[id,padre_id],funcion)
    },
}