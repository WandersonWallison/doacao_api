/**
 * MovimentacaoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    calcula_movimentacao: function(req, res){
        var x = req.param('user_id');

        Movimentacao.query('select ((SELECT sum(valor) FROM prosp_dev.movimentacao where id_cliente = "'+x+'" and id_tipo_movimentacao = 1 )'+ '-' +
		'(SELECT sum(valor) FROM prosp_dev.movimentacao where id_cliente = "'+x+'" and id_tipo_movimentacao in (2,3)) )', function(err, rawResult) {
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

