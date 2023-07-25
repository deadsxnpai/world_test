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
        getRatingByTranscriptId: async (_, { id }, { broker }) => {
            return await broker.call("ratings.getRatingById", { id });
        },
    },

    Mutation: { 
        //Students
        createStudent: async (_, args, { broker }) => {
            const { input } = args;
            return await broker.call("students.createStudent", input);
        },
        updateStudent: async (_, args, { broker }) => {
            const { input } = args;
            return await broker.call("students.updateStudent", input);
        },
        deleteStudentById: async(_,{id}, { broker }) => {
            return await broker.call("students.deteleStudentById",{id});
        },
        //Subjects
        createSubject: async(_, args, { broker }) => {
            const { input } = args;
            return await broker.call("subjects.createSubject", input);
        },
        createFourSubject: async(_, args, { broker }) => {
            const { input } = args;
            return await broker.call("subjects.createFourSubjects", input);
        },
        deleteSubjectById: async(_,{id}, { broker }) => {
            return await broker.call("subjects.deteleSubjectById",{id});
        },
        //Transcripts
        createTransript: async(_, args, { broker }) => {
            const { input } = args;
            return await broker.call("transcripts.createTransript", input);
        },
        updateTranscript: async (_, args, { broker }) => {
            const { input } = args;
            return await broker.call("transcripts.updateTranscript", input);
        },
        deleteTranscriptById: async(_,{id}, { broker }) => {
            return await broker.call("transcripts.deteleTranscriptById",{id});
        },
        createTranscriptsSubjects: async(_, args, { broker }) => {
            const { input } = args;
            return await broker.call("transcripts.createTranscriptsSubjects", input);
        },
        //Ratings
        calculateRatingByTranscript: async(_,{transcript_id, semester}, { broker }) => {
            return await broker.call("ratings.calculateRatingByTranscript", {transcript_id, semester});
        },
    }
};

module.exports = resolvers;
