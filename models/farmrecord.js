'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FarmRecord extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  FarmRecord.init({
    fieldName: DataTypes.STRING,
    dateComplete: DataTypes.STRING,
    operationType: DataTypes.STRING,
    details: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'FarmRecord',
  });
  return FarmRecord;
};