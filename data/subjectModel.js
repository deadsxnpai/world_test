const { query } = require("./db");

const createSubjectsTableQuery = `
    CREATE TABLE IF NOT EXISTS subjects (
        id SERIAL PRIMARY KEY,
        subject_name VARCHAR(100),
        grade NUMERIC,
        semester VARCHAR(20)
        )
`;
async function addSubject(subject_name, grade, semester) {
    const insertQuery = 'INSERT INTO subjects (subject_name, grade, semester) VALUES ($1, $2, $3) RETURNING *';
    const values = [subject_name, grade, semester];
    const { rows } = await query(insertQuery, values);
    return rows[0];
}
module.exports = {
    createSubjectsTableQuery,
    addSubject
};