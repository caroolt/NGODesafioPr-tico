const Sequelize = require('sequelize');
const instance = require('../../database');

const columns = {
  votes: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
}

const options = {
  freezeTableName: true,
  tableName: 'candidates',
  timestamps: true,
}

module.exports = instance.define('candidates', columns, options)