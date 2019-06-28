//classe responsavel parar manager e agente

const bcrypt = require('bcrypt-nodejs');
module.exports = {
  attributes: {
    username: {
      columnName: 'nome',
      type: 'string', required: true
    },
    email: {
      columnName: 'login',
      type: 'string', required: true, unique: true, isEmail: true
    },
    id_xp: {
      type: 'string'
    },
    comissionamento: {
      type: 'number' 
    },
    cvm: {
      type: 'string'
    },
    data_nascimento: {
      type: 'string', columnType: 'datetime'
    },
    cpf: {
      type: 'string'
    },
    cnh: {
      type: 'string'
    },
    rg: {
      type: 'string'
    },
    password: {
      columnName: 'senha',
      type: 'string', required: true
    },
    telefone: {
      type: 'string'
    },
    celular: {
      type: 'string'
    },
    dt_inicio_ope: {
      type: 'string', columnType: 'datetime'
    },
    dt_fim_ope: {
      type: 'string', columnType: 'datetime'
    },
    ativo: {
      type: 'boolean', defaultsTo: true
    },
    // auto relacionamento user
    id_pai: {
      type: 'number'
    },
    // associação com table grupo um p um
    id_grupo: {
      model: 'grupo'
    },// associação com table grupo um p muitos
    id_escritorio: {
      required: false,
      model: 'escritorio'
    },// associação com table grupo um p muitos
    id_empresa: {
      required: false,
      model: 'empresa'
    },
    id_comissionamento_faixa: {
      model: 'comissionamento_faixa'
    },
    // associação com table endereco um p um
    endereco: {
      collection: 'endereco', via: 'id_user'
    },
    // associação com table endereco um p muito
    clientes: {
      collection: 'cliente',
      via: 'id_assessor'
    }
  },

  tableName: 'usuario',

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
  },
  beforeUpdate: function(user, cb) {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(user.password, salt, null, function (err, hash) {
        if (err) return cb(err);
        user.password = hash;
        return cb();
      });
    });

  },
};
