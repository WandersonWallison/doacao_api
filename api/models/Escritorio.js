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
    dt_inicio_ope: {
      type: 'string', columnType: 'date'
    },
    dt_fim_ope: {
      type: 'string', columnType: 'date'
    },
    ativo: {
      type: 'boolean', defaultsTo: true
    },
    iss: {
      type: 'number',
      columnType: 'decimal(16,2)'
    },
    // associação com table central muitos p muitos
    centrais: {
      collection: 'central', via: 'escritorios'
    },
    users: {
      collection: 'user', via: 'id_escritorio'
    },
    endereco: {
      collection: 'endereco', via: 'id_escritorio'
    },

  },

};

