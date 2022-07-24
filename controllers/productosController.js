var con = require('../config/dbconnection')
var Productos = require('../models/Productos')

module.exports = {
    index: (req, res) => {
        Productos.obtener(con, async (err, datos) => {
            try {
                await res.render('productos/index', {
                    title: 'Productos - Bouvier Artesanal',
                    productos: datos
                })
            } catch (error) {
                console.log(error)
                res.render('error', {
                    title: 'Error - Bouvier Artesanal'
                })
            }
        })
    },
    jabones: (req, res) => {
        Productos.obtenerJabones(con, async (err, datos) => {
            try {
                await res.render('productos/jabones', {
                    title: 'Jabones - Bouvier Artesanal',
                    productos: datos
                })
            } catch (error) {
                res.render('error', {
                    title: 'Error - Bouvier Artesanal'
                })
            }
        })
    },
    cremas: (req, res) => {
        Productos.obtenerCremas(con, async (err, datos) => {
            try {
                await res.render('productos/cremas', {
                    title: 'Cremas - Bouvier Artesanal',
                    productos: datos
                })
            } catch (error) {
                res.render('error', {
                    title: 'Error - Bouvier Artesanal'
                })
            }
        })
    },
    capilares: (req, res) => {
        Productos.obtenerCapilares(con, async (err, datos) => {
            try {
                await res.render('productos/capilares', {
                    title: 'Capilares - Bouvier Artesanal',
                    productos: datos
                })
            } catch (error) {
                res.render('error', {
                    title: 'Error - Bouvier Artesanal'
                })
            }
        })
    },
    exfoliantes: (req, res) => {
        Productos.obtenerExfoliantes(con, async (err, datos) => {
            try {
                await res.render('productos/exfoliantes', {
                    title: 'Exfoliantes - Bouvier Artesanal',
                    productos: datos
                })
            } catch (error) {
                res.render('error', {
                    title: 'Error - Bouvier Artesanal'
                })
            }
        })
    },
    limpiadores: (req, res) => {
        Productos.obtenerLimpiadores(con, async (err, datos) => {
            try {
                await res.render('productos/limpiadores', {
                    title: 'Limpiadores - Bouvier Artesanal',
                    productos: datos
                })
            } catch (error) {
                res.render('error', {
                    title: 'Error - Bouvier Artesanal'
                })
            }
        })
    },
    mascarillas: (req, res) => {
        Productos.obtenerMascarillas(con, async (err, datos) => {
            try {
                await res.render('productos/mascarillas', {
                    title: 'Mascarillas - Bouvier Artesanal',
                    productos: datos
                })
            } catch (error) {
                res.render('error', {
                    title: 'Error - Bouvier Artesanal'
                })
            }
        })
    },
    otros: (req, res) => {
        Productos.obtenerOtros(con, async (err, datos) => {
            try {
                await res.render('productos/otros', {
                    title: 'Otros - Bouvier Artesanal',
                    productos: datos
                })
            } catch (error) {
                res.render('error', {
                    title: 'Error - Bouvier Artesanal'
                })
            }
        })
    },
    serum: (req, res) => {
        Productos.obtenerSerum(con, async (err, datos) => {
            try {
                await res.render('productos/serum', {
                    title: 'Serum - Bouvier Artesanal',
                    productos: datos
                })
            } catch (error) {
                res.render('error', {
                    title: 'Error - Bouvier Artesanal'
                })
            }
        })
    },
    tonicos: (req, res) => {
        Productos.obtenerTonicos(con, async (err, datos) => {
            res.render('productos/tonicos', {
                title: 'Tonicos - Bouvier Artesanal',
                productos: datos
            })
        })
    },
    kits: (req, res) => {
        Productos.obtenerKits(con, async (err, datos) => {
            res.render('productos/kits', {
                title: 'Kits - Bouvier Artesanal',
                productos: datos
            })
        })
    },
    mostrarPorIdJabones: (req, res) => {
        Productos.retornarDatosIDJabones(con, req.params.id, async function (er, registros) {
            try {
                if (registros) {
                    var id = registros[0].id
                }
            } catch (error) {
                console.log("Id invalido " + error)
                res.render('productsError', {
                    title: 'Error - Bouvier Artesanal'
                });
            }
            const adminLog = req.session.admin
            console.log(adminLog)
            Productos.leerPreguntaPorProducto(con, id, async function (er, preguntas) {
                try {
                    await res.render('productos/producto', {
                        productos: registros[0],
                        preguntas: preguntas[0],
                        respuestas: preguntas[1],
                        admin:adminLog,
                        title: registros[0].nombre + " - Bouvier Artesanal"
                    })
                } catch (error) {
                    console.log("Error en EJS: " + error)
                    res.render('productsError', {
                        title: 'Error - Bouvier Artesanal'
                    });
                }
            })
        })
    },
    mostrarPorIdCremas: (req, res) => {
        Productos.retornarDatosIDCremas(con, req.params.id, async function (er, registros) {
            try {
                if (registros) {
                    var id = registros[0].id
                }
            } catch (error) {
                console.log("Id invalido " + error)
                res.render('productsError', {
                    title: 'Error - Bouvier Artesanal'
                });
            }
            const adminLog = req.session.admin
            console.log(adminLog)
            Productos.leerPreguntaPorProducto(con, id, async function (er, preguntas) {
                try {
                    await res.render('productos/producto', {
                        productos: registros[0],
                        preguntas: preguntas[0],
                        respuestas: preguntas[1],
                        admin:adminLog,
                        title: registros[0].nombre + " - Bouvier Artesanal"
                    })
                } catch (error) {
                    console.log("Error en EJS: " + error)
                    res.render('productsError', {
                        title: 'Error - Bouvier Artesanal'
                    });
                }
            })
        })
    },
    mostrarPorIdCapilares: (req, res) => {
        Productos.retornarDatosIDCapilares(con, req.params.id, async function (er, registros) {
            try {
                if (registros) {
                    var id = registros[0].id
                }
            } catch (error) {
                console.log("Id invalido " + error)
                res.render('productsError', {
                    title: 'Error - Bouvier Artesanal'
                });
            }
            const adminLog = req.session.admin
            console.log(adminLog)
            Productos.leerPreguntaPorProducto(con, id, async function (er, preguntas) {
                try {
                    await res.render('productos/producto', {
                        productos: registros[0],
                        preguntas: preguntas[0],
                        respuestas: preguntas[1],
                        admin:adminLog,
                        title: registros[0].nombre + " - Bouvier Artesanal"
                    })
                } catch (error) {
                    console.log("Error en EJS: " + error)
                    res.render('productsError', {
                        title: 'Error - Bouvier Artesanal'
                    });
                }
            })
        })
    },
    mostrarPorIdExfoliantes: (req, res) => {
        Productos.retornarDatosIDExfoliantes(con, req.params.id, async function (er, registros) {
            try {
                if (registros) {
                    var id = registros[0].id
                }
            } catch (error) {
                console.log("Id invalido " + error)
                res.render('productsError', {
                    title: 'Error - Bouvier Artesanal'
                });
            }
            const adminLog = req.session.admin
            console.log(adminLog)
            Productos.leerPreguntaPorProducto(con, id, async function (er, preguntas) {
                try {
                    await res.render('productos/producto', {
                        productos: registros[0],
                        preguntas: preguntas[0],
                        respuestas: preguntas[1],
                        admin:adminLog,
                        title: registros[0].nombre + " - Bouvier Artesanal"
                    })
                } catch (error) {
                    console.log("Error en EJS: " + error)
                    res.render('productsError', {
                        title: 'Error - Bouvier Artesanal'
                    });
                }
            })
        })
    },
    mostrarPorIdLimpiadores: (req, res) => {
        Productos.retornarDatosIDLimpiadores(con, req.params.id, async function (er, registros) {
            try {
                if (registros) {
                    var id = registros[0].id
                }
            } catch (error) {
                console.log("Id invalido " + error)
                res.render('productsError', {
                    title: 'Error - Bouvier Artesanal'
                });
            }
            const adminLog = req.session.admin
            console.log(adminLog)
            Productos.leerPreguntaPorProducto(con, id, async function (er, preguntas) {
                try {
                    await res.render('productos/producto', {
                        productos: registros[0],
                        preguntas: preguntas[0],
                        respuestas: preguntas[1],
                        admin:adminLog,
                        title: registros[0].nombre + " - Bouvier Artesanal"
                    })
                } catch (error) {
                    console.log("Error en EJS: " + error)
                    res.render('productsError', {
                        title: 'Error - Bouvier Artesanal'
                    });
                }
            })
        })
    },
    mostrarPorIdMascarillas: (req, res) => {
        try {
            if (registros) {
                var id = registros[0].id
            }
        } catch (error) {
            console.log("Id invalido " + error)
            res.render('productsError', {
                title: 'Error - Bouvier Artesanal'
            });
        }
        const adminLog = req.session.admin
        console.log(adminLog)
        Productos.leerPreguntaPorProducto(con, id, async function (er, preguntas) {
            try {
                await res.render('productos/producto', {
                    productos: registros[0],
                    preguntas: preguntas[0],
                    respuestas: preguntas[1],
                    admin:adminLog,
                    title: registros[0].nombre + " - Bouvier Artesanal"
                })
            } catch (error) {
                console.log("Error en EJS: " + error)
                res.render('productsError', {
                    title: 'Error - Bouvier Artesanal'
                });
            }
        })
    },
    mostrarPorIdOtros: (req, res) => {
        Productos.retornarDatosIDOtros(con, req.params.id, async function (er, registros) {
            try {
                if (registros) {
                    var id = registros[0].id
                }
            } catch (error) {
                console.log("Id invalido " + error)
                res.render('productsError', {
                    title: 'Error - Bouvier Artesanal'
                });
            }
            const adminLog = req.session.admin
            console.log(adminLog)
            Productos.leerPreguntaPorProducto(con, id, async function (er, preguntas) {
                try {
                    await res.render('productos/producto', {
                        productos: registros[0],
                        preguntas: preguntas[0],
                        respuestas: preguntas[1],
                        admin:adminLog,
                        title: registros[0].nombre + " - Bouvier Artesanal"
                    })
                } catch (error) {
                    console.log("Error en EJS: " + error)
                    res.render('productsError', {
                        title: 'Error - Bouvier Artesanal'
                    });
                }
            })
        })
    },
    mostrarPorIdSerum: (req, res) => {
        Productos.retornarDatosIDSerum(con, req.params.id, async function (er, registros) {
            try {
                if (registros) {
                    var id = registros[0].id
                }
            } catch (error) {
                console.log("Id invalido " + error)
                res.render('productsError', {
                    title: 'Error - Bouvier Artesanal'
                });
            }
            const adminLog = req.session.admin
            console.log(adminLog)
            Productos.leerPreguntaPorProducto(con, id, async function (er, preguntas) {
                try {
                    await res.render('productos/producto', {
                        productos: registros[0],
                        preguntas: preguntas[0],
                        respuestas: preguntas[1],
                        admin:adminLog,
                        title: registros[0].nombre + " - Bouvier Artesanal"
                    })
                } catch (error) {
                    console.log("Error en EJS: " + error)
                    res.render('productsError', {
                        title: 'Error - Bouvier Artesanal'
                    });
                }
            })
        })
    },
    mostrarPorIdTonicos: (req, res) => {
        Productos.retornarDatosIDTonicos(con, req.params.id, async function (er, registros) {
            try {
                if (registros) {
                    var id = registros[0].id
                }
            } catch (error) {
                console.log("Id invalido " + error)
                res.render('productsError', {
                    title: 'Error - Bouvier Artesanal'
                });
            }
            const adminLog = req.session.admin
            console.log(adminLog)
            Productos.leerPreguntaPorProducto(con, id, async function (er, preguntas) {
                try {
                    await res.render('productos/producto', {
                        productos: registros[0],
                        preguntas: preguntas[0],
                        respuestas: preguntas[1],
                        admin:adminLog,
                        title: registros[0].nombre + " - Bouvier Artesanal"
                    })
                    console.log("categoria: "+productos.categoria)
                } catch (error) {
                    console.log("Error en EJS: " + error)
                    res.render('productsError', {
                        title: 'Error - Bouvier Artesanal'
                    });
                }
            })
        })
    },
    mostrarPorIdKits: (req, res) => {
        Productos.retornarDatosIDKits(con, req.params.id, async function (er, registros) {
            try {
                if (registros) {
                    var id = registros[0].id
                }
            } catch (error) {
                console.log("Id invalido " + error)
                res.render('productsError', {
                    title: 'Error - Bouvier Artesanal'
                });
            }
            const adminLog = req.session.admin
            console.log(adminLog)
            Productos.leerPreguntaPorProducto(con, id, async function (er, preguntas) {
                try {
                    await res.render('productos/producto', {
                        productos: registros[0],
                        preguntas: preguntas[0],
                        respuestas: preguntas[1],
                        admin:adminLog,
                        title: registros[0].nombre + " - Bouvier Artesanal"
                    })
                    console.log("categoria: "+productos.categoria)
                } catch (error) {
                    console.log("Error en EJS: " + error)
                    res.render('productsError', {
                        title: 'Error - Bouvier Artesanal'
                    });
                }
            })
        })
    },
    hacerPregunta: (req, res) => {

        const today = new Date();
        // const month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        // "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        const month = ["01", "02", "03", "04", "05", "06",
            "07", "08", "09", "10", "11", "12"
        ];

        const comentario_fecha = today.getDate() + '/' + month[today.getMonth()];

        var comentario_text = req.body.comentario_text

        var comentario_productoid = req.body.comentario_productoid

        var values = [comentario_fecha, comentario_text, comentario_productoid]

        var categoria = req.body.categoria

        Productos.insertarPregunta(con, values, async function (er, datos) {
            try {
                await res.redirect('/productos/'+categoria+'/'+comentario_productoid)
                console.log(datos)
            } catch (error) {
                console.log("Error en EJS: " + er)
                res.render('productsError', {
                    title: 'Error - Bouvier Artesanal'
                });
            }
        })
    },
    responderPregunta: (req, res) => {



        const today = new Date();
        // const month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        // "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        const month = ["01", "02", "03", "04", "05", "06",
            "07", "08", "09", "10", "11", "12"
        ];

        const respuesta_fecha = today.getDate() + '/' + month[today.getMonth()];

        var respuesta_text = req.body.respuesta_text

        var padre_id = req.body.padre_id

        var categoria = req.body.categoria

        var values = [respuesta_fecha, respuesta_text, padre_id]

        var id = req.body.id

        Productos.insertarRespuesta(con, values, padre_id, async function (er, datos) {
            try {
                await res.redirect('/productos/'+categoria+'/'+id)
                console.log(datos)
            } catch (error) {
                console.log("Error en EJS: " + er)
                res.render('productsError', {
                    title: 'Error - Bouvier Artesanal'
                });
            }
        })
    },
    eliminarPregunta: (req, res) => {
        var id = req.body.comentario_id

        var producto_id = req.body.producto_id

        var categoria = req.body.categoria

        Productos.eliminarPregunta(con, id, async function (er, datos) {
            try {
                await res.redirect('/productos/'+categoria+'/'+producto_id)
                console.log(datos)
            } catch (error) {
                console.log("Error en EJS: " + er)
                res.render('productsError', {
                    title: 'Error - Bouvier Artesanal'
                });
            }
        })
    },
    eliminarRespuesta: (req, res) => {
        var id = req.body.respuesta_id

        var producto_id = req.body.producto_id

        var categoria = req.body.categoria

        var padre_id = req.body.padre_id

        Productos.eliminarRespuesta(con, id, padre_id,async function (er, datos) {
            try {
                await res.redirect('/productos/'+categoria+'/'+producto_id)
                console.log(datos)
            } catch (error) {
                console.log("Error en EJS: " + er)
                res.render('productsError', {
                    title: 'Error - Bouvier Artesanal'
                });
            }
        })
    },
}