/**
 * Escritorio.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nome: {
      type: 'string' , required: true
    },
    dt_inicio_ope: {
      type: 'string', columnType: 'date', allowNull: true
    },
    dt_fim_ope: {
      type: 'string', columnType: 'date', allowNull: true
    },
    ativo: {
      type: 'boolean', defaultsTo: true
    },
    // associação com table central muitos p muitos
    centrais: {
      collection: 'central', via: 'escritorios'
    },
    users: {
      collection: 'user', via: 'id_escritorio'
    },

  },

};

