/**
 * Leads.js
 * classe responsavel parar leads e cliente
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nome: {
      type: 'string', required: true, maxLength: 120
    },
    cnh_rg: {
      type: 'string', required: true
    },
    data_emissao: {
      type: 'string', columnType: 'date', required: true
    },
    uf: {
      type: "string"
    },
    genero: {
      type: "string", isIn: ['M', 'F'],
    },
    email: {
      type: 'string', required: true, unique: true, isEmail: true, maxLength: 200
    },
    telefone: {
      type: 'string', allowNull: true,
    },
    rede_social: {
      type: "string"
    },
    estado_civil: {
      type: "string", isIn: ['Solteiro', 'Casado', 'Divorciado', 'Viúvo', 'Outros'],
    },
    nome_conjuge: {
      type: 'string', maxLength: 120
    },
    nome_mae: {
      type: 'string', maxLength: 120
    },
    nome_pai: {
      type: 'string', maxLength: 120
    },
    data_nascimento: {
      type: 'string', columnType: 'date'
    },
    cpf: {
      type: 'string'
    },
    escolaridade: {
      type: 'string',
    },
    tipo: {
      type: "string", isIn: ['Lead', 'Cliente'],
    },
    ativo: {
      type: 'boolean', defaultsTo: true
    },
    // associação com table addess
    enderecos: {
      collection: 'address', via: 'leads_address'
    },
    // associação com table bank
    contas: {
      collection: 'bank', via: 'leads_bank'
    },
    // associação com table company
    leads_company: {
      model: 'company'
    },
    // associação com table Schedule
    leads_schedule: {
      model: 'schedule',
      unique: true
    }


  },

};

