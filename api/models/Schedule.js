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
    qtd_retorno: {
      type: 'number'
    },
    tempo_ligacao: {
      type: 'string',
      columnType: 'datetime',
    },
    abertura: {
      type: 'string',
      columnType: 'datetime',
    },
    data_criacao: {
      type: 'string',
      columnType: 'datetime',
    },
    data_expiracao: {
      type: 'string',
      columnType: 'datetime',
    },
    fechamento: {
      type: 'string',
      columnType: 'datetime',
    },
    office_schedule: {
      model: 'office'
    },
    obs: {
      type: 'string'
    },
    obs_motivo: {
      type: 'string'
    },
    motivo: {
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
      model: 'user',
    },
    ativo: {
      type: 'boolean', defaultsTo: true
    },
    // verificar movimentação do agendamento 0 todos , 1 - aceito , 2 - não aceita , 3- realizado , 4 - negado
    status: {
      type: "number", isIn: [0, 1, 2, 3, 4],
      defaultsTo: 0
    }


  },

};

