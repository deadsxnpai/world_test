const { query } = require('../data/db');
const { addStudent, getStudent, getAll } = require('../data/studentModel');

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

async function createStudent(first_name, last_name, email, phone_number, transcript_id, date_of_birth, address) {
    const insertQuery = `
    INSERT INTO students (first_name, last_name, email, phone_number, transcript_id, date_of_birth, address) 
    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *
    `;
    const values = [first_name, last_name, email, phone_number, transcript_id, date_of_birth, address];
    const { rows } = await query(insertQuery, values);
    return rows[0];
}

module.exports = {
    getAllStudents,
    getStudentById,
    createStudent
};
