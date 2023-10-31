const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Component = sequelize.define('Component', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    warrantyPeriod: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  return Component;
};
