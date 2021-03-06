/**
 * Servico.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nome: {
      type: 'string',
      required: true,
      maxLength: 120
    },
    descricao: {
      type: 'string',
      required: true,
      maxLength: 200
    },
    tempo: {
      type: 'number',
      required: true
    }

  },

};

