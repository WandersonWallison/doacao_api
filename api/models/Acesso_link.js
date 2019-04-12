/**
 * Acesso_link.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nivel: {
      type: 'number' , defaultsTo: 0
    },
    ordem: {
      type: 'number' , defaultsTo: 0
    },
    descricao: {
      type: 'string' , required: true
    },
    link: {
      type: 'string' , required: true
    },
    imagem: {
      type: 'string' , required: true
    },
    ativo: {
      type: 'boolean', defaultsTo: true
    },
    // associação com table acesso_grupo um p muitos
    id_tipo_link: {
      model: 'tipo_link'
    },
  },

};

