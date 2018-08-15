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
      type: "string"
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
    numero:{
      type: 'number'
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
    },
    // associação com table office um p um
    office_address: {
      model: 'office',
      unique: true
    },
    // associação com table office um p um
    schedule_address: {
      model: 'schedule'
    }






  },

};

