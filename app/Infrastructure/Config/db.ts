require('dotenv').config();

const db = {
    mongo: {
        host: process.env.MONGO_DB_HOST,
        port: process.env.MONGO_DB_PORT,
        db: process.env.MONGO_DB_DATABASE,
        user: process.env.MONGO_DB_USERNAME,
        password: process.env.MONGO_DB_PASSWORD
    }

};

export default db;
