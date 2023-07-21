const app = require('./api/server');
const { createStudentsTableQuery, query } = require('./data/models');

async function initializeDatabase() {
    try {
      // Создаем таблицу, если она еще не существует
        await query(createStudentsTableQuery);
        console.log('Table "students" created successfully.');
  
      // Здесь также можно добавить другие инициализации базы данных, если необходимо
    } catch (error) {
        console.error('Error initializing database:', error.message);
        process.exit(1);
    }
}

initializeDatabase().then(() => {
    app
});
