/**
 * Cliente.js
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
    endereco: { type: 'string', required: true },
    bairro: { type: 'string', required: true },
    cidade: { type: 'string', required: true },
    telefone: { type: 'string', allowNull: true, defaultsTo: '11-22222-3333' },
    data_nascimento: { type: 'number', required: true },
    cpf: { type: 'string', required: true },
    atividade: { type: 'string', required: true },
    escolaridade: { type: 'string', required: true },
    ativo: { type: 'boolean', defaultsTo: true },
    agenda: {
      collection:'agenda',
      via: 'proprietario'
    }

  },

};

