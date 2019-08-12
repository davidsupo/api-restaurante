const pgp = require('pg-promise')();

const cn = {
  host: 'localhost',
  port: 5432,
  database: 'bdrestaurante',
  user: 'postgres',
  password: 'root'
};

module.exports = pgp(cn);