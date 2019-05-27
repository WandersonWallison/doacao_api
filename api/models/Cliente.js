/**
 * Cliente.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nome: {
      type: 'string' , required: true
    },
    email: {
      type: 'string', isEmail: true
    },
    id_xp: {
      type: 'string' 
    },
    id_lead: {
      type: 'number' 
    },
    habilitado_bovespa: {
      type: 'boolean', defaultsTo: true
    },
    termo_push: {
      type: 'boolean', defaultsTo: true
    },
    potencial_investimento: {
      type: 'number'
    },
    xp_assessor: {
      type: 'string'
    },
    xp_conta: {
      type: 'string'
    },
    observacao: {
      type: 'string'
    },
    ativo: {
      type: 'boolean', defaultsTo: true
    },
    id_operador:{
      type: 'number'
    },
    id_assessor: {
      model: 'user'
    },
    investimento_inicial: {
      type: 'number',
      columnType: 'decimal(16,8)'
    },
    razao_social: {
      type: 'string'
    },
    cpf_cnpj: {
      type: 'string'
    },
    rg: {
      type: 'string'
    },
    telefone: {
      type: 'string'
    },
    id_tipo_solucao_tributaria: {
      model: 'tipo_situacao_tributaria'
    },
    endereco: {
      collection: 'endereco', via: 'id_cliente'
    }
  },

};

