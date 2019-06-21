/**
 * Empresa.js
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
      type: 'string', required: true, maxLength: 120
    },
    email: {
      type: 'string', required: true, unique: true, isEmail: true
    },
    cnpj: {
      type: 'string', maxLength: 120
    },
    telefone: {
      type: 'string', allowNull: true
    },
    celular: {
      type: 'string', allowNull: true
    },
    site: {
      type: 'string'
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
    // associação com table central um p muitos
    central: {
      collection: 'central', via: 'id_empresa'
    },
    // associação com table endereco um p um
    endereco: {
      collection: 'endereco', via: 'id_empresa'
    },
    users: {
      collection: 'user', via: 'id_empresa'
    },
  },

};

