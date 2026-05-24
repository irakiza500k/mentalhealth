import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "mental_health_db",
  "root",
  "",
  {
    host: "localhost",
    dialect: "mysql",
    logging: false,
  }
);

export default sequelize;