/**
 * Comissionamento_faixa.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    descricao: {
      type: 'string'
    },
    faixa_itens: {
      collection: 'comissionamento_faixa_item',
      via: 'id_comissionamento_faixa'
    },
    ativo: {
      type: 'boolean', defaultsTo: true
    }

  },

};

