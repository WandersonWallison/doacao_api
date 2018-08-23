/**
 * LeadHistorico.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    data_evente: {
      type: 'string', columnType: 'datetime'
    },
    data_expiracao: {
      type: 'string', columnType: 'datetime'
    },
    id_lead: {
      type: 'number'
    },
    id_user: {
      type: 'number'
    }
  },

};

