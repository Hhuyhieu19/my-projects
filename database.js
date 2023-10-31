const { Sequelize } = require('sequelize');

const databaseName = 'my_database';
const username = 'root';
const password = '12345';

const sequelize = new Sequelize(databaseName, username, password, {
    host: '127.0.0.1',
    port: 3307,
    dialect: 'mariadb',
    dialectOptions: {
      allowPublicKeyRetrieval: true,
    },
    logging: false,
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Kết nối thành công.');
  } catch (error) {
    console.error('Không thể kết nối:', error);
  }
}

testConnection();

module.exports = sequelize;
