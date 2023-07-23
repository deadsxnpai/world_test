const { query } = require('../data/db');

async function getAllSubjects() {
    const { rows } = await query('SELECT * FROM subjects');
    return rows;
}

async function getSubjectByTranscriptId(id) {
    const { rows } = await query(`
    SELECT * FROM subjects join transcripts_subjects 
    on transcript_id =  $1 
    where subjects.id = transcripts_subjects.subject_id ;
    `, [id]);
    return rows;
}   

async function createSubject(subject_name, grade, semester) {
    const existingRecordQuery = 'SELECT * FROM subjects WHERE subject_name = $1 AND grade = $2 AND semester = $3';
    const { rows } = await query(existingRecordQuery, [subject_name, grade, semester]);

    if (rows.length === 0) {
        const insertQuery = 'INSERT INTO subjects (subject_name, grade, semester) VALUES ($1, $2, $3) RETURNING *';
        const insertValues = [subject_name, grade, semester];
        const { rows: insertedRows } = await query(insertQuery, insertValues);
        return insertedRows[0];
    } else {
        console.log('Record already exists');
        return rows[0];
    }
}

module.exports = {
    getAllSubjects,
    getSubjectByTranscriptId,
    createSubject
};
