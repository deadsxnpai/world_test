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
async function unionTables(transcript_id, subject_id){
    const insertQuery = 'INSERT INTO transcripts_subjects VALUES ($1,$2) RETURNING *';
    const values = [transcript_id, subject_id];
    const { rows } = await query(insertQuery, values);
    return rows[0];
}
module.exports = {
    createTranscriptsTableQuery,
    unionTables,
    addTranscript
};