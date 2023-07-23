const { addSubject, getSubjectByTranscript, getAll } = require('../data/subjectModel');

async function getAllSubjects() {
    return await getAll();
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
