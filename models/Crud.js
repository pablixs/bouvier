module.exports = {
    insertar:function(conexion,datos,archivos,funcion){
        conexion.query("INSERT INTO productos(nombre,precio,descripcionlarga,stock,alternative,imagen,categoria) VALUES (?,?,?,?,?,?,?)",[datos.nombre,datos.precio,datos.descripcionlarga,datos.stock,datos.alternative,archivos,datos.categoria],funcion)
    },
    retornarDatosID:function(conexion,id,funcion){
        conexion.query("SELECT * FROM productos WHERE id=?",[id],funcion)
    },
    borrar:function(conexion,id,funcion){
        conexion.query("DELETE FROM productos WHERE id=?",[id],funcion)
    },
    actualizar:function(conexion,datos,archivos,funcion){
        conexion.query("UPDATE `productos` SET `nombre`=?,`precio`=?,`descripcionlarga`=?,`stock`=?,`alternative`=?,`categoria`=? WHERE `productos`.`id`=?",[datos.nombre,datos.precio,datos.descripcionlarga,datos.stock,datos.alternative,datos.categoria,datos.id],funcion)
    },
    actualizarArchivo:function(conexion,datos,archivo,funcion){
        conexion.query("UPDATE productos SET imagen=? WHERE id=?",[archivo.filename,datos.id],funcion)
    },
    obtenerPedidos:function (conexion, funcion) {
        conexion.query("SELECT * FROM orders", funcion)
    },
    editarPedidoPorId:function (conexion,categoria,funcion) {
        conexion.query("UPDATE orders SET estado=? WHERE id=?",[categoria.estado,categoria.id],funcion)
    },
    eliminarPedidoPorId:function (conexion,pedido,funcion) {
        conexion.query("DELETE FROM orders WHERE id=?",[pedido.id],funcion)
    },

}