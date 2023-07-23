const { query } = require('../data/db');

// Получение всех зачеток
async function getAllTranscripts() {
    const { rows } = await query('SELECT * FROM transcripts');
    return rows;
}
// Получение зачетки по ID
async function getTranscriptById(id) {
    const { rows } = await query('SELECT * FROM transcripts WHERE id = $1;', [id]);
    return rows[0];
}

async function createTransript(group_name) {
    const insertQuery = 'INSERT INTO transcripts (group_name) VALUES ($1) RETURNING *';
    const values = [group_name];
    const { rows } = await query(insertQuery, values);
    return rows[0];
}

async function unionTranscriptSubjects(transcript_id, subject_id) {
    const insertQuery = 'INSERT INTO transcripts_subjects VALUES ($1,$2) RETURNING *';
    const values = [transcript_id, subject_id];
    const { rows } = await query(insertQuery, values);
    return rows[0];
}

module.exports = {
    getAllTranscripts,
    getTranscriptById,
    unionTranscriptSubjects,
    createTransript
};