import { Sequelize } from "sequelize";
import { createConnection } from "mysql2/promise";

const createDatabase = async () => {
  try {
    const connection = await createConnection({
      host: process.env.DATABASE_URL,
      port: process.env.DATABASE_PORT,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
    });

    await connection.query(
      `CREATE DATABASE IF NOT EXISTS ${process.env.DATABASE_NAME}`
    );
    console.log("✅ 데이터베이스 생성 성공!");

    connection.end();
  } catch (err) {
    console.error("❌ 데이터베이스 생성 실패:", err);
  }
};

const initializeSequelize = async () => {
  await createDatabase();

  const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
      host: process.env.DATABASE_URL,
      port: process.env.DATABASE_PORT,
      dialect: "mysql",
      logging: console.log,
    }
  );

  return sequelize;
};

export default initializeSequelize;
