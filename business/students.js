// src/business/students.js
const { query } = require('../data/models');

// Получение всех студентов
async function getAllStudents() {
    const { rows } = await query('SELECT * FROM students');
    return rows;
}

// Получение студента по ID
async function getStudentById(id) {
    const { rows } = await query('SELECT * FROM students WHERE id = $1', [id]);
    return rows[0];
}

// Получение рейтинга студентов
async function getStudentRatings() {
    const { rows } = await query(`
        SELECT * FROM students
        GROUP BY id, name
        ORDER BY scores DESC`,);
    return rows;
}

module.exports = {
    getAllStudents,
    getStudentById,
    getStudentRatings,
};
