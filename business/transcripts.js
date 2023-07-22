const { query } = require('../data/models');

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

module.exports = {
    getAllTranscripts,
    getTranscriptById,
};