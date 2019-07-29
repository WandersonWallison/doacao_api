/**
 * MovimentacaoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    calcula_movimentacao: function(req, res){
        var x = req.param('user_id');

        Movimentacao.query('select (((SELECT coalesce(sum(valor),0) FROM prosp_dev.movimentacao where id_cliente = "'+x+'" and id_tipo_movimentacao = 1 and ativo = 1)'+ '-' +
            '(SELECT coalesce(sum(valor),0) FROM prosp_dev.movimentacao where id_cliente = "'+x+'" and id_tipo_movimentacao = 3 and ativo = 1))'+'-'+
            '(SELECT coalesce(sum(valor),0) FROM prosp_dev.movimentacao where id_cliente = "'+x+'" and id_tipo_movimentacao = 2 and id_situacao_movimento in (1,2,6) and ativo = 1))', function(err, rawResult) {
            if (err) { return res.serverError(err); }
          
            // sails.log(rawResult);
            // ...grab appropriate data...
            // (result format depends on the SQL query that was passed in, and the adapter you're using)
          
            // Then parse the raw result and do whatever you like with it.
            var mystr = JSON.stringify(rawResult.rows)
            var myarr = mystr.split(":");
            return res.send(myarr[1].substring(0,(myarr[1].length - 2)));
          
          });
    },
    calcula_aporte: function(req, res){
        var x = req.param('user_id');
        
        Movimentacao.query('SELECT ((SELECT potencial_investimento FROM cliente WHERE id = "'+x+'" and ativo = 1)'+ '-' +
            '((SELECT coalesce(SUM(VALOR),0) FROM movimentacao WHERE id_cliente = "'+x+'" AND ativo= 1 AND id_tipo_movimentacao = 1 )'+ '-' +
            '(SELECT coalesce(SUM(VALOR),0) FROM movimentacao WHERE id_cliente = "'+x+'" AND ativo= 1 AND id_tipo_movimentacao = 3 )))', function(err, rawResult) {
            if (err) { return res.serverError(err); }
          
            // sails.log(rawResult);
            // ...grab appropriate data...
            // (result format depends on the SQL query that was passed in, and the adapter you're using)
          
            // Then parse the raw result and do whatever you like with it.
            var mystr = JSON.stringify(rawResult.rows)
            var myarr = mystr.split(":");
            return res.send(myarr[1].substring(0,(myarr[1].length - 2)));
          
          });
    },
    retorna_total_movimentacao: function(req, res){
        var x = req.param('user_id');
        var y = req.param('id_situacao_movimentacao');
    
        Movimentacao.query('SELECT coalesce(sum(movimentacao.valor),0) FROM usuario inner JOIN cliente ON usuario.ID = cliente.id_assessor '+ 
                           'inner JOIN movimentacao ON movimentacao.id_cliente = cliente.id '+
                           'where movimentacao.valor is not null and movimentacao.id_situacao_movimento is not null and '+ 
                           'movimentacao.id_situacao_movimento = "'+y+'" and usuario.id = "'+x+'" and '+
                           'cliente.ativo = 1 and usuario.ativo = 1 and movimentacao.ativo = 1 order by movimentacao.id_situacao_movimento', function(err, rawResult) {
            if (err) { return res.serverError(err); }
          
            // sails.log(rawResult);
            // ...grab appropriate data...
            // (result format depends on the SQL query that was passed in, and the adapter you're using)
          
            // Then parse the raw result and do whatever you like with it.
            var mystr = JSON.stringify(rawResult.rows)
            var myarr = mystr.split(":");
            return res.send(myarr[1].substring(0,(myarr[1].length - 2)));
          
          });
    },

    // calcula o valor que poder ser movimentado 
    limite_movimentacao: function(req, res){
        
        Movimentacao.query('SELECT(SELECT coalesce(SUM(VALOR),0) FROM movimentacao WHERE ativo= 1 AND id_tipo_movimentacao = 1)'+ '-' +
        '(SELECT coalesce(SUM(VALOR),0) FROM movimentacao WHERE ativo= 1 AND id_tipo_movimentacao = 3 ) from DUAL', function(err, rawResult) {
            if (err) { return res.serverError(err); }
          
            // sails.log(rawResult);
            // ...grab appropriate data...
            // (result format depends on the SQL query that was passed in, and the adapter you're using)
          
            // Then parse the raw result and do whatever you like with it.
            var mystr = JSON.stringify(rawResult.rows)
            var myarr = mystr.split(":");
            return res.send(myarr[1].substring(0,(myarr[1].length - 2)));
          
          });
    },


    //retona quantidade de cliente por usuario
    retorna_cliente: function(req, res){
        var x = req.param('user_id');
        var query;
        if(x){
             query = 'SELECT coalesce(count(cliente.id)) FROM usuario inner JOIN cliente ON usuario.ID = cliente.id_assessor '+
            'where usuario.id = "'+x+'" and cliente.ativo = 1 and usuario.ativo = 1';
        }else{ 
        query = 'SELECT coalesce(count(cliente.id)) FROM usuario inner JOIN cliente ON usuario.ID = cliente.id_assessor '+
            'where cliente.ativo = 1 and usuario.ativo = 1';
        }
        Movimentacao.query(query, function(err, rawResult) {
            if (err) { return res.serverError(err); }
          
            // sails.log(rawResult);
            // ...grab appropriate data...
            // (result format depends on the SQL query that was passed in, and the adapter you're using)
          
            // Then parse the raw result and do whatever you like with it.
            var mystr = JSON.stringify(rawResult.rows)
            var myarr = mystr.split(":");
            return res.send(myarr[1].substring(0,(myarr[1].length - 2)));
          
          });
    }

};

