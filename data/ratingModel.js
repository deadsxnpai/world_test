const createRatingsTableQuery = `
    CREATE TABLE IF NOT EXISTS ratings (
        transcript_id INTEGER references transcripts(id) on delete cascade, 
        rating NUMERIC )
`;

module.exports = {
    createRatingsTableQuery,
};