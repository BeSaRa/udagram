import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

console.log('CONFIGURATION')
console.log({ config })
export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,
  dialect: "postgres",
  storage: ":memory:",
});
