const { query } = require('../data/db');

module.exports = {
    name: 'subjects',
    actions: {
        async getAllSubjects() {
            const { rows } = await query('SELECT * FROM subjects');
            return rows;
        },
        async getSubjectsByTranscriptId(ctx) {
            const { id } = ctx.params
            const { rows } = await query(`
            SELECT * FROM subjects join transcripts_subjects 
            on transcript_id =  $1 
            where subjects.id = transcripts_subjects.subject_id ;
            `, [id]);
            return rows;
        },

        async getSubjectsBySemester(ctx) {
            const { rows } = await query(`
            SELECT * FROM subjects  
            where semester = $1 ;
            `, [ctx.params.semester]);
            return rows;
        },

        async createSubject(ctx) {
            const existingRecordQuery = 'SELECT * FROM subjects WHERE subject_name = $1 AND grade = $2 AND semester = $3';
            const { rows } = await query(existingRecordQuery, [ctx.params.subject_name, ctx.params.grade, ctx.params.semester]);
        
            if (rows.length === 0 && ctx.params.grade === 5) {
                for(let i = 0; i <= 3; i++){
                    const insertQuery = `
                        INSERT INTO subjects (subject_name, grade, semester) 
                        VALUES ($1, $2, $3) RETURNING *`;
                    const insertValues = [ctx.params.subject_name, ctx.params.grade - i, ctx.params.semester];
                    var { rows: insertedRows } = await query(insertQuery, insertValues);
                }
                return insertedRows[0];
            } else {
                console.log('Record already exists');
                return rows[0];
            }
        }, 
    }
};
