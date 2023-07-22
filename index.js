const app = require('./api/server');
const { query } = require('./data/models');
const { createStudentsTableQuery } = require('./data/studentModel');
const { createSubjectsTableQuery } = require('./data/subjectModel');
const { createTranscriptsTableQuery } = require('./data/transcriptModel');

async function initializeDatabase() {
    try {
        // await query(createTriggerTranscripts);
        // console.log('Trigger" created successfully.');
        
        await query(createSubjectsTableQuery);
        console.log('Table "subjects" created successfully.');

        await query(createTranscriptsTableQuery);
        console.log('Table "transcritps" created successfully.');

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
