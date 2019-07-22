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
            '((SELECT SUM(VALOR) FROM movimentacao WHERE id_cliente = "'+x+'" AND ativo= 1 AND id_tipo_movimentacao = 1 )'+ '-' +
            '(SELECT SUM(VALOR) FROM movimentacao WHERE id_cliente = "'+x+'" AND ativo= 1 AND id_tipo_movimentacao = 3 )))', function(err, rawResult) {
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

