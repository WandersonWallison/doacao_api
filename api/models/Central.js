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

