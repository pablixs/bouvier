var con = require('../config/dbconnection')
var Checkout = require('../models/Checkout')
const rand = require("randomalll");

var borrar = require('fs')
    

function isProductInCart(cart,id){
    for(let i = 0; i < cart.length; i++){
        if(cart[i].id == id){
            return true
        }
    }
    
    return false
}

function calculateTotal(cart,req){
    total = 0;
    for(let i = 0; i < cart.length; i++){
        if(cart[i].precio){
            total += (cart[i].precio*cart[i].cantidad)
        }
    }
    req.session.total = total
    return total
}

module.exports ={   
    


    index: async(req,res)=>{
        var cart = req.session.cart
        var total = req.session.total
    
       try {
            await res.render('menus/carrito',{cart:cart,total:total,title:'Carrito - Bouvier Artesanal'})
       } catch (error) {
            res.render('error',{title:'Error - Bouvier Artesanal'})
       }
    },
    addToCart: (req,res)=>{
        var id = req.body.id;
        var nombre = req.body.nombre;
        var precio = req.body.precio;
        var cantidad = req.body.cantidad;
        var imagen = req.body.imagen;
        var categoria = req.body.categoria
        var producto = {
            id:id,
            nombre:nombre,
            precio:precio,
            cantidad:cantidad,
            imagen:imagen,
            categoria:categoria
        }
    
        if(req.session.cart){
            var cart = req.session.cart
    
            if(!isProductInCart(cart,id)){
                cart.push(producto)
            } 
        } else {
            req.session.cart = [producto]
            var cart = req.session.cart
        }
    
        calculateTotal(cart,req);
        console.log(categoria)
        res.redirect('/carrito')
    },
    deleteFromTheCart:(req,res)=>{
        var id = req.body.id
        var cart = req.session.cart
    
        for(let i = 0; i < cart.length; i++){
            if(cart[i].id == id){
                cart.splice(cart.indexOf(i),1)
            } 
        }
    
        calculateTotal(cart,req);
    
        res.redirect('/carrito')
    },
    editQuantity:(req,res)=>{
        var id = req.body.id
        var cantidad = req.body.cantidad
        var aumentar_btn = req.body.increase_product_quantity
        var restar_btn = req.body.decrease_product_quantity
    
        var cart = req.session.cart
    
        if(aumentar_btn){
            for(let i = 0; i < cart.length; i++){
                if(cart[i].id == id){
                    if(cart[i].cantidad > 0 ){
                        cart[i].cantidad = parseInt(cart[i].cantidad)+1
                    }
                }
            }
        }
        if(restar_btn){
            for(let i = 0; i < cart.length; i++){
                if(cart[i].id == id){
                    if(cart[i].cantidad > 1 ){
                        cart[i].cantidad = parseInt(cart[i].cantidad)-1
                    }
                }
            }
        }
    
        calculateTotal(cart,req)
        res.redirect('/carrito')
    },
    checkout:function(req, res, next) {
        var total = req.session.total
        res.render('menus/checkout',{title: 'Finalizar pedido - Bouvier Artesanal', total:total})
    },
    placeOrder:(req, res)=>{
            
        var nombre = req.body.name
        var email = req.body.email
        var telefono = req.body.phone
        var provincia = req.body.provincia
        var ciudad = req.body.city
        var direccion = req.body.address
        var numero = req.body.numero
        var piso = req.body.piso
        var costo = req.session.total
        var estado = "No pagado"
        var fecha = new Date();
        var envio = req.body.envio
        var productos = "";
        var codigo = rand.randomUpperAlphabet(6)

        var cart = req.session.cart
        for(let i = 0; i < cart.length; i++){
            productos += cart[i].nombre + ["(" + cart[i].cantidad + "u" + ")" +" - "]
        }
        
        var values = [productos,costo,nombre,email,estado,provincia,ciudad,direccion,numero,piso,telefono,fecha,envio,codigo]
        
        Checkout.insertOrder(con,values, async function(err,datos){
            try {
                await res.redirect(307,'/carrito/checkout/gracias')
            } catch (error) {
                res.render('error',{title:'Error - Bouvier Artesanal'})
            }
        })

    },
    gracias:(req,res)=>{
        res.render('redirect-pages/gracias',{title: 'Gracias por su compra - Bouvier Artesanal'})
            req.session.destroy()
    }
}