// src/api/schema.js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
    scalar Date

    type Student {
        id: ID!
        first_name: String
        last_name: String
        date_of_birth: Date,
        email: String
        phone_number: String
        address: String
        transcript_id: ID!
    }

    type Transcript {
        id: ID!
        group_name:String
        subject_ids:[ID]
    }

    type Subject {
        id: ID!
        subject_name: String
        grade: Float
        semester: String
    }

    type Query {
        students: [Student]
        student(id: ID!): Student

        transcripts: [Transcript]
        transcript(id: ID!): Transcript
      
        subjects: [Subject]
        subject(id: ID!): [Subject]
        
    }
`;

module.exports = typeDefs;
