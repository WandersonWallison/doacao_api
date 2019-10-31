/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const passport = require('passport');
module.exports = {
  lista: function(req, res){
    var x = req.param('dia_i');
    var z = req.param('dia_f');
    var y = req.param('bairro');
    var query = 'select * from cliente, doacao, endereco where ' + 
                'doacao.dia = "'+x+'" and cliente.id = doacao.id_cliente and cliente.id = endereco.id_cliente ' +
                'order by endereco.bairro';
                 
    if (z && y){
      query ='select * from cliente, doacao, endereco where endereco.bairro = "'+y+'" and ' + 
      'doacao.dia >= "'+x+'" and doacao.dia <= "'+z+'" and cliente.id = doacao.id_cliente and cliente.id = endereco.id_cliente';
    }else{
      if (y){
        query ='select * from cliente, doacao, endereco where endereco.bairro = "'+y+'" and ' + 
        'doacao.dia = "'+x+'" and cliente.id = doacao.id_cliente and cliente.id = endereco.id_cliente';
      }if (z) {
        query = 'select * from cliente, doacao, endereco where ' + 
                'doacao.dia >= "'+x+'" and doacao.dia <= "'+z+'" and cliente.id = doacao.id_cliente and cliente.id = endereco.id_cliente ' +
                'order by endereco.bairro';      
      } 
    }
    Doacao.query(query, function(err, rawResult) {
        if (err) { return res.serverError(err); }
        return res.send(rawResult.rows);
      
      });
},
listaBairro: function(req, res){
  var query = 'select	endereco.bairro from endereco group by endereco.bairro '; 
  Endereco.query(query, function(err, rawResult) {
      if (err) { return res.serverError(err); }
      return res.send(rawResult.rows);
    
    });
},
  //Login function
  login: function (req, res) {
    passport.authenticate('local', function (err, user, info) {
      if ((err) || (!user)) return res.send({ message: info.message, user });

      req.login(user, function (err) {
        if (err) res.send(err);
        //return res.redirect('/');
        return res.json({message: info.message ,user});
      });
    })(req, res);
  },
  //Logout function
  logout: function (req, res) {
    req.logout();
    res.redirect('/');
  },
  //Register function
  register: function (req, res) {
    //TODO: form validation here
    data = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      id_grupo: req.body.id_grupo
    }
    User.create(data).fetch().exec(function (err, user) {
      if (err) return res.negoiate(err);

      //TODO: Talvez envie um email de confirmação para o usuário antes do login
      req.login(user, function (err) {
        if (err) return res.negotiate(err);
        sails.log('User ' + user.id + ' has logged in.');
        //return res.redirect('/');

        return res.json(user);
      })
    })
  }
};
