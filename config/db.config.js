const dbConfig = {
    database: {
        host: process.env.DB1_HOST, // Name of the MySQL Docker service
        user: process.env.DB1_USER,
        password: process.env.DB1_PASSWORD,
        database: process.env.DB1_NAME
    }
};

export default dbConfig;
