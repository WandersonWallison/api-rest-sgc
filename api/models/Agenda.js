/**
 * Agenda.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    dia: { type: 'number', required: true },
    hora_inicial: { type: 'number', required: true },
    hora_final: { type: 'number', required: true },
    proprietario: {
      model: 'cliente',
      unique: true
    }
  },

};

