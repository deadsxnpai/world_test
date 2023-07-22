// src/api/resolvers.js
const { getAllStudents, getStudentById } = require('../business/students');
const { getAllSubjects, getSubjectByTranscriptId } = require('../business/subjects');
const {getAllTranscripts, getTranscriptById} = require('../business/transcripts')

const resolvers = {
    Query: {
        students: async () => {
            return getAllStudents();
        },
        student: async (_, { id }) => {
            return getStudentById(id);
        },
        transcripts: async () => {
            return getAllTranscripts();
        },
        transcript: async (_, { id }) => {
            return getTranscriptById(id);
        },
        subjects: async () => {
            return getAllSubjects();
        },
        subject: async (_, { id }) => {
            return getSubjectByTranscriptId(id);
        },
    },
};

module.exports = resolvers;
