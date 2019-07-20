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
  'empresa': {
    '*': true
  },
  'escritorio': {
    '*': true
  },
  'link': {
    '*': true
  },
  'central': {
    '*': true
  },
  'tipo_central': {
    '*': true
  },
  'tipo_movimentacao': {
    '*': true
  },
  'tipo_link': {
    '*': true
  },
  'comissionamento': {
    '*': true
  },
  'comissionamento_item': {
    '*': true
  },
  'comissionamento_faixa': {
    '*': true
  },
  'comissionamento_faixa_item': {
    '*': true
  },
  'movimentacao': {
    '*': true
  },
  'Tipo_movimentacao': {
    '*': true
  },
  'cliente': {
    '*': true
  },
  'tipo_situacao_tributaria': {
    '*': true
  },
  'tipo_situacao_movimento': {
    '*': true
  },
  'endereco': {
    '*': true
  }
};
