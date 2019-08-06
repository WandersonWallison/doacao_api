/**
 * ClienteController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    vw_cliente_sintetico: function(req, res){
        var x = req.param('user_id');
        var query;
        if(x){
            query = 'select * from vw_cliente_sintetico where id_responsavel ="'+x+'"';
        }else{
            query = 'select * from vw_cliente_sintetico';   
        }
    
        Cliente.query(query, function(err, rawResult) {
            if (err) { return res.serverError(err); }
          
            // sails.log(rawResult);
            // ...grab appropriate data...
            // (result format depends on the SQL query that was passed in, and the adapter you're using)
          
            // Then parse the raw result and do whatever you like with it.
            return res.send(rawResult.rows);
          
          });
    },
    retorna_cliente_qtd: function(req, res){
        var x = req.param('user_id');
        var query;
        if(x){
             query = 'select count(cliente.id) qtd FROM cliente, usuario '+
             'WHERE cliente.id_assessor = usuario.id and cliente.ativo=1 and usuario.ativo = 1 and usuario.id = "'+x+'"';
        }else{ 
             query = 'select count(cliente.id) qtd FROM cliente, usuario '+
             'WHERE cliente.id_assessor = usuario.id and cliente.ativo = 1 and usuario.ativo = 1;';
        }
        Cliente.query(query, function(err, rawResult) {
            if (err) { return res.serverError(err); }
          
            // sails.log(rawResult);
            // ...grab appropriate data...
            // (result format depends on the SQL query that was passed in, and the adapter you're using)
          
            // Then parse the raw result and do whatever you like with it.
            return res.send(rawResult.rows);
          
          });
    }
};

