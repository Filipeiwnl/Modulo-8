const db = require('../db');

const listarFlashcards = () => {

    if (!db.flashcards || db.flashcards.length === 0) {
        return { message: "Nenhum flashcard encontrado" };
    }

    return db.flashcards;
};

module.exports = listarFlashcards;
