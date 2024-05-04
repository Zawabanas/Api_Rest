const mysql = require ('mysql');

const config = {
    host: 'localhost',
    user: 'root',
    password: 'Abx5Cf9*qZ',
    database: 'restapi',
};

const pool = mysql.createPool(config);

module.exports = pool;