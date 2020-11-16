require("dotenv-safe").config();
const jwt = require('jsonwebtoken');
var express = require("express");
var app = express();
const bodyParser = require('body-parser');
var cors = require('cors');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors());
var router = express.Router();
var path = __dirname + '/views/';
const Database = require('./database/Database');
const pool = Database.connect();


const EstabelecimentoCtrl = require('./controllers/EstabelecimentoCtrl');
const UsuarioCtrl = require('./controllers/UsuarioCtrl');

const estabelecimentoCtrl = new EstabelecimentoCtrl(app,pool);
const usuarioCtrl = new UsuarioCtrl(app,jwt);


router.use(function (req,res,next) {
  console.log("/" + req.method);  
  next();
});

app.use(express.static(path));
app.use("/", router);


app.listen(8015,"0.0.0.0", function () {
  console.log('Example app listening on port 8015!')
});

// app.listen(8015,"192.168.0.11", function () {
//   console.log('Example app listening on port 8015!')
// })