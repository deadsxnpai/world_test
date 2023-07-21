// src/api/schema.js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Student {
        id: ID!
        name: String!
        scores: [Int]!
    }

    type Query {
        students: [Student]
        student(id: ID!): Student
        studentRatings: [Student]
    }
`;

module.exports = typeDefs;
