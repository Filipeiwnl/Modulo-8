const db = require('../db');

const buscarFlashcardsPorBaralho = (baralhoId) => {
    return db.flashcards.filter(flashcard => flashcard.baralhoId === Number(baralhoId));
};

module.exports = buscarFlashcardsPorBaralho;
