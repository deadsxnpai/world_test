const { gql } = require('apollo-server-express');

const typeDefs = gql`
    scalar Date

    type Student {
        id: ID!
        first_name: String
        last_name: String
        date_of_birth: Date
        email: String
        phone_number: String!
        address: String!
        transcript_id: ID!
    }
    input StudentInput {
        id:ID
        first_name: String
        last_name: String
        date_of_birth: Date
        email: String
        phone_number: String
        address: String
        transcript_id: ID
    }

    type Transcript {
        id: ID!
        group_name:String
    }
    input TranscriptInput {
        id:ID
        group_name:String
    }

    type Subject {
        id: ID!
        subject_name: String
        grade: Float
        semester: String
    }
    input SubjectInput {
        id:ID
        subject_name: String
        grade: Float
        semester: String
    }
    
    type Rating {
        transcript_id:ID!
        semester:String!
        rating: Float
    }

    type TranscriptSubjects{
        transcript_id:ID!
        subject_id:ID!
    }
    input TranscriptSubjectsInput{
        transcript_id:ID
        subject_id:ID
        group_name:String
    }

    type Mutation {
        createStudent(
            input: StudentInput!
        ): Student

        updateStudent(
            input: StudentInput!
        ): Student

        deleteStudentById(
            id:ID!
        ): Boolean

        createSubject(
            input: SubjectInput!
        ): Subject

        createFourSubject(
            input: SubjectInput!
        ): [Subject]

        deleteSubjectById(
            id:ID!
        ): Boolean

        createTransript(
            input: TranscriptInput! 
        ): Transcript

        updateTranscript(
            input: TranscriptInput! 
        ): Transcript

        deleteTranscriptById(
            id:ID!
        ): Boolean

        createTranscriptsSubjects(
            input:TranscriptSubjectsInput
        ): TranscriptSubjects

        calculateRatingByTranscript(
            transcript_id:ID!
            semester:String!
        ): Rating

        
    }

    type Query {
        getAllStudents: [Student]
        getStudentById(id: ID!): Student
        getAllTranscripts: [Transcript]
        getTranscriptById(id: ID!): Transcript
        getAllSubjects: [Subject]
        getSubjectsByTranscriptId(id: ID!, semester:String!): [Subject]
        getAllRatings: [Rating]
        getRatingByTranscriptId(id:ID!): [Rating]
    }
`;

module.exports = typeDefs;
