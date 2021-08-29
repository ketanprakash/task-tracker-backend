const { user, host, database, password, pgport } = require('./config')
const { Client } = require('pg');

const client = new Client({ user, host, database, password, port: pgport });
client.connect();

module.exports.client = client;