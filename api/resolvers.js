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
            return await broker.call("subjects.getAllSubjects");
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
        //Students
        createStudent: async (_, {first_name, last_name,date_of_birth, email, phone_number,address, transcript_id}, { broker }) => {
            return await broker.call("students.createStudent",{first_name, last_name,date_of_birth, email, phone_number, address, transcript_id});
        },
        updateStudent: async (_, {id, first_name, last_name,date_of_birth, email, phone_number,address}, { broker }) => {
            return await broker.call("students.updateStudent",{id, first_name, last_name, date_of_birth, email, phone_number, address});
        },
        deleteStudentById: async(_,{id}, { broker }) => {
            return await broker.call("students.deteleStudentById",{id});
        },
        //Subjects
        createSubject: async(_,{subject_name, grade, semester}, { broker }) => {
            return await broker.call("subjects.createSubject",{subject_name, grade, semester});
        },
        createFourSubject: async(_,{subject_name, grade, semester}, { broker }) => {
            return await broker.call("subjects.createFourSubjects",{subject_name, grade, semester});
        },
        deleteSubjectById: async(_,{id}, { broker }) => {
            return await broker.call("subjects.deteleSubjectById",{id});
        },
        //Transcripts
        createTransript: async(_,{group_name}, { broker }) => {
            return await broker.call("transcripts.createTransript",{group_name});
        },
        deleteTranscriptById: async(_,{id}, { broker }) => {
            return await broker.call("transcripts.deteleTranscriptById",{id});
        },
        createTranscriptsSubjects: async(_,{transcript_id, subject_id}, { broker }) => {
            return await broker.call("transcripts.createTranscriptsSubjects", {transcript_id, subject_id});
        },
        //Ratings
        calculateRatingByTranscript: async(_,{transcript_id, semester}, { broker }) => {
            return await broker.call("ratings.calculateRatingByTranscript", {transcript_id, semester});
        },
        
    }
};

module.exports = resolvers;
