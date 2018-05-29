/**
 * Agente.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {


    email: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true,
      maxLength: 200
    },
    nome: {
      type: 'string',
      required: true,
      maxLength: 120
    },
    endereco: {
      type: 'string',
    },
    bairro: {
      type: 'string',
    },
    cidade: {
      type: 'string',
    },
    telefone: {
      type: 'string',
      allowNull: true,
      defaultsTo: '11-22222-3333'
    },
    data_nascimento: {
      type: 'number',
    },
    cpf: {
      type: 'string',
    },
    atividade: {
      type: 'string',
    },
    escolaridade: {
      type: 'string',
    },
    ativo: {
      type: 'boolean',
      defaultsTo: true
    }

  },

};
