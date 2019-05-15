/**
 * Importacao.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id_assessor:{
      type: 'number'
    },
    id_cliente:{
      type: 'number'
    },
    produto: {
      type: 'string'
    },
    sub_produto: {
      type: 'string'
    },
    produto_garantia: {
      type: 'string'
    },
    cnpj_fundo: {
      type: 'string'
    },
    ativo: {
      type: 'boolean', defaultsTo: true
    },
    emissor: {
      type: 'string'
    },
    data_vencimento: {
      type: 'string', columnType: 'date'
    },
    quantidade:{
      type: 'number'
    },
    net:{
      type: 'number'
    },
    arquivo: {
      type: 'string'
    },
    descricao: {
      type: 'string'
    }
  },

};

