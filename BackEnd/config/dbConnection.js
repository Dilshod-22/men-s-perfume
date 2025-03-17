const { Client } = require('pg');
const ConnectionDB = () => {
    const client = new Client({
        user: 'postgres',
        password: '0102',
        host: 'localhost',
        port: '5432',
        database: 'postgres',
    });
    client
	.connect()
	.then(() => {
		console.log('Connected to PostgreSQL database');
	})
	.catch((err) => {
		console.error('Error connecting to PostgreSQL database', err);
	});

}

module.exports = ConnectionDB;