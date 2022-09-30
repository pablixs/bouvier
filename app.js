var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session')
const addSessionToTemplate = require ('./middlewares/addSessionToTemplate')
const { generate_sitemap } = require('./middlewares/sitemap')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productosRouter = require('./routes/productos')
const carritoRouter = require('./routes/carrito')
const adminRouter = require('./routes/admin')

const app = express();

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app

app.use(session({
  secret:"Hachigatsujuunana147258",
  resave: true,
  saveUninitialized: true,
  // cookie: {
  //   expires: 60000
  // }
}))

app.use(addSessionToTemplate())
app.use(cookieParser());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));




app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/productos', productosRouter);
app.use('/carrito',carritoRouter)
app.use('/admin',adminRouter)
app.get('/sitemap.xml', generate_sitemap)



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.format({
    html: function(){
      res.render('error',{title: 'Error - Bouvier Artesanal'})
    }
  })
  // res.render('error',{title: 'Error - Bouvier Artesanal'});
});

module.exports = app;
