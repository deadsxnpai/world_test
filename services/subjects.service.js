const e = require('express');
const { query } = require('../data/db');

module.exports = {
    name: 'subjects',
    actions: {
        async getAllSubjects() {
            try {
                const { rows } = await query('SELECT * FROM subjects');
                return rows;
            } catch(error) {
                console.error(error)
            }
        },
        async getSubjectsByTranscriptId(ctx) {
            try {
                const { id } = ctx.params
                const {semester}= ctx.params
                const { rows } = await query(`
                    SELECT *
                    FROM subjects
                    JOIN transcripts_subjects ON subjects.id = transcripts_subjects.subject_id
                    WHERE transcripts_subjects.transcript_id = $1
                    AND subjects.semester = $2;
                `, [id, semester]);
                return rows;
            } catch(error) {
                console.error(error)
            }
        },

        async getSubjectsBySemester(ctx) {
            try {
                const { rows } = await query(`
                    SELECT * FROM subjects  
                    where semester = $1 ;
                `, [ctx.params.semester]);
                return rows;
            } catch(error) {
                console.error(error)
            }
            
        },
        async createSubject(ctx) {
            try{
                const existingRecordQuery = 'SELECT * FROM subjects WHERE subject_name = $1 AND grade = $2 AND semester = $3';
                const { rows } = await query(existingRecordQuery, [ctx.params.subject_name, ctx.params.grade, ctx.params.semester]);
        
                if (rows.length === 0 ) {
                    const insertQuery = `
                        INSERT INTO subjects (subject_name, grade, semester) 
                        VALUES ($1, $2, $3) RETURNING *`;
                    const insertValues = [ctx.params.subject_name, ctx.params.grade, ctx.params.semester];
                    var { rows: insertedRows } = await query(insertQuery, insertValues);                
                    return insertedRows[0];
                } else {
                    console.log('Record already exists');
                    return rows[0];
                }
            } catch(error) {
                console.error(error)
            }
            
        }, 
        async createFourSubjects(ctx) {
            try{
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
                    return insertedRows;
                } else {
                    console.log('Record already exists');
                    return rows;
                }
            } catch(error) {
                console.error(error)
            }
            
        }, 
        async deteleSubjectById(ctx) {
            const { id } = ctx.params
            try {
                await query('delete from subjects WHERE id = $1 cascade', [id]);
                return true
            } catch (error) {
                console.error(error)
            }
        },
    }
};
