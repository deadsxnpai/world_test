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
    }
};