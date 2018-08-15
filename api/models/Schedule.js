/**
 * Schedule.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    data: {
      type: 'string',
      columnType: 'datetime',
      required: true
    },
    hora: {
      type: 'number'
    },
    tempo_ligacao: {
      type: 'number',
      columnType: 'datetime',
    },
    abertura: {
      type: 'number',
      columnType: 'datetime',
    },
    fechamento: {
      type: 'number',
      columnType: 'datetime',
    },
    office_schedule: {
      model: 'office'
    },
    obs: {
      type: 'string'
    },
    // associação com table leads / cliente um p um
    id_lead: {
      model: 'leads'
    },
    // associação com table addresss um p um
    endereco: {
      collection: 'address', via: 'schedule_address'
    },
    // associação com table manager / agente um p muitos
    agentes: {
      model: 'user'
    },
    ativo: {
      type: 'boolean', defaultsTo: true
    },
    status: {
      type: "number", isIn: [0, 1, 2],
      defaultsTo: 0
    }


  },

};

