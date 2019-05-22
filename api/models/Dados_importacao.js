/**
 * Dados_importacao.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    data: {
      type: 'string', columnType: 'datetime'
    },
    nome_arquivo: {
      type: 'string'
    },
    descricao: {
      type: 'string', columnType: 'text'
    },
    total: {
      type: 'number',
      columnType: 'decimal(16,8)'
    },
    total_inposto: {
      type: 'number',
      columnType: 'decimal(16,8)'
    },
    total_comissao: {
      type: 'number',
      columnType: 'decimal(16,8)'
    },
    ativo: {
      type: 'boolean', defaultsTo: true
    },
    itens: {
      collection: 'importacao',
      via: 'id_dados_importacao'
    }
  },

};

