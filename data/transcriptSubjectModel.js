const createTranscriptSubjectQuery = `
    CREATE TABLE IF NOT EXISTS transcripts_subjects (
        transcript_id integer references transcripts(id) on delete cascade,
        subject_id integer references subjects(id) on delete cascade
        );
`;

module.exports = {
    createTranscriptSubjectQuery,
};