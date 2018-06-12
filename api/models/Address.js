/**
 * Address.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    tipo: {
      type: "string", isIn: ['Pessoal', 'Comercial'],
    },
    cep: {
      type: "string", unique: true
    },
    uf: {
      type: "string", maxLength: 2
    },
    cidade: {
      type: 'string', maxLength: 120, required: true
    },
    bairro: {
      type: 'string', maxLength: 120, required: true
    },
    logradouro: {
      type: 'string',
    },
    latitude: {
      type: 'string', maxLength: 30,
    },
    longitude: {
      type: 'string', maxLength: 30,
    },
    ddd: {
      type: 'number'
    },
    // associação com table leads
    leads_address: {
      model: 'leads'
    },
    // associação com table user
    user_address: {
      model: 'user'
    }




  },

};

