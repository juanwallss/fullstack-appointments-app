import { Sequelize } from 'sequelize';
import mysql2 from 'mysql2';

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.MYSQL_HOST,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  dialectModule: mysql2
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection fully connected');
    // await sequelize.sync({ alter: true }); // this will create tables if they don't exist or update the existing ones
    // console.log('Database synced');
  } catch (error) {
    console.log('Unable to connect', error);
  }
})();

export default sequelize;
