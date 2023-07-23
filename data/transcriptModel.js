const createTranscriptsTableQuery = `
    CREATE TABLE IF NOT EXISTS transcripts (
        id SERIAL PRIMARY KEY,   
        group_name VARCHAR(100)
        );
`;

module.exports = {
    createTranscriptsTableQuery,
};