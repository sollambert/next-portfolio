import { Pool } from "pg";

let pool;

if (process.env.DATABASE_URL) {
    pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });
}

else {
    pool = new Pool({
        host: 'localhost',
        port: 5432,
        database: 'portfolio',
        user: process.env.SQL_USER,
        password: process.env.SQL_PASSWORD
    });
}

export default pool;