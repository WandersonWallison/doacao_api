/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const passport = require('passport');
module.exports = {
  // retorna quantidade de assessor por escritorio 
  retorna_assessor_qtd: function(req, res){
    var x = req.param('user_id');
    var y = req.param('empresa_id');
    var query;
        if(x){
          query = 'select count(id) qtd from usuario where id_grupo = 3 and id_empresa = "'+y+'" and id = "'+x+'"';
        }else{
          query = 'select count(id) qtd from usuario where id_grupo = 3 and id_empresa = "'+y+'"';
        }
    User.query(query, function(err, rawResult) {
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
      id_acesso_grupo: req.body.id_acesso_grupo
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
