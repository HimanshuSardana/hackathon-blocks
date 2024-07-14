const sqlite = require('sqlite3').verbose()
const dbPath = "./test.db"

const createDBConnection = () => {
	const db = new sqlite.Database(dbPath, (err) => {
		if (err) {
			return console.err(err)
		}
	})
	return console.log("Connection established")
	createTable(db)
	return db;
}

const createTable = (db) => {
	db.exec(`
		CREATE TABLE users (
			ID INTEGER PRIMARY KEY AUTOINCREMENT,
			name VARCHAR(200) NOT NULL,

		)
		`)
	console.log("Table created successfully")
}

createDBConnection()
