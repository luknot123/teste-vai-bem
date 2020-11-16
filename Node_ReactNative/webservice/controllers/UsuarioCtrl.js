require("dotenv-safe").config();
const AUTH = require('../services/Auth');

class UsuarioCtrl {
    
    constructor(app,jwt) {

        app.post('/usuario/login', (req, res, next) => {
            console.log("Entrou aq marilene");
            //esse teste abaixo deve ser feito no seu banco de dados
            if(req.body.usuario === 'a' && req.body.senha === '1'){
              //auth ok
              const id = 1; //esse ID viria do banco de dados
              const token = jwt.sign({ id }, process.env.SECRET, {
                expiresIn: 3000
              });
              return res.json({ auth: true, token: token });
            }
            
            res.json({message: 'Login inválido!'});
        })
          
       
          
    }

  }
  module.exports = UsuarioCtrl;