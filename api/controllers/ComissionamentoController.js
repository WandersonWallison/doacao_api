/**
 * ComissionamentoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    valida_comissionamento: function(req, res){
        var x = req.param('comissionamento_id');
        var y = req.param('user_id');

        Comissionamento.query('CALL prc_valida_comissionamento("'+x+'","'+y+'")', function(err, rawResult) {
            if (err) { return res.serverError(err); }
          
            sails.log(rawResult);
            // ...grab appropriate data...
            // (result format depends on the SQL query that was passed in, and the adapter you're using)
          
            // Then parse the raw result and do whatever you like with it.
          
            return res.ok();
          
          });
    }
};

