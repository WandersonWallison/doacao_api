/**
 * Tipo_movimentacao.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    descricao: {
      type: 'string', required: true,
    },
    sigla: {
      type: 'string', maxLength: 15
    },
    ativo: {
      type: 'boolean', defaultsTo: true
    },
    // associação com table movimentação um p muitos
    movimentacao: {
      collection: 'movimentacao', via: 'id_tipo_movimentacao'
    }
  }
};

