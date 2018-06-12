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
    funcao: {
      type: 'string', required: true, maxLength: 120
    },
    cargo: {
      type: 'string', required: true, maxLength: 120
    },
    socio: {
      type: 'string', maxLength: 120
    },
    // associação com table leads
    leads: {
      collection: 'leads', via: 'leads_company'
    },
    // associação com table leads
    users: {
      collection: 'user', via: 'user_company'
    },

  },

};

