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
    // valor banco Bradesco
    valor_b: {
      type: 'number',
      allowNull: true
    },
    // valor banco itau
    valor_i: {
      type: 'number',
      allowNull: true
    },
    // valor banco santander
    valor_st: {
      type: 'number',
      allowNull: true
    },
    // valor banco safra
    valor_sf: {
      type: 'number',
      allowNull: true
    },
    // valor banco do Brasil
    valor_bb: {
      type: 'number',
      allowNull: true
    },
    // valor banco outros
    valor_o: {
      type: 'number',
      allowNull: true
    },
    nome_outros: {
      type: 'string',
      allowNull: true
    },
    previdencia: {
      type: 'number',
      allowNull: true
    },
    coe: {
      type: 'number',
      allowNull: true
    },
    renda_variavel: {
      type: 'number',
      allowNull: true
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

