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
    },
};

