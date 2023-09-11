const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "revanche14",
  host: "localhost",
  port: 5432,
  database: "ma_table"
});

module.exports = pool;