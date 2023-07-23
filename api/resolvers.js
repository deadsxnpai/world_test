const { calculateRatingByTranscript } = require('../services/ratings.service');

const resolvers = {
    Query: {
        // Students 
        getAllStudents: async (_, __, { broker }) => {
            return await broker.call("students.getAllStudents");
        },
        getStudentById: async (_, { id }, { broker }) => {
            return await broker.call("students.getStudentById", { id });
        },

        // Transcriptions
        getAllTranscripts: async (_, __, { broker }) => {
            return await broker.call("transcripts.getAllTranscripts");
        },
        getTranscriptById: async (_, { id }, { broker }) => {
            return await broker.call("transcripts.getTranscriptById", { id });
        },

        // Subjects
        getAllSubjects: async (_, __, { broker }) => {
            return await broker.call("subjects.getAllSubject");
        },
        getSubjectsByTranscriptId: async (_, { id }, { broker }) => {
            return await broker.call("subjects.getSubjectsByTranscriptId", { id });
        },

        // Ratings
        getAllRatings: async (_, __, { broker }) => {
            return await broker.call("ratings.getAllRatings");
        },
        getRatingById: async (_, { id }, { broker }) => {
            return await broker.call("ratings.getRatingById", { id });
        },
    },

    Mutation: { 
        createStudent: async (_, {first_name, last_name,date_of_birth, email, phone_number,address, transcript_id}, { broker }) => {
            return await broker.call("students.createStudent",{first_name, last_name,date_of_birth, email, phone_number, address, transcript_id});
        },
        createSubject: async(_,{subject_name, grade, semester}, { broker }) => {
            return await broker.call("subjects.createSubject",{subject_name, grade, semester});
        },

        createTransript: async(_,{group_name}, { broker }) => {
            return await broker.call("transcripts.createTransript",{group_name});
        },
        createTranscriptsSubjects: async(_,{transcript_id, subject_id}, { broker }) => {
            return await broker.call("transcripts.createTranscriptsSubjects", {transcript_id, subject_id});
        },
        calculateRatingByTranscript: async(_,{transcript_id}, { broker }) => {
            return await broker.call("ratings.calculateRatingByTranscript", {transcript_id, broker});
        },
        
    }
};

module.exports = resolvers;
