import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config();
const {DB_NAME,DB_USER,DB_PASSWORD}=process.env;
// const  DB_NAME = process.env.DB_NAME;
// const DB_USER=process.env.DB_USER;
// const DB_PASSWORD=process.env.DB_PASSWORD;


const sequelize=new Sequelize(DB_NAME,DB_USER,DB_PASSWORD,{
    host:'localhost',
    dialect:'postgres',
    pool:{
        max:5,
        min:0,
        logging:false,
        acquire:30000,
        idle:10000
    }

});

export default sequelize;