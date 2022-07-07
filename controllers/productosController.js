var con = require('../config/dbconnection')
var Productos = require('../models/Productos')
var borrar = require('fs')

module.exports ={
    index:(req,res)=>{
        Productos.obtener(con,async(err,datos)=>{
            try {
                await res.render('productos/index', {title: 'Productos - Bouvier Artesanal', productos:datos})
            } catch (error) {
                console.log(error)
                res.render('error',{title:'Error - Bouvier Artesanal'})
            }
        })
    },
    jabones:(req,res)=>{
        Productos.obtenerJabones(con,async(err,datos)=>{
            try {
                await res.render('productos/jabones', {title: 'Jabones - Bouvier Artesanal', productos:datos})
            } catch (error) {
                res.render('error',{title:'Error - Bouvier Artesanal'})
            }
        })
    },
    cremas:(req,res)=>{
        Productos.obtenerCremas(con,async(err,datos)=>{
            try {
                await res.render('productos/cremas', {title: 'Cremas - Bouvier Artesanal', productos:datos})
            } catch (error) {
                res.render('error',{title:'Error - Bouvier Artesanal'})
            }
        })
    },
    banoNutricionTratamiento:(req,res)=>{
        Productos.obtenerBanoNutricionTratamiento(con,async (err,datos)=>{
            try {
                await res.render('productos/banonutricion', {title: 'Baños de nutricion/tratamiento - Bouvier Artesanal', productos:datos})
            } catch (error) {
                res.render('error',{title:'Error - Bouvier Artesanal'})
            }
        })
    },
    capilares:(req,res)=>{
        Productos.obtenerCapilares(con,async(err,datos)=>{
            try {
                await res.render('productos/capilares', {title: 'Capilares - Bouvier Artesanal', productos:datos})
            } catch (error) {
                res.render('error',{title:'Error - Bouvier Artesanal'})                
            }
        })
    },
    exfoliantes:(req,res)=>{
        Productos.obtenerExfoliantes(con,async(err,datos)=>{
            try {
                await res.render('productos/exfoliantes', {title: 'Exfoliantes - Bouvier Artesanal', productos:datos})
            } catch (error) {
                res.render('error',{title:'Error - Bouvier Artesanal'})                
            }
        })
    },
    jabonesLiquidos:(req,res)=>{
        Productos.obtenerJabonesLiquidos(con,async(err,datos)=>{
            try {
                await res.render('productos/jabonesliquidos', {title: 'Jabones liquidos - Bouvier Artesanal', productos:datos})
            } catch (error) {
                res.render('error',{title:'Error - Bouvier Artesanal'})                
            }
        })
    },
    limpiadores:(req,res)=>{
        Productos.obtenerLimpiadores(con,async(err,datos)=>{
            try {
                await res.render('productos/limpiadores', {title: 'Limpiadores - Bouvier Artesanal', productos:datos})
            } catch (error) {
                res.render('error',{title:'Error - Bouvier Artesanal'})                
            }
        })
    },
    mascarillas:(req,res)=>{
        Productos.obtenerMascarillas(con,async(err,datos)=>{
            try {
                await res.render('productos/mascarillas', {title: 'Mascarillas - Bouvier Artesanal', productos:datos})
            } catch (error) {
                res.render('error',{title:'Error - Bouvier Artesanal'})                
            }
        })
    },
    otros:(req,res)=>{
        Productos.obtenerOtros(con,async(err,datos)=>{
            try {
                await res.render('productos/otros', {title: 'Otros - Bouvier Artesanal', productos:datos})
            } catch (error) {
                res.render('error',{title:'Error - Bouvier Artesanal'})                 
            }
        })
    },
    serum:(req,res)=>{
        Productos.obtenerSerum(con,async(err,datos)=>{
            try {
                await res.render('productos/serum', {title: 'Serum - Bouvier Artesanal', productos:datos})
            } catch (error) {
                res.render('error',{title:'Error - Bouvier Artesanal'})                 
            }
        })
    },
    tonicos:(req,res)=>{
        Productos.obtenerTonicos(con,async (err,datos)=>{
            res.render('productos/tonicos', {title: 'Tonicos - Bouvier Artesanal', productos:datos})
        })
    },
    mostrarPorIdJabones:(req,res)=>{
        Productos.retornarDatosIDJabones(con,req.params.id,async function (er, registros) {
            try {
                await res.render('productos/producto', { productos: registros[0], title: registros[0].nombre + " - Bouvier Artesanal" })
            } catch (error) {
                console.log("Error en EJS: " + error)
                res.render('productsError',{title: 'Error - Bouvier Artesanal'});
            }
        })
    },
    mostrarPorIdCremas:(req,res)=>{
        Productos.retornarDatosIDCremas(con,req.params.id,async function (er, registros) {
            try {
                await res.render('productos/producto', { productos: registros[0], title: registros[0].nombre + " - Bouvier Artesanal" })
            } catch (error) {
                console.log("Error en EJS: " + error)
                res.render('productsError',{title: 'Error - Bouvier Artesanal'});
            }
        })
    },
    mostrarPorIdBanoNutricion:(req,res)=>{
        Productos.retornarDatosIDBanoNutricion(con,req.params.id,async function (er, registros) {
            try {
                await res.render('productos/producto', { productos: registros[0], title: registros[0].nombre + " - Bouvier Artesanal" })
            } catch (error) {
                console.log("Error en EJS: " + error)
                res.render('productsError',{title: 'Error - Bouvier Artesanal'});
            }
        })
    },
    mostrarPorIdCapilares:(req,res)=>{
        Productos.retornarDatosIDCapilares(con,req.params.id,async function (er, registros) {
            try {
                await res.render('productos/producto', { productos: registros[0], title: registros[0].nombre + " - Bouvier Artesanal" })
            } catch (error) {
                console.log("Error en EJS: " + error)
                res.render('productsError',{title: 'Error - Bouvier Artesanal'});
            }
        })
    },
    mostrarPorIdExfoliantes:(req,res)=>{
        Productos.retornarDatosIDExfoliantes(con,req.params.id,async function (er, registros) {
            try {
                await res.render('productos/producto', { productos: registros[0], title: registros[0].nombre + " - Bouvier Artesanal" })
            } catch (error) {
                console.log("Error en EJS: " + error)
                res.render('productsError',{title: 'Error - Bouvier Artesanal'});
            }
        })
    },
    mostrarPorIdJabonesLiquidos:(req,res)=>{
        Productos.retornarDatosIDJabonesLiquidos(con,req.params.id,async function (er, registros) {
            try {
                await res.render('productos/producto', { productos: registros[0], title: registros[0].nombre + " - Bouvier Artesanal" })
            } catch (error) {
                console.log("Error en EJS: " + error)
                res.render('productsError',{title: 'Error - Bouvier Artesanal'});
            }
        })
    },
    mostrarPorIdLimpiadores:(req,res)=>{
        Productos.retornarDatosIDLimpiadores(con,req.params.id,async function (er, registros) {
            try {
                await res.render('productos/producto', { productos: registros[0], title: registros[0].nombre + " - Bouvier Artesanal" })
            } catch (error) {
                console.log("Error en EJS: " + error)
                res.render('productsError',{title: 'Error - Bouvier Artesanal'});
            }
        })
    },
    mostrarPorIdMascarillas:(req,res)=>{
            Productos.retornarDatosIDMascarillas(con, req.params.id, async function (er, registros) {
                try {
                    await res.render('productos/producto', { productos: registros[0], title: registros[0].nombre + " - Bouvier Artesanal" })
                } catch (error) {
                    console.log("Error en EJS: " + error)
                    res.render('productsError',{title: 'Error - Bouvier Artesanal'});
                }
            })
    },
    mostrarPorIdOtros:(req,res)=>{
        Productos.retornarDatosIDOtros(con,req.params.id,async function (er, registros) {
            try {
                await res.render('productos/producto', { productos: registros[0], title: registros[0].nombre + " - Bouvier Artesanal" })
            } catch (error) {
                console.log("Error en EJS: " + error)
                res.render('productsError',{title: 'Error - Bouvier Artesanal'});
            }
        })
    },
    mostrarPorIdSerum:(req,res)=>{
        Productos.retornarDatosIDSerum(con,req.params.id,async function (er, registros) {
            try {
                await res.render('productos/producto', { productos: registros[0], title: registros[0].nombre + " - Bouvier Artesanal" })
            } catch (error) {
                console.log("Error en EJS: " + error)
                res.render('productsError',{title: 'Error - Bouvier Artesanal'});
            }
        })
    },
    mostrarPorIdTonicos:(req,res)=>{
        Productos.retornarDatosIDTonicos(con,req.params.id,async function (er, registros) {
            try {
                await res.render('productos/producto', { productos: registros[0], title: registros[0].nombre + " - Bouvier Artesanal" })
            } catch (error) {
                console.log("Error en EJS: " + error)
                res.render('productsError',{title: 'Error - Bouvier Artesanal'});
            }
        })
    },
}