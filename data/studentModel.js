const createStudentsTableQuery = `
    CREATE TABLE IF NOT EXISTS students (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(50),
        last_name VARCHAR(50),
        date_of_birth DATE,
        email VARCHAR(100) UNIQUE,
        phone_number VARCHAR(20),
        address TEXT,
        transcript_id INTEGER REFERENCES transcripts(id) ON DELETE CASCADE
        );
    `;
const AddConstraintQuery = `
        ALTER TABLE students
        ADD CONSTRAINT uq_students_transcript_id UNIQUE (transcript_id);
    `;

const checkExistsConstraintQuery = `
        SELECT EXISTS (
        SELECT 1
        FROM pg_constraint
        WHERE conname = 'uq_students_transcript_id'
        AND conrelid = 'students'::regclass);
    `;
module.exports = {
    createStudentsTableQuery,
    AddConstraintQuery,
    checkExistsConstraintQuery
};