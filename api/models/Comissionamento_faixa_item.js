/**
 * Comissionamento_faixa_item.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    mercado: {
      type: 'string'
    },
    produto: {
      type: 'string'
    },
    comissao_escritorio: {
      type: 'number'
    },
    comissao_assessor: {
      type: 'number'
    },
    registro: {
      type: 'string'
    },
    id_comissionamento_faixa: {
      model: 'comissionamento_faixa'
    },
    ativo: {
      type: 'boolean', defaultsTo: true
    }

  },

};

