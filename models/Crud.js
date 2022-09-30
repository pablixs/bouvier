module.exports = {
    insertar:function(conexion,datos,archivos,funcion){
        conexion.query("INSERT INTO productos(nombre,precio,precio_oferta,descripcionlarga,modouso,componentes1,componentes2,componentes3,componentes4,componentes5,stock,alternative,tipode,tipodepiel,cantidad,duracion,reciclable,imagen,categoria) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[datos.nombre,datos.precio,datos.precio_oferta,datos.descripcionlarga,datos.modouso,datos.componentes1,datos.componentes2,datos.componentes3,datos.componentes4,datos.componentes5,datos.stock,datos.alternative,datos.tipode,datos.tipodepiel,datos.cantidad,datos.duracion,datos.reciclable,archivos,datos.categoria],funcion)
    },
    retornarDatosID:function(conexion,id,funcion){
        conexion.query("SELECT * FROM productos WHERE id=?",[id],funcion)
    },
    borrar:function(conexion,id,funcion){
        conexion.query("DELETE FROM productos WHERE id=?",[id],funcion)
    },
    actualizar:function(conexion,datos,archivos,funcion){
        conexion.query("UPDATE `productos` SET `nombre`=?,`precio`=?,`precio_oferta`=?,`descripcionlarga`=?,`modouso`=?,`componentes1`=?,`componentes2`=?,`componentes3`=?,`componentes4`=?,`componentes5`=?,`stock`=?,`alternative`=?,`tipodepiel`=?,`cantidad`=?,`duracion`=?,`reciclable`=?,`categoria`=? WHERE `productos`.`id`=?",[datos.nombre,datos.precio,datos.precio_oferta,datos.descripcionlarga,datos.modouso,datos.componentes1,datos.componentes2,datos.componentes3,datos.componentes4,datos.componentes5,datos.stock,datos.alternative,datos.tipodepiel,datos.cantidad,datos.duracion,datos.reciclable,datos.categoria,datos.id],funcion)
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
        conexion.query("DELETE FROM orders WHERE id=?",[pedido],funcion)
    },

}