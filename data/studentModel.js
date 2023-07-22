// Определяем схему таблицы "students"
const createStudentsTableQuery = `
    CREATE TABLE IF NOT EXISTS students (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(50),
        last_name VARCHAR(50),
        date_of_birth DATE,
        email VARCHAR(100) UNIQUE,
        phone_number VARCHAR(20),
        address TEXT,
        transcript_id INTEGER REFERENCES transcripts(id) ON DELETE CASCADE
        )
`;

module.exports = {
    createStudentsTableQuery
};