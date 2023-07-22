const { query } = require('../data/db');
const { addTranscript } = require('../data/transcriptModel');

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
    return await addTranscript(group_name);
}


module.exports = {
    getAllTranscripts,
    getTranscriptById,
    createTransript
};