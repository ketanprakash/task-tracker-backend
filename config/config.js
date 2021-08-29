const dotenv = require('dotenv').config();
dotenv.config();
module.exports = {
  port: process.env.PORT,
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  pgport: process.env.PGPORT
}