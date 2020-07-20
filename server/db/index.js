const { Pool } = require('pg');
// host: 'ec2-13-59-201-123.us-east-2.compute.amazonaws.com',
const pool = new Pool({
  host: '/var/run/postgresql',
  user: 'postgres',
  max: 20,
  password: 'B4nO93V9mNF5',
  database: 'product_details',
});
pool
  .connect()
  .then(() => console.log('Connected after grays'))
  .catch((err) => console.error('connection error', err.stack));

module.exports = {
  query: (text, params) => pool.query(text, params),
};
