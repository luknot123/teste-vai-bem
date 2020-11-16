const { Pool } = require('pg');

class Database {
    constructor() {

    }
    static connect(){
        const pool = new Pool({
            user: 'postgres',
            host: 'localhost',
            database: 'db_gestor_estabelecimento',
            password: 'postgres',
            port: 5435,
            max: 20,
            idleTimeoutMillis: 30000,
            connectionTimeoutMillis: 2000,
        });
        return pool;
    }
    
}
module.exports = Database;