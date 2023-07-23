// src/api/resolvers.js
const { getAllRatings, getRatingById, calculateRatingByTranscript } = require('../business/ratings');
const { getAllStudents, getStudentById, createStudent } = require('../business/students');
const { getAllSubjects, getSubjectByTranscriptId, createSubject } = require('../business/subjects');
const { getAllTranscripts, getTranscriptById, createTransript, unionTranscriptSubjects } = require('../business/transcripts')

const resolvers = {
    Query: {
        getAllStudents: async () => {
            return getAllStudents();
        },
        getStudentById: async (_, { id }) => {
            return getStudentById(id);
        },
        getAllTranscripts: async () => {
            return getAllTranscripts();
        },
        getTranscriptById: async (_, { id }) => {
            return getTranscriptById(id);
        },
        getAllSubjects: async () => {
            return getAllSubjects();
        },
        getSubjectsByTranscriptId: async (_, { id }) => {
            return getSubjectByTranscriptId(id);
        },
        getAllRarings: async () => {
            return getAllRatings();
        },
        getRatingById: async (_, { id }) => {
            return getRatingById(id);
        },
    },
    Mutation: { 
        createStudent: async (_, { first_name, last_name, email, phone_number, transcript_id,date_of_birth,address}) => {
            // Добавить валидацию данных
            return await createStudent(first_name, last_name, email, phone_number, transcript_id, date_of_birth, address);
        },
        createSubject: async(_,{subject_name, grade, semester}) => {
            // Добавить валидацию данных
            return await createSubject(subject_name, grade, semester);
        },
        createTransript: async(_,{group_name}) => {
            // Добавить валидацию данных
            return await createTransript(group_name);
        },
        unoinTranscriptsSubjects: async(_,{transcript_id, subject_id}) => {
            // Добавить валидацию данных
            return await unionTranscriptSubjects(transcript_id, subject_id);
        },
        calculateRatingByTranscript: async(_,{transcript_id}) => {
            // Добавить валидацию данных
            return await calculateRatingByTranscript(transcript_id);
        },
      },
};

module.exports = resolvers;
