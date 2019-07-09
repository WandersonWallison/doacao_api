/**
 * Movimentacao.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    observacao: {
      type: 'string' , required: true
    },
    valor: {
      type: 'string',
      columnType: 'decimal(16,8)'
    },
    ativo: {
      type: 'boolean', defaultsTo: true
    },
    id_situacao_movimento: {
      model: 'tipo_situacao_movimento'
    },
    data_registro:{
      type: 'string', columnType: 'date'
    },
    id_cliente: {
      model: 'cliente'
    },
    id_tipo_movimentacao: {
      model: 'tipo_movimentacao'
    },
  },

};

