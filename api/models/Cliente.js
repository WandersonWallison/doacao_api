/**
 * Cliente.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nome: {
      type: 'string' , required: true
    },
    email: {
      type: 'string', isEmail: true
    },
    data_nascimento: {
      type: 'string', columnType: 'datetime'
    },    
    observacao: {
      type: 'string'
    },
    razao_social: {
      type: 'string'
    },
    cpf_cnpj: {
      type: 'string'
    },
    rg: {
      type: 'string'
    },
    token: {
      type: 'string', unique: true 
    },
    telefone: {
      type: 'string'
    },
    telefone1: {
      type: 'string'
    },
    telefone2: {
      type: 'string'
    },
    telefone3: {
      type: 'string'
    },
    endereco: {
      collection: 'endereco', via: 'id_cliente'
    },
    id_user: {
      model: 'user'
    },
    doacoes: {
      collection: 'doacao',
      via: 'id_cliente'
    }
  },

};

