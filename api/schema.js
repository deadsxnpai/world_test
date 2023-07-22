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
    }

    type Subject {
        id: ID!
        subject_name: String
        grade: Float
        semester: String
    }

    type TranscriptSubjects {
        transcript_id:ID!
        subject_id:ID!
    }

    type Mutation {
        createStudent(first_name:String!, last_name:String!, email:String!, phone_number:String!, transcript_id:ID!, date_of_birth: Date, address:String): Student
        createSubject(subject_name:String!, grade:Float!, semester:String!): Subject
        createTransript(group_name:String!): Transcript
        unoinTranscriptsSubjects(transcript_id:ID!, subject_id: ID!): TranscriptSubjects
    }

    type Query {
        getAllStudents: [Student]
        getStudentById(id: ID!): Student
        getAllTranscripts: [Transcript]
        getTranscriptById(id: ID!): Transcript
        getAllSubjects: [Subject]
        getSubjectByTranscriptId(id: ID!): [Subject]
    }
`;

module.exports = typeDefs;
