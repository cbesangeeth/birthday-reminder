module.exports = {
    db: {
      databaseUri : "postgres://xglduvhjremmtu:f65ac5c40d99520409a9b402b31c2c5cc2927f6ce292741639d5630e0bb167a6@ec2-18-206-20-102.compute-1.amazonaws.com:5432/d3j7qgse1su12i",
      username: "xglduvhjremmtu",
      password: "f65ac5c40d99520409a9b402b31c2c5cc2927f6ce292741639d5630e0bb167a6",
      database: "d3j7qgse1su12i",
      schema: "public",
      host: "ec2-18-206-20-102.compute-1.amazonaws.com",
      dialect: "postgres",
      port: "5432",
      driver: "pg",
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
      }
    }
    },
}