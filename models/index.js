// const sequelize = new Sequelize(
//   "postgresql://sujal:1G7wBxu0xC6tGSXrod56x3vUYILRCTQf@dpg-d00hkdili9vc739u5je0-a/dbname_otu5"
//   "postgresql://sujal:1G7wBxu0xC6tGSXrod56x3vUYILRCTQf@dpg-d00hkdili9vc739u5je0-a.oregon-postgres.render.com/dbname_otu5"
//   config.database,
//   config.username,
//   config.password,
//   {
//     host: config.host,
//     dialect: config.dialect,
//     dialectOptions: {
//       ssl: {
//         require: true,
//         rejectUnauthorized: false, // Render uses self-signed certs
//       },
//     },
//   }
// );

const { Sequelize } = require("sequelize");
const dbConfig = require("../config/db.config");
// console.log({ dbConfig });
const sequelize = new Sequelize(
    dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, 
    {
  host: dbConfig.HOST,
  dialect: "postgres",
  dialectOptions:{
  ssl: {
    require: true,
    rejectUnauthorized: false, // Render uses self-signed certs
  },
}
});

const User = require("./user.model")(sequelize);
const Job = require("./job.model")(sequelize);
const Application = require("./application.model")(sequelize);

// Associations
User.hasMany(Job, { foreignKey: "recruiterId" });
Job.belongsTo(User, { foreignKey: "recruiterId" });

User.hasMany(Application, { foreignKey: "applicantId" });
Application.belongsTo(User, { foreignKey: "applicantId" });

Job.hasMany(Application, { foreignKey: "jobId" });
Application.belongsTo(Job, { foreignKey: "jobId" });

module.exports = { sequelize, User, Job, Application };
