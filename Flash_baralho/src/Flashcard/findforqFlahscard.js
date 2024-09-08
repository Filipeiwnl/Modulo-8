const db = require('../db');

const buscarFlashcardsPorPergunta = (pergunta) => {
    return db.flashcards.filter(flashcard => flashcard.pergunta.includes(pergunta));
};

module.exports = buscarFlashcardsPorPergunta;
