var con = require('../config/dbconnection')
var Crud = require('../models/Crud')
var Productos = require('../models/Productos')
var borrar = require('fs')



module.exports = {
    index: (req, res) => {
        res.render('admin/index', {
            title: 'Administrador - Bouvier Artesanal'
        })
    },
    crear: (req, res) => {
        res.render('admin/crear', {
            title: 'Añadir producto - Bouvier Artesanal'
        })
    },
    
    crearPost:  (req, res) => {
        
        var filename = req.file.filename
        var imagen = 'images/productos/subidosporweb/'+filename
        Crud.insertar(con,req.body,imagen,function(err,datos){
            res.redirect('/admin')
            console.log(err)
        })
    },
    editar: (req,res)=>{
        Crud.retornarDatosID(con,req.params.id,function(err,registros){
            console.log(registros[0])
            res.render('admin/editar',{title:'Administrador: Editar - Bouvier Artesanal',datos:registros})
        })
    },
    actualizar: (req,res)=>{
        if(req.file){
            if(req.file.filename){
                Crud.retornarDatosID(con,req.body.id,function(er,registros){
                    var nombreImagen = "public/images/productos/subidosporweb/"+(registros[0].imagen)
                    
                    if(borrar.existsSync(nombreImagen)){
                        borrar.unlinkSync(nombreImagen)
                    }
                    Crud.actualizarArchivo(con,req.body,req.file,function(err){

                    })
                })
            }
        }
        if(req.body.nombre){
            Crud.actualizar(con,req.body,function(err){})
        }

        res.redirect('/admin/productos')
    },
    productosAdmin: (req,res)=>{
        Productos.obtener(con,(err,datos)=>{
            res.render('admin/productos',{title:'Administrador: Productos - Bouvier Artesanal', datos:datos })
        })
    },
    eliminar: (req,res)=>{
        Crud.retornarDatosID(con,req.params.id,function(er,registros){
            var nombreImagen = "public/images/productos/subidosporweb/"+(registros[0].imagen)
            
            if(borrar.existsSync(nombreImagen)){
                borrar.unlinkSync(nombreImagen)
            }
            Crud.borrar(con,req.params.id,function(err){
                res.redirect('/admin/productos')
            })
        })
    },
    pedidos: (req,res)=>{
        Crud.obtenerPedidos(con,function(err,datos){
            res.render('admin/pedidos',{
                title: 'Administrador: Pedidos - Bouvier Artesanal',
                datos:datos
            })
        })
    },
    pedidosEditar: (req,res)=>{
        Crud.editarPedidoPorId(con,req.body,function(err,registros){
            res.redirect('/admin/pedidos')
        })
    },
    pedidosEliminar: (req,res)=>{
        Crud.eliminarPedidoPorId(con,req.body,function(err,registros){
            res.redirect('/admin/pedidos')
        })
    },
}