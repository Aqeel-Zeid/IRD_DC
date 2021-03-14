let sqliteString = `
    
    CREATE TABLE IF NOT EXISTS questionaire (
        qid TEXT PRIMARY KEY,
        name TEXT UNIQUE NOT NULL,
        description TEXT,
        date TEXT 
    );`

module.exports.sqliteString =  sqliteString;