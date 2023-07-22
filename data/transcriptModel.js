const createTranscriptsTableQuery = `
    CREATE TABLE IF NOT EXISTS transcripts (
        id SERIAL PRIMARY KEY,   
        group_name VARCHAR(100),
        subject_ids INTEGER[]
        );
`;

const createTriggerTranscripts =`
        CREATE OR REPLACE FUNCTION update_subjects_ids()
        RETURNS TRIGGER AS
        $$
        BEGIN
        IF NEW.subject_ids IS NOT NULL THEN
            NEW.subject_ids := ARRAY(SELECT DISTINCT unnest(NEW.subject_ids));
        END IF;
        RETURN NEW;
        END;
        $$
        LANGUAGE plpgsql;
        CREATE TRIGGER update_subject_ids_trigger
        BEFORE INSERT OR UPDATE ON transcripts
        FOR EACH ROW
        EXECUTE FUNCTION update_subjects_ids();
`;

module.exports = {
    createTranscriptsTableQuery,
    createTriggerTranscripts
};