const { query } = require('../data/db');

module.exports = {
    name: "students",
    actions: {
        async getAllStudents() {
            try {
                const { rows } = await query('SELECT * FROM students');
                return rows;
            } catch(error) {
                console.error(error)
            }
        },
        async getStudentById(ctx) {
            try {
                const { id } = ctx.params
                const { rows } = await query('SELECT * FROM students WHERE id = $1', [id]);
                return rows[0];
            } catch(error) {
                console.error(error)
            }
        },
        async createStudent(ctx) {
            try {
                const insertQuery = `
                    INSERT INTO students (first_name, last_name, date_of_birth, email, phone_number,address, transcript_id) 
                    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *
                `;
                const values = [ctx.params.first_name, ctx.params.last_name, ctx.params.date_of_birth, ctx.params.email, 
                    ctx.params.phone_number, ctx.params.address, ctx.params.transcript_id];
                const { rows } = await query(insertQuery, values);
                return rows[0];
        
            } catch(error) {
                console.error(error)
            }
        },

        async deteleStudentById(ctx) {
            const { id } = ctx.params
            try {
                await query('delete from students WHERE id = $1', [id]);
                return true
            } catch (error) {
                console.error(error)
            }
        },

        async updateStudent(ctx) {
            try {
                const querySelect = 'SELECT * FROM students WHERE id = $1';
                const valuesSelect = [ctx.params.id];
                const resultSelect = await query(querySelect, valuesSelect);
        
                if (resultSelect.rowCount === 0) {
                  throw new Error('Студент с указанным Id не найден.');
                }
        
                let setQuery = '';
                const valuesUpdate = [];
        
                Object.keys(ctx.params).forEach((key, index) => {
                  valuesUpdate.push(ctx.params[key]);
                  setQuery += `"${key}" = $${index + 1}, `;
                });
        
                setQuery = setQuery.slice(0, -2); // Удаляем последнюю запятую и пробел
        
                const queryUpdate = `
                  UPDATE students
                  SET ${setQuery}
                  WHERE id = ${ctx.params.id}
                  RETURNING *`;

                const resultUpdate = await query(queryUpdate, valuesUpdate);
                return resultUpdate.rows[0];
              } catch (error) {
                console.error('Ошибка при обновлении студента:', error);
                throw error; 
              }
        },
    },
};

