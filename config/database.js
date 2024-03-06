//Database configuration
const pgp = require("pg-promise")();

// Connection details
const connection = "postgres://gabriel:postgres@localhost:5432/CRPostcodesAPI";
const db = pgp(connection);

module.exports = db;
