const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    const Device = sequelize.define('Device', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      brand: {
        type: DataTypes.STRING
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
  
    return Device;
  };
  