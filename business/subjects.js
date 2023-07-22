// src/business/students.js
const { query } = require('../data/db');
const { addSubject, getSubjectByTranscript } = require('../data/subjectModel');

async function getAllSubjects() {
    const { rows } = await query('SELECT * FROM subjects');
    return rows;
}

async function getSubjectByTranscriptId(id) {
    return await getSubjectByTranscript(id);
}   

async function createSubject(subject_name, grade, semester) {
    return await addSubject(subject_name, grade, semester);
}

module.exports = {
    getAllSubjects,
    getSubjectByTranscriptId,
    createSubject
};
