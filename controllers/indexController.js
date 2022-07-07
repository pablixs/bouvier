var con = require('../config/dbconnection')
var Index = require('../models/Index')

module.exports = {
  buscarIndex: async (req, res) => {
    try {
      await res.render('extraviews/buscar.ejs', {
        title: 'Buscar - Bouvier Artesanal'
      })
    } catch (error) {
      res.render('error', {
        title: 'Error - Bouvier Artesanal'
      })
    }
  },
  buscar: (req, res) => {
    var busqueda = "%" + req.body.query + "%"

    Index.buscar(con, busqueda, async (err, datos) => {
      try {
        res.render('extraviews/buscarQuery.ejs', {
          title: 'Buscar - Bouvier Artesanal',
          productos: datos
        })
      } catch (error) {
        res.render('error', {
          title: 'Error - Bouvier Artesanal'
        })
      }
    })
  },
}