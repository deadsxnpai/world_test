// src/data/models.js
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: '1111',
    host: 'localhost',
    port: 5432, 
    database: 'postgres',
    max: 20, // Максимальное количество соединений в пуле
    idleTimeoutMillis: 30000, // Время ожидания перед завершением неиспользуемого соединения
    connectionTimeoutMillis: 2000, // Время ожидания установки соединения
  });

// Определяем схему таблицы "students"
const createStudentsTableQuery = `
    CREATE TABLE IF NOT EXISTS students (
        id SERIAL PRIMARY KEY,
        name VARCHAR NOT NULL,
        scores INTEGER[]
        )
`;

// Функция для выполнения запросов к базе данных
async function query(text, params) {
    const result = await pool.query(text, params);
    return result;
}

module.exports = {
    createStudentsTableQuery,
    query,
};