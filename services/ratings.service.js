const { query } = require("../data/db");
 
module.exports = {
    name: 'ratings',
    actions: {
        async getAllRatings() {
            const { rows } = await query('SELECT * FROM ratings');
            return rows;
        },

        async getRatingById(ctx) {
            const { id } = ctx.params
            const { rows } = await query(`
            SELECT * FROM ratings WHERE transcript_id = $1;
            `, [id]);
            return rows[0];
        },

        async calculateRatingByTranscript(ctx) {
            const {transcript_id} = ctx.params
            var rating = 0
            const subjects = await this.broker.call('subjects.getSubjectsByTranscriptId', {id:transcript_id});
            subjects.forEach(element => rating += parseInt(element.grade));
            rating = parseFloat(rating / subjects.length);
            rating = rating || 0;
            const existingRecordQuery = 'SELECT * FROM ratings WHERE transcript_id = $1';
            const { rows } = await query(existingRecordQuery, [transcript_id]);
        
            if (rows.length > 0) {
                const updateQuery = 'UPDATE ratings SET rating = $1 WHERE transcript_id = $2 RETURNING *';
                const updateValues = [rating, transcript_id];
                const { rows: updatedRows } = await query(updateQuery, updateValues);
                return updatedRows[0];
            } else {
                const insertQuery = 'INSERT INTO ratings (transcript_id, rating) VALUES ($1, $2) RETURNING *';
                const insertValues = [transcript_id, rating];
                const { rows: insertedRows } = await query(insertQuery, insertValues);
                return insertedRows[0];
            }
        }  
    },    
};
