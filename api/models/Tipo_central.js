/**
 * Tipo_central.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    descricao: {
      type: 'string', required: true,
    },
    ativo: {
      type: 'boolean', defaultsTo: true
    },
    // associação com table central um p muitos
    central: {
      collection: 'central', via: 'id_tipo_central'
    }
  },

};

