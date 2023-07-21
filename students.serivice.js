const pool = require('./db')

const students = {
    name: 'students',
    actions: {
      async getStudents() {
        const query = 'SELECT * FROM students';
        const { rows } = await pool.query(query);
        return rows;
      },
      async getStudentById(ctx) {
        const query = 'SELECT * FROM students WHERE id = $1';
        const { rows } = await pool.query(query, [ctx.params.id]);
        return rows[0];
      },
      async getStudentRatings() {
        const query =
          'SELECT id, name, SUM(score) as total_score FROM students GROUP BY id, name ORDER BY total_score DESC';
        const { rows } = await pool.query(query);
        return rows;
      },
    },
  };

module.exports = students