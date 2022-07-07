module.exports = {
    insertOrder: function (conexion,values,funcion) {
        conexion.query("INSERT INTO `orders` (`productos`,`costo`,`nombre`,`email`,`estado`,`provincia`,`ciudad`,`direccion`,`numero`,`piso`,`telefono`,`fecha`,`envio`,`codigo`) VALUES (?)",[values],funcion)
    },
//    searchCode: function(conexion,funcion){
//     conexion.query("SELECT id FROM orders ORDER BY id DESC LIMIT 1")
//     }
}