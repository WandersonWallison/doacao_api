/**
 * Endereco.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    tipo: {
      type: "string", isIn: ['Residencial', 'Comercial'],
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
    complemento: {
      type: 'string',
    },
    numero:{
      type: 'string'
    },
    latitude: {
      type: 'string', maxLength: 30,
    },
    longitude: {
      type: 'string', maxLength: 30,
    },
    // associação com table user um p um
    id_user: {
      model: 'user', unique: true
    },
    // associação com table central um p um
    id_cliente: {
      model: 'cliente', unique: true
    }
  },

};

