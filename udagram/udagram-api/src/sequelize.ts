import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

console.log('USER:', config.username)
console.log('PASSWORD:', config.password)
console.log('DB:', config.database)
console.log('HOST:', config.host)
// export const sequelize = new Sequelize({
//   username: config.username,
//   password: config.password,
//   database: config.database,
//   host: config.host,
//   dialect: "postgres",
//   storage: ":memory:",
// });
