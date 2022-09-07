'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cabservices extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cabservices.init({
    teckId: DataTypes.INTEGER,
    CustomerMob: DataTypes.INTEGER,
    CustName: DataTypes.STRING,
    CustLoca: DataTypes.STRING,
    CustDesti: DataTypes.STRING,
    Rate: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'cabservices',
  });
  return cabservices;
};