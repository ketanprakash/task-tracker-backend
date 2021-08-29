const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT
const host = process.env.PGHOST
const user = process.env.PGUSER
const database = process.env.PGDATABASE
const password = process.env.PGPASSWORD
const pgport = process.env.PGPORT
module.exports = {
  port,
  host,
  user,
  database,
  password,
  pgport
}