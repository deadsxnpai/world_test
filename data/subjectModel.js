const createSubjectsTableQuery = `
    CREATE TABLE IF NOT EXISTS subjects (
        id SERIAL PRIMARY KEY,
        subject_name VARCHAR(100),
        grade NUMERIC,
        semester VARCHAR(20)
        )
`;

module.exports = {
    createSubjectsTableQuery
};