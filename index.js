const app = require('./api/server');
const { query } = require('./data/db');
const { createRatingsTableQuery } = require('./data/ratingModel');
const { createStudentsTableQuery } = require('./data/studentModel');
const { createSubjectsTableQuery } = require('./data/subjectModel');
const { createTranscriptsTableQuery } = require('./data/transcriptModel');
const { createTranscriptSubjectQuery } = require('./data/transcriptSubjectModel');

async function initializeDatabase() {
    try {
        
        await query(createSubjectsTableQuery);
        console.log('Table "subjects" created successfully.');

        await query(createTranscriptsTableQuery);
        console.log('Table "transcritps" created successfully.');

        await query(createTranscriptSubjectQuery);
        console.log('Table "transcripts_subjects" created successfully.');

        await query(createStudentsTableQuery);
        console.log('Table "students" created successfully.');

        await query(createRatingsTableQuery);
        console.log('Table "ratings" created successfully.');
        
      // Здесь также можно добавить другие инициализации базы данных, если необходимо
    } catch (error) {
        console.error('Error initializing database:', error.message);
        process.exit(1);
    }
}

initializeDatabase().then(() => {
    app
});
