const createRatingsTableQuery = `
    CREATE TABLE IF NOT EXISTS ratings (
        transcript_id INTEGER references transcripts(id) on delete cascade, 
        semester VARCHAR(10),
        rating double precision 
    )
`;

module.exports = {
    createRatingsTableQuery,
};