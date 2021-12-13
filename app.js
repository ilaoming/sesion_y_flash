const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const flash = require('express-flash')
const app = express();

app.set('view engine','ejs');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({ secret: 'token-muy-secreto', resave: true, saveUninitialized: true }));
app.use(flash())





app.get('/', function(req, res) {
    res.render('index',{ error: peticion.flash('error') });
  });

  app.get('/home', function(req, res) {
    res.render('home',{ user: req.session.user });
  });

  app.get('/detalle', function(req, res) {
    res.render('detalle',{ user: req.session.user });
  });

  app.get('/salir', function(req, res) {
      req.session.destroy();
    res.redirect('/')
  });

  app.post('/autenticar', function(req, res) {
    if (req.body.user == "laoming" && req.body.pass == "5702471") {
        req.session.user = req.body.user
        res.redirect('/home')
    }else{
        req.flash('error', "Datos incorrectos")
        res.redirect('/')
    }
  });



app.listen(8080, function(){
    console.log("Servidor iniciado");
  });