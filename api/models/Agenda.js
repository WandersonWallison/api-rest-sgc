/**
 * Agenda.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    dia: {
      type: 'number',
      required: true
    },
    hora_inicial: {
      type: 'number',
      required: true
    },
    hora_final: {
      type: 'number',
      required: true
    },
    // associação com tabela leads *um p um
    leads: {
      model: 'leads',
      required: true
    },

    //associação com a tabela servico *um p um
    servico: {
      model: 'servico',
      required: true
    },

    //associação com a tabela agente
    agente: {
      model: 'agente',
      required: true
    }

  },

};

