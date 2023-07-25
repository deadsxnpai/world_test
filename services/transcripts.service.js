const { query } = require('../data/db');

module.exports = {
    name: 'transcripts',
    actions: {
        // Получение всех зачеток
        async getAllTranscripts() {
            try {
                const { rows } = await query('SELECT * FROM transcripts');
                return rows;
            } catch(error) {
                console.error(error)
            }
        },
        // Получение зачетки по ID
        async getTranscriptById(ctx) {
            try {
                const { id } = ctx.params
                const { rows } = await query('SELECT * FROM transcripts WHERE id = $1;', [id]);
                return rows[0];
            } catch(error) {
                console.error(error)
            }  
        },
        async createTransript(ctx) {
            try {
                const insertQuery = 'INSERT INTO transcripts (group_name) VALUES ($1) RETURNING *';
                const values = [ctx.params.group_name];
                const { rows } = await query(insertQuery, values);
                return rows[0];
            } catch(error){
                console.error(error)
            }
        },
        async createTranscriptsSubjects(ctx) {
            const {transcript_id} = ctx.params
            const {group_name} = ctx.params
            const {subject_id} = ctx.params
            try {
                const existingRecordQueryTranscripts = 'SELECT * FROM transcripts WHERE id = $1';
                const valuesTranscripts = [transcript_id];  
                let resultSelect = await query(existingRecordQueryTranscripts, valuesTranscripts);
                if (resultSelect.rowCount === 0){
                    const insertQueryTranscripts = 'INSERT INTO transcripts (id, group_name) VALUES ($1, $2) RETURNING id';
                    const values = [transcript_id, group_name];    
                    await query(insertQueryTranscripts, values);
                } else {
                    console.log("Record already exists")
                }
                const existingRecordQuery = 'SELECT * FROM transcripts_subjects WHERE transcript_id = $1 AND subject_id = $2';
                let { rows } = await query(existingRecordQuery, [transcript_id, subject_id]);
                if (rows.length === 0) {
                    const insertQuery = 'INSERT INTO transcripts_subjects VALUES ($1, $2) RETURNING *';
                    const insertValues = [transcript_id, subject_id];
                    const { rows: insertedRows } = await query(insertQuery, insertValues);
                    return insertedRows[0];
                } else {
                    console.log('Record already exists');
                    return rows[0];
                }
            } catch(error){
                console.error(error)
            }
        },
        
        async updateTranscript(ctx) {
            try {
                const querySelect = 'SELECT * FROM transcripts WHERE id = $1';
                const valuesSelect = [ctx.params.id];
                const resultSelect = await query(querySelect, valuesSelect);
        
                if (resultSelect.rowCount === 0) {
                  throw new Error('Зачетка с указанным ID не найдена.');
                }
        
                let setQuery = '';
                const valuesUpdate = [];
        
                Object.keys(ctx.params).forEach((key, index) => {
                  valuesUpdate.push(ctx.params[key]);
                  setQuery += `"${key}" = $${index + 1}, `;
                });
        
                setQuery = setQuery.slice(0, -2); // Удаляем последнюю запятую и пробел
        
                const queryUpdate = `
                  UPDATE transcripts
                  SET ${setQuery}
                  WHERE id = ${ctx.params.id}
                  RETURNING *`;

                const resultUpdate = await query(queryUpdate, valuesUpdate);
                return resultUpdate.rows[0];
              } catch (error) {
                console.error('Ошибка при обновлении зачетки:', error);
                throw error; 
              }
        },
        
        async deteleTranscriptById(ctx) {
            const { id } = ctx.params
            try {
                await query('delete from transcripts WHERE id = $1', [id]);
                return true
            } catch (error) {
                console.error(error)
            }
        },
    }
};