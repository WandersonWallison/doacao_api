/**
 * Tipo_movimento.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    descricao: {
      type: 'string' , required: true , unique: true
    },
    sigla: {
      type: 'string' , required: true , unique: true
    },
    ativo: {
      type: 'boolean', defaultsTo: true
    },

  },

};

