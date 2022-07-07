import Sequelize from "sequelize";
import sequelize from "../util/db";

const register = sequelize.define("register", {
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },

    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

export default register;

