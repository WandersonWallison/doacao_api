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
          
            // sails.log(rawResult);
            // ...grab appropriate data...
            // (result format depends on the SQL query that was passed in, and the adapter you're using)
          
            // Then parse the raw result and do whatever you like with it.
          
            return res.ok();
          
          });
    },
    insert_arquivo: function(req, res){
          var teste = JSON.stringify(req.body.id)
          // sails.log("Chegou na api "+ teste);
        
            for (let i = 0; i < req.body.itens.length; i++) {
                let item = {
                    classificacao: req.body.itens[i].Classificação,
                    produto_categoria: req.body.itens[i].ProdutoCategoria,
                    //mercado: this.excelData.results[i].Mercado,
                    //nome_cliente: this.excelData.results[i].NomedoCliente,
                    nivel_1: req.body.itens[i].Nível1,
                    nivel_2: req.body.itens[i].Nível2,
                    codigo_cliente: req.body.itens[i].CódigoCliente,
                    codigo_master: req.body.itens[i].CódigoMaster,
                    // data: moment(req.body.itens[i].Data, 'DD/MM/YYYY'),
                    receita_bruta: req.body.itens[i].ReceitaBrutaR$,
                    receita_liquida: req.body.itens[i].ReceitaLíquidaR$,
                    comissao_escritorio_p: req.body.itens[i].ComissãoEscritório,
                    comissao_escritorio_r: req.body.itens[i].ComissãoEscritórioR$,
                    status: '0',
                    mensagem: 'Novo',
                    //imposto: this.excelData.results[i].Imposto,
                    //comissao_liquida: this.excelData.results[i].Comissãoliquida,
                    id_comissionamento: teste
                }
                Comissionamento_item.create(item).fetch().exec(function (err) {
                    if (err) return res.negoiate(err);
                })
            }           
      
            return res.ok();

    }
};

