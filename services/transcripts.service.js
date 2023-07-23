const { query } = require('../data/db');

module.exports = {
    
    name: 'transcripts',
    actions: {
        // Получение всех зачеток
        async getAllTranscripts() {
            const { rows } = await query('SELECT * FROM transcripts');
            return rows;
        },
        // Получение зачетки по ID
        async getTranscriptById(ctx) {
            const { id } = ctx.params
            const { rows } = await query('SELECT * FROM transcripts WHERE id = $1;', [id]);
            return rows[0];
        },
        async createTransript(ctx) {
            const insertQuery = 'INSERT INTO transcripts (group_name) VALUES ($1) RETURNING *';
            const values = [ctx.params.group_name];
            const { rows } = await query(insertQuery, values);
            return rows[0];
        },
        async createTranscriptsSubjects(ctx) {
            const existingRecordQuery = 'SELECT * FROM transcripts_subjects WHERE transcript_id = $1 AND subject_id = $2';
            const { rows } = await query(existingRecordQuery, [ctx.params.transcript_id, ctx.params.subject_id]);
            if (rows.length === 0) {
                const insertQuery = 'INSERT INTO transcripts_subjects VALUES ($1, $2) RETURNING *';
                const insertValues = [ctx.params.transcript_id, ctx.params.subject_id];
                const { rows: insertedRows } = await query(insertQuery, insertValues);
                return insertedRows[0];
            } else {
                console.log('Record already exists');
                return rows[0];
            }
        },
    }
};