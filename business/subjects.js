// src/business/students.js
const { query } = require('../data/db');
const { addSubject } = require('../data/subjectModel');

async function getAllSubjects() {
    const { rows } = await query('SELECT * FROM subjects');
    return rows;
}

async function getSubjectByTranscriptId(id) {
    const { rows } = await query('SELECT * FROM subjects WHERE id = ANY (SELECT unnest(subject_ids) FROM transcripts WHERE id = $1);', [id]);
    return rows;
}

async function createSubject(subject_name, grade, semester) {
    return await addSubject(subject_name, grade, semester);
}

module.exports = {
    getAllSubjects,
    getSubjectByTranscriptId,
    createSubject
};
