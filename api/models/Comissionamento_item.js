/**
 * Importacao.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    classificacao:{
      type: 'string'
    },
    produto_categoria:{
      type: 'string'
    },
    mercado: {
      type: 'string'
    },
    nome_cliente: {
      type: 'string'
    },
    nivel_1: {
      type: 'string'
    },
    nivel_2: {
      type: 'string'
    },
    ativo: {
      type: 'boolean', defaultsTo: true
    },
    codigo_cliente: {
      type: 'string'
    },
    codigo_master:{
      type: 'string'
    },
    data:{
      type: 'number', columnType: 'datetime'
    },
    receita_bruta: {
      type: 'number',
      columnType: 'decimal(16,8)'
    },
    receita_liquida: {
      type: 'number',
      columnType: 'decimal(16,8)'
    },
    comissao_escritorio_p: {
      type: 'number'
    },
    comissao_escritorio_r: {
      type: 'number',
      columnType: 'decimal(16,8)'
    },
    imposto: {
      type: 'number',
      columnType: 'decimal(16,8)'
    },
    comissao_liquida: {
      type: 'number',
      columnType: 'decimal(16,8)'
    },    
    id_comissionamento: {
      model: 'comissionamento'
    }
  },

};

