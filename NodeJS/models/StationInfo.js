const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const StationInfo = sequelize.define('StationInfo', {
  station: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''
  },
  locator: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''
  },
  postcode: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''
  },
  operatorName: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''
  }
});

module.exports = StationInfo;
