// src/api/resolvers.js
const { getAllStudents, getStudentById, getStudentRatings } = require('../business/students');

const resolvers = {
    Query: {
        students: async () => {
            return getAllStudents();
        },
        student: async (_, { id }) => {
            return getStudentById(id);
        },
        studentRatings: async () => {
            return getStudentRatings();
        },
    },
};

module.exports = resolvers;
