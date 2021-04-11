module.exports = {
  db: {
    databaseUri : `postgres://xglduvhjremmtu:f65ac5c40d99520409a9b402b31c2c5cc2927f6ce292741639d5630e0bb167a6@ec2-18-206-20-102.compute-1.amazonaws.com:5432/d3j7qgse1su12i`,
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