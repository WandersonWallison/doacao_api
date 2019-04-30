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
    // auto relacionamento user
    id_pai: {
      type: 'number'
    },
    // associação com table grupo um p um
    id_grupo: {
      model: 'grupo'
    },// associação com table grupo um p muitos
    id_escritorio: {
      model: 'escritorio'
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
