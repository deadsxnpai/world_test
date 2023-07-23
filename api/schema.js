const { gql } = require('apollo-server-express');

const typeDefs = gql`
    scalar Date

    type Student {
        id: ID!
        first_name: String
        last_name: String
        date_of_birth: Date,
        email: String
        phone_number: String!
        address: String!
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
    
    type Rating {
        transcript_id:ID!
        rating: Float
    }

    type Mutation {
        createStudent(
            first_name:String!, 
            last_name:String!, 
            date_of_birth: Date!
            email:String!, 
            phone_number:String!, 
            address:String!
            transcript_id:ID!
            ): Student

        createSubject(
            subject_name:String!, 
            grade:Float!, 
            semester:String!
            ): Subject

        createTransript(
            group_name:String!
            ): Transcript


        calculateRatingByTranscript(
            transcript_id:ID!
        ): Rating
    }

    type Query {
        getAllStudents: [Student]
        getStudentById(id: ID!): Student
        getAllTranscripts: [Transcript]
        getTranscriptById(id: ID!): Transcript
        getAllSubjects: [Subject]
        getSubjectsByTranscriptId(id: ID!): [Subject]
        getAllRatings: [Rating]
        getRatingById(id:ID!): Rating
    }
`;

module.exports = typeDefs;
