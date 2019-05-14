/**
 * Central.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nome: {
      type: 'string' , required: true
    },
    razao_social: {
      type: 'string', maxLength: 120
    },
    email: {
      type: 'string', unique: true, isEmail: true
    },
    cnpj: {
      type: 'string'
    },
    telefone: {
      type: 'string'
    },
    celular: {
      type: 'string'
    },
    site: {
      type: 'string'
    },
    ativo: {
      type: 'boolean', defaultsTo: true
    },
    // associação com table empresa um p muitos
    id_empresa: {
      model: 'empresa'
    },
    // associação com table empresa um p muitos
    id_tipo_central: {
      model: 'tipo_central'
    },
    // associação com table escrtorio muitos p muitos
    escritorios: {
      collection: 'escritorio', via: 'centrais'
    },
    // associação com table endereço um p um
    endereco: {
      collection: 'endereco', via: 'id_central'
    }
  },

};

