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
    // associação com table grupo um p um
    id_grupo: {
      model: 'grupo'
    },
    // associação com table endereco um p um
    endereco: {
      collection: 'endereco', via: 'id_user'
    },
    clientes: {
      collection: 'cliente',
      via: 'id_cliente'
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
