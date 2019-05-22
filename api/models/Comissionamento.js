/**
 * Dados_importacao.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    data_ref: {
      type: 'string', columnType: 'datetime'
    },
    nome_arquivo: {
      type: 'string'
    },
    descricao: {
      type: 'string', columnType: 'text'
    },
    status: {
      type: 'string'
    },
    mensagem: {
      type: 'string'
    },
    dthr_importacao: {
      type: 'string', columnType: 'datetime'
    },
    dthr_validacao: {
      type: 'string', columnType: 'datetime'
    },
    dthr_processamento: {
      type: 'string', columnType: 'datetime'
    },     
    usr_importacao: {
      type: 'number'
    },
    usr_validacao: {
      type: 'number'
    },
    usr_processamento: {
      type: 'number'
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
      collection: 'comissionamento_item',
      via: 'id_comissionamento'
    }
  },

};

