"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Banner extends Model {}
  Banner.init(
    {
      description: DataTypes.TEXT,
      timer: DataTypes.INTEGER,
      link: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Banner",
    }
  );
  return Banner;
};