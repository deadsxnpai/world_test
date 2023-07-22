const { query } = require("./db");

const createTranscriptsTableQuery = `
    CREATE TABLE IF NOT EXISTS transcripts (
        id SERIAL PRIMARY KEY,   
        group_name VARCHAR(100)
        );
`;

async function addTranscript(group_name) {
    const insertQuery = 'INSERT INTO transcripts (group_name) VALUES ($1) RETURNING *';
    const values = [group_name];
    const { rows } = await query(insertQuery, values);
    return rows[0];
}
module.exports = {
    createTranscriptsTableQuery,
    addTranscript
};