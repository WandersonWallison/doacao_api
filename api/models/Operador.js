/**
 * Operador.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nome: {
      type: 'string' , required: true
    },
    // associação com table empresa um p muitos
    id_empresa: {
      model: 'empresa'
    },
    dt_inicio_ope: {
      type: 'string', columnType: 'date', allowNull: true
    },
    dt_fim_ope: {
      type: 'string', columnType: 'date', allowNull: true
    },
    ativo: {
      type: 'boolean', defaultsTo: true
    }//,
    // associação com table empresa um p um
    //empresa: {
      //collection: 'empresa', via: 'id_empresa'
    //}

  },

};

