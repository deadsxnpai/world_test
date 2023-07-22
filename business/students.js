// src/business/students.js
const { query } = require('../data/db');
const { addStudent } = require('../data/studentModel');

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

async function createStudent(first_name, last_name, email, phone_number, transcript_id,date_of_birth,address) {
    return await addStudent(first_name, last_name, email, phone_number, transcript_id, date_of_birth,address);
}

module.exports = {
    getAllStudents,
    getStudentById,
    createStudent
};
