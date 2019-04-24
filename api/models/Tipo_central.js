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
    sigla: {
      type: 'string', maxLength: 15
    },
    ativo: {
      type: 'boolean', defaultsTo: true
    },
    // associação com table central um p muitos
    centrais: {
      collection: 'central', via: 'id_tipo_central'
    }
  },

};

