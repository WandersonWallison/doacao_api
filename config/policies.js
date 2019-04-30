/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  '*': 'authenticated',
  // whitelist the auth controller
  'auth': {
    '*': true
  },
  'user': {
    '*': true
  },
  'grupo': {
    '*': true
  },
  'central': {
    '*': true
  },
  'tipo_link': {
    '*': true
  }
  ,
  'tipo_situacao_tributaria': {
    '*': true
  }
  ,
  'tipo_movimento': {
    '*': true
  },
  'tipo_situacao_movimento': {
    '*': true
  },
  'operador': {
    '*': true
  }
};
