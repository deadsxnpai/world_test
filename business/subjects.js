// src/business/students.js
const { query } = require('../data/models');

async function getAllSubjects() {
    const { rows } = await query('SELECT * FROM subjects');
    return rows;
}

async function getSubjectByTranscriptId(id) {
    const { rows } = await query('SELECT * FROM subjects WHERE id = ANY (SELECT unnest(subject_ids) FROM transcripts WHERE id = $1);', [id]);
    return rows;
}

module.exports = {
    getAllSubjects,
    getSubjectByTranscriptId,
};
