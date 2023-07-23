const { query } = require("./db");

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

async function getAll(){
    const { rows } = await query('SELECT * FROM students');
    return rows;
}

async function getStudent(id){
    const { rows } = await query('SELECT * FROM students WHERE id = $1', [id]);
    return rows[0];
}

async function addStudent(first_name, last_name, email, phone_number, transcript_id, date_of_birth, address) {
    const insertQuery = `
        INSERT INTO students (first_name, last_name, email, phone_number, transcript_id, date_of_birth, address) 
        VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *
    `;
    const values = [first_name, last_name, email, phone_number, transcript_id, date_of_birth, address];
    const { rows } = await query(insertQuery, values);
    return rows[0];
}

module.exports = {
    createStudentsTableQuery,
    getAll,
    getStudent,
    addStudent
};