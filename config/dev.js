module.exports = {
  db: {
    databaseUri : process.env.DATABASE_URL,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    schema: "public",
    host: process.env.HOST,
    dialect: "postgres",
    port: process.env.PORT,
    driver: "pg",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  },
}