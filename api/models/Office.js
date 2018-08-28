/**
 * Office.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
module.exports = {

  attributes: {

    nome: {
      type: 'string', required: true, maxLength: 120
    },
    cnpj: {
      type: 'string'
    },
    site: {
      type: 'string'
    },
    telefone: {
      type: 'string', allowNull: true,
    },
    email: {
      type: 'string', unique: true, isEmail: true, maxLength: 200
    },
    abertura: {
      type: 'string',
      columnType: 'datetime',

    },
    fechamento: {
      type: 'string',
      columnType: 'datetime'
    },
    dia_semana: {
      type: 'string'
    },
    responsavel: {
      type: 'string', required: true
    },
    qtd_visita_dia: {
      type: 'number', required: true
    },
    tempo_aceita: {
      type: 'number', required: true
    },
    users: {
      collection: 'user',
      via: 'id_office'
    },
    id_company: {
      model: 'company'
    },
    // associação com table addresss um p um
    endereco: {
      collection: 'address', via: 'office_address'
    },
    // associação com table addresss um p muitos
    agendamentos: {
      collection: 'schedule', via: 'office_schedule'
    },
  },

};

