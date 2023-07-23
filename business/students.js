const { query } = require('../data/db');
const { addStudent, getStudent, getAll } = require('../data/studentModel');

// Получение всех студентов
async function getAllStudents() {
    return await getAll()
}

// Получение студента по ID
async function getStudentById(id) {
    return await getStudent(id);
}

async function createStudent(first_name, last_name, email, phone_number, transcript_id, date_of_birth, address) {
    return await addStudent(first_name, last_name, email, phone_number, transcript_id, date_of_birth, address);
}

module.exports = {
    getAllStudents,
    getStudentById,
    createStudent
};
