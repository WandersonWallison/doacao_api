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
    data_criacao: {
      type: 'string', columnType: 'datetime'
    },
    cnh_rg: {
      type: 'string'
    },
    data_emissao: {
      type: 'string', columnType: 'date', allowNull: true
    },
    data_atendimento: {
      type: 'string', columnType: 'datetime'
    },
    //data que valida a tempo de trabalho do Runter
    data_expiracao: {
      type: 'string', columnType: 'datetime'
    },
    genero: {
      type: "string", isIn: ['M', 'F'],
    },
    email: {
      type: 'string', unique: true, isEmail: true, maxLength: 200
    },
    telefone: {
      type: 'string', allowNull: true
    },
    celular: {
      type: 'string', allowNull: true
    },
    obs: {
      type: 'string'
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
      type: 'string', columnType: 'date', allowNull: true
    },
    cpf: {
      type: 'string'
    },
    escolaridade: {
      type: 'string',
    },
    status: {
      type: "string", isIn: ['Dados Incorrtos', 'Não Aceita Visita'],
    },
    tipo: {
      type: "string", isIn: ['Lead', 'Cliente'],
    },
    //campo que valida o satatus atual do lead (1 - AGENDANDO, 2-EXPIRADO_AGENDANDO, 3-AGENDANDO, 4-ACEITO_AGENDAMENTO, 5-REGEITADO_AGENDAMENTO )
    momento_atual:{
      type:"number"
    },
    ativo: {
      type: 'boolean', defaultsTo: true
    },
    id_user_criador: {
      type: 'number', required: true
    },
    id_user_editor: {
      type: 'number'
    },
    id_office: {
      type: 'number'
    },
    // associação com table addess
    enderecos: {
      collection: 'address', via: 'leads_address'
    },
    // associação com table bank
    contas: {
      collection: 'bank', via: 'leads_bank'
    },
    // associação com table Schedule
    agendamentos: {
      collection: 'schedule', via: 'id_lead'
    }


  },

};

