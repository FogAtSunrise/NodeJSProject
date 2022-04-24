let Pool = require('pg').Pool

const pool = new Pool({
        user: "postgres",
        password: "123",
        host: "localhost",
        post: 5432,
        database: "postgres"
    }
)

module.exports = pool
