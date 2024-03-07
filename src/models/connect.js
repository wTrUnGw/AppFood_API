import { Sequelize } from "sequelize";

const sequelize = new Sequelize("AppFood", "root", "1234", {
  host: "localhost",
  port: "3307",
  dialect: "mysql", // CSDL đang sử dụng
});

try {
  await sequelize.authenticate();
  console.log("Kết nối thành công");
} catch (err) {
  console.log(err);
}

export default sequelize;
