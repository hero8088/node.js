const pg = require('pg');

const config = {
  host: 'localhost',
  // Do not hard code your username and password.
  // Consider using Node environment variables.
  user: 'hero8088',
  password: '8088',
  database: 'mydb',
  port: 5432
};

const client = new pg.Client(config);

client.connect(err => {
  if (err) throw err;
  else {
    console.log("connenct success!!!");
    module.exports = client;
  }
});