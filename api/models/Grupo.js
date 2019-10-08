/**
 * Acesso_grupo.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    descricao: {
      type: 'string', required: true,
    },
    // associação com table user um p muitos
    usuarios: {
      collection: 'user', via: 'id_grupo'
    }
  },

};

