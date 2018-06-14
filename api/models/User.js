//classe responsavel parar manager e agente

const bcrypt = require('bcrypt-nodejs');
module.exports = {
  attributes: {
    username: {
      type: 'string', required: true,
    },
    email: {
      type: 'string', required: true, unique: true, isEmail: true
    },
    password: {
      type: 'string', required: true
    },
    cvm: {
      type: "string"
    },
    data_inicio: {
      type: 'string', columnType: 'date',
    },
    cnh_rg: {
      type: 'string'
    },
    data_emissao: {
      type: 'string', columnType: 'date'
    },
    uf: {
      type: "string"
    },
    genero: {
      type: "string", isIn: ['M', 'F'],
    },
    telefone: {
      type: 'number', allowNull: true,
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
    ativo: {
      type: 'boolean', defaultsTo: true
    },
    // associação com table addess
    enderecos: {
      collection: 'address', via: 'user_address'
    },
    // associação com table bank
    contas: {
      collection: 'bank', via: 'user_bank'
    },
    // associação com table company
    user_company: {
      model: 'company'
    },
    // associação com table Schedule
    user_schedule: {
      model: 'schedule',
      unique: true
    },
    //associação com a tabela profile
    id_profile: {
      model: 'profile'
    }
  },
  customToJSON: function () {
    return _.omit(this, ['password'])
  },
  beforeCreate: function (user, cb) {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(user.password, salt, null, function (err, hash) {
        if (err) return cb(err);
        user.password = hash;
        return cb();
      });
    });
  }
};
