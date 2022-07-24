var con = require('../config/dbconnection')
var Checkout = require('../models/Checkout')
const rand = require("randomalll");
const nodemailer = require('nodemailer')

var borrar = require('fs')

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pablicjs@gmail.com',
    pass: 'bicjjwvrsatsfsrh'
  }
})




function isProductInCart(cart, id) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id == id) {
      return true
    }
  }

  return false
}

function calculateTotal(cart, req) {
  total = 0;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].precio) {
      total += (cart[i].precio * cart[i].cantidad)
    }
  }
  req.session.total = total
  return total
}

module.exports = {



  index: async (req, res) => {
    var cart = req.session.cart
    var total = req.session.total

    try {
      await res.render('menus/carrito', {
        cart: cart,
        total: total,
        title: 'Carrito - Bouvier Artesanal'
      })
    } catch (error) {
      res.render('error', {
        title: 'Error - Bouvier Artesanal'
      })
    }
  },
  addToCart: (req, res) => {
    var id = req.body.id;
    var nombre = req.body.nombre;
    var precio = req.body.precio;
    var oferta = req.body.oferta
    var cantidad = req.body.cantidad;
    var imagen = req.body.imagen;
    var categoria = req.body.categoria
    var producto = {
      id: id,
      nombre: nombre,
      precio: precio,
      oferta: oferta,
      cantidad: cantidad,
      imagen: imagen,
      categoria: categoria
    }

    if (req.session.cart) {
      var cart = req.session.cart

      if (!isProductInCart(cart, id)) {
        cart.push(producto)
      }
    } else {
      req.session.cart = [producto]
      var cart = req.session.cart
    }

    calculateTotal(cart, req);
    console.log(categoria)
    res.redirect('/carrito')
  },
  deleteFromTheCart: (req, res) => {
    var id = req.body.id
    var cart = req.session.cart

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id == id) {
        cart.splice(cart.indexOf(i), 1)
      }
    }

    calculateTotal(cart, req);

    res.redirect('/carrito')
  },
  editQuantity: (req, res) => {
    var id = req.body.id
    var cantidad = req.body.cantidad
    var aumentar_btn = req.body.increase_product_quantity
    var restar_btn = req.body.decrease_product_quantity

    var cart = req.session.cart

    if (aumentar_btn) {
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == id) {
          if (cart[i].cantidad > 0) {
            cart[i].cantidad = parseInt(cart[i].cantidad) + 1
          }
        }
      }
    }
    if (restar_btn) {
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == id) {
          if (cart[i].cantidad > 1) {
            cart[i].cantidad = parseInt(cart[i].cantidad) - 1
          }
        }
      }
    }

    calculateTotal(cart, req)
    res.redirect('/carrito')
  },
  checkout: function (req, res, next) {
    var total = req.session.total
    res.render('menus/checkout', {
      title: 'Finalizar pedido - Bouvier Artesanal',
      total: total
    })
  },
  placeOrder: (req, res) => {

    var nombre = req.body.name
    var email = req.body.email
    var telefono = req.body.phone
    var provincia = req.body.provincia
    var ciudad = req.body.city
    var direccion = req.body.address
    var numero = req.body.numero
    var piso = req.body.piso
    var postal = req.body.postal
    var descripcion = req.body.descripcion
    var costo = req.session.total
    var estado = "No pagado"
    const today = new Date();
    const hora = new Date().toLocaleTimeString()
    // const month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    // "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const month = ["01", "02", "03", "04", "05", "06",
      "07", "08", "09", "10", "11", "12"
    ];
    const fecha = today.getDate() + '/' + month[today.getMonth()] + " - " + hora;
    var envio = req.body.envio
    var productos = "";
    var codigo = rand.randomUpperAlphabet(6)

    var cart = req.session.cart
    for (let i = 0; i < cart.length; i++) {
      productos += cart[i].nombre + ["(" + cart[i].cantidad + "u" + ")" + " - "]
    }

    var values = [productos, costo, nombre, email, estado, provincia, ciudad, direccion, numero, piso, postal, descripcion, telefono, fecha, envio, codigo]
    console.log("Values: " + values)
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    console.log("productos: " + productos)
    var mailOptions = {
      from: 'nocontestar@bouvierartesanal.com',
      to: email,
      subject: 'Tu pedido se ha realizado con éxito',
      html: `<html>
              <head>
                <meta charset="utf-8">
                <style>
                  .body {  height: 100%; width: 100%; family-font: 'roboto', sans-serif;}
                  .title { font-weight: 500; text-align: center; color: #a1887f; font-size: 1em; }
                  .code { text-align: center; font-size: 12px; width: max-content; height: 90px;  color: #f7f7f7; background-color: #a1887f; }
                  .big { font-size: 3em; }
                  .text-main  { font-size: 1.2em; text-align: left;  }
                  .text-left { text-align: left; }
                </style>
              </head>
              <body class="body">
                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="table-layout: fixed;" align="center";>
                  <table width="80%" border="0" cellspacing="0" cellpadding="0" style="table-layout: fixed;" align="center";>
                    <tr>
                      <td align="center">
                        <img src="https://www.bouvierartesanal.com.ar/images/logos/bouvier-logo-lightversion.png" style="width: 100px; height: 100px; object-fit: cover;">
                        <p class="title">Bouvier Artesanal</p>
                      </td>
                    </tr>
        
                    <tr>
                      <td align="center">
                      <br>
                        <p class="text-main">Gracias por realizar tu pedido. La orden se realizó con éxito.</p>
                        <p class="text-main">Podes confirmar tu pedido enviandonos tu código por WhatsApp - o Instagram - y pagando  la seña a través de Mercado Pago o transferencia por CBU.
                        Una vez señado procedemos a separar tus productos elegidos y prepararlos para el envío.
                        </p>
                        <br>
                        <p class="text-left">CBU: 0140039703511462555078</p>
                        <p class="text-left">Alias: bouvier.artesanal</p>
                        <br>
                        <a class="text-left" href="https://instagram.com/bouvierartesanal/" >Instagram</a> <a href="https://wa.me/5491159714867" class="text-left">Whatsapp</>
                        <br>
                      </td>
                    </tr>
              
                    <tr>
                      <td align="center" class="code">
                        Tu código es: <br>
                        <div class="big">${codigo}</div>
                      </td>
                    </tr>
                    <br>
                    <tr>
                      <td align="left">
                        Si no realizaste ningún pedido en <a href="https://bouvierartesanal.com.ar">bouvierartesanal.com.ar</a>, ignorá este mail.
                      </td>
                    </tr>
                    <br>
                   <br>
                    <tr>
                      <td align="center">
                        <p style="font-size: 12px; color: #999;">Bouvier Artesanal  &#169;</p>
                      </td>
                   </tr>
        
                    <br>
                  </table>
                </table>
              </body>
            </html>`,
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error)
      } else {
        console.log('Email sent: ' + info.response + 'enviado al pichichi de: ' + mailOptions.to)
      }
    })


    Checkout.insertOrder(con, values, async function (err, datos) {
      try {
        await res.redirect(307, '/carrito/checkout/gracias')
      } catch (error) {
        res.render('error', {
          title: 'Error - Bouvier Artesanal'
        })
      }
    })

  },
  gracias: (req, res) => {
    res.render('redirect-pages/gracias', {
      title: 'Gracias por su compra - Bouvier Artesanal'
    })
    req.session.destroy()
  }
}