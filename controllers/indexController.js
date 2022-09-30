var con = require('../config/dbconnection')
const { jabonesRandom } = require('../models/Index')
var Index = require('../models/Index')

module.exports = {
  getIndex: function(req, res, next) {
    console.log(req.session)
    Index.jabonesRandom(con, async (err,jabones)=>{
      try {
        res.render('index', { title: 'Bouvier Artesanal - Cosmética natural', jabones:jabones });
        console.log(jabones)
      } catch (error) {
        console.log(error)
      }
    })
  },

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