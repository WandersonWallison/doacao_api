/**
 * Tipo_link.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    descricao: {
      type: 'string' , required: true
    },
    ativo: {
      type: 'boolean', defaultsTo: true
    },
    // associação com table user um p muitos
    links: {
      collection: 'link', via: 'id_tipo_link'
    },
  },

};

