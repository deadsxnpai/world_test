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
            return rows;
        },

        async calculateRatingByTranscript(ctx) {
            const {transcript_id} = ctx.params
            const {semester} = ctx.params

            var rating = 0

            const subjects = await this.broker.call('subjects.getSubjectsByTranscriptId', {id: transcript_id, semester:semester});
            const subjectsBySemester = await this.broker.call('subjects.getSubjectsBySemester', {semester:semester});

             // Calculate rating formula
            var count = 0;
            for(let key in subjectsBySemester) {
                count++;
            }

            const subjectsAmount = count * 5 / 4;
            console.log("Всего можно получить в семестре:", subjectsAmount)

            subjects.forEach(element => rating += parseInt(element.grade));

            try {
                console.log(rating)
                rating = parseFloat(rating * 100 / subjectsAmount);
                rating = Math.round(rating)
            } catch(error){
                console.error(error);
                rating = 0;
            }   
            const existingRecordQuery = 'SELECT * FROM ratings WHERE transcript_id = $1 and semester = $2';
            const { rows } = await query(existingRecordQuery, [transcript_id, semester]);
        
            if (rows.length > 0) {
                const updateQuery = 'UPDATE ratings SET rating = $1 WHERE transcript_id = $2 AND semester = $3 RETURNING *';
                const updateValues = [rating, transcript_id, semester];
                const { rows: updatedRows } = await query(updateQuery, updateValues);
                return updatedRows[0];
            } else {
                const insertQuery = 'INSERT INTO ratings (transcript_id, semester, rating) VALUES ($1, $2, $3) RETURNING *';
                const insertValues = [transcript_id, semester, rating];
                const { rows: insertedRows } = await query(insertQuery, insertValues);
                return insertedRows[0];
            }
        }  
    },    
};
