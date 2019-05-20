/**
 * Tipo_situacao_tributaria.js
 * @author :: Ailton Souza.
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    descricao: {
      type: 'string' , required: true , unique: true
    },
    ativo: {
      type: 'boolean', defaultsTo: true
    },
    clientes: {
      collection: 'cliente',
      via: 'id_tipo_solucao_tributaria'
    }
  },

};

