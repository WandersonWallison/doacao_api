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
    cvm: {
      type: "string"
    },
    password: {
      columnName: 'senha',
      type: 'string', required: true
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
    // associação com table acesso_grupo um p um
    id_acesso_grupo: {
      model: 'acesso_grupo'
    },
  },

  tableName: 'acesso_usuario',

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
