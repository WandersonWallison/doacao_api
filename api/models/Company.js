/**
 * Company.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 Empresa em que trabalha, função, cargo, sócio(s/n)
 */

module.exports = {

  attributes: {

    nome: {
      type: 'string', required: true, maxLength: 120
    },
    razao_social: {
      type: 'string', required: true, maxLength: 120
    },
    email: {
      type: 'string', required: true, unique: true, isEmail: true
    },
    cnpj: {
      type: 'string', maxLength: 120
    },
    telefone: {
      type: 'string', allowNull: true
    },
    site: {
      type: 'string'
    },
    // associação com table leads
    offices: {
      collection: 'office', via: 'id_company'
    },

  },

};

