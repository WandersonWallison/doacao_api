/**
 * Bank.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 * Dados bancários - banco, agência, conta, renda, aplicações
 */

module.exports = {

  attributes: {

    nome: {
      type: 'string', required: true, maxLength: 120
    },
    ag: {
      type: 'number', required: true
    },
    n_conta: {
      type: 'number', required: true
    },
    renda: {
      type: 'number', required: true
    },
    aplicacao: {
      type: 'number', required: true
    },
    // associação com table leads
    leads_bank: {
      model: 'leads'
    },
    // associação com table user
    user_bank: {
      model: 'user'
    }
  },

};

