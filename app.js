const express = require('express')
const app = express();
const bodyParser = require('body-parser')
app.set('view engine','ejs');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))





app.get('/', function(req, res) {
    res.render('index');
  });

  app.get('/home', function(req, res) {
    res.render('home');
  });

  app.post('/autenticar', function(req, res) {
    if (req.body.user == "laoming" && req.body.pass == "5702471") {
        res.redirect('/home')
    }else{
        console.log("Datos invalidos");
        res.redirect('/')
    }
  });



app.listen(8080, function(){
    console.log("Servidor iniciado");
  });