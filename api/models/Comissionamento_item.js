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
      type: 'string', columnType: 'datetime'
    },
    receita_bruta: {
      type: 'string',
      columnType: 'decimal(16,8)'
    },
    receita_liquida: {
      type: 'string',
      columnType: 'decimal(16,8)'
    },
    comissao_escritorio_p: {
      type: 'string'
    },
    comissao_escritorio_r: {
      type: 'string',
      columnType: 'decimal(16,8)'
    },
    imposto: {
      type: 'string',
      columnType: 'decimal(16,8)'
    },
    comissao_liquida: {
      type: 'string',
      columnType: 'decimal(16,8)'
    },
    status: {
      type: 'string'
    },
    mensagem: {
      type: 'string',columnType: 'text'
    },
    iss_escritorio: {
      type: 'number',
      columnType: 'decimal(16,8)'
    },
    faixa_comissao_escritorio: {
      type: 'number'
    },
    faixa_comissao_assessor: {
      type: 'number'
    },
    valor_comissao_escritorio: {
      type: 'number'
    },
    valor_comissao_assessor: {
      type: 'number'
    },
    valor_iss_comissao_escritorio: {
      type: 'number'
    },
    valor_iss_comissao_assessor: {
      type: 'number'
    },
    calculo_comissao_escritorio: {
      type: 'number'
    },
    calculo_comissao_assessor: {
      type: 'number'
    },
    id_comissionamento: {
      model: 'comissionamento'
    }
  },

};

