import Sequelize from 'sequelize';
import sequelize from '../util/db';

const user = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

export default user;
