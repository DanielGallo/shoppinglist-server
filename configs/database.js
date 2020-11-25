const dotenv = require('dotenv');

dotenv.config();

const host = process.env.SHOPPING_LIST_DB_HOST || 'localhost';
const user = process.env.SHOPPING_LIST_DB_USER || 'root';
const password = process.env.SHOPPING_LIST_DB_PASS || 'password';
const database = process.env.SHOPPING_LIST_DB_DATABASE || 'shopping';
const dialect = 'mysql';

module.exports = { host, user, password, database, dialect };