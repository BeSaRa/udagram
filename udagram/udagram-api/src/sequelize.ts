import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

console.log('USER:', config.username)
console.log('PASSWORD:', config.password)
console.log('HOST:', config.database)
export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,

  dialect: "postgres",
  storage: ":memory:",
});
