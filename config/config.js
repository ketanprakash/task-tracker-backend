const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  port: process.env.PORT || 8000,
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  pgport: process.env.PGPORT
}