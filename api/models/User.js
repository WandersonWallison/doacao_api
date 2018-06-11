const bcrypt = require('bcrypt-nodejs');
module.exports = {
  attributes: {
    username: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true
    },
    password: {
      type: 'string',
      required: true
    },
    //associação com a tabela profile
    id_profile: {
      model: 'profile',
    },
    ativo: {
      type: 'boolean',
      defaultsTo: true
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
