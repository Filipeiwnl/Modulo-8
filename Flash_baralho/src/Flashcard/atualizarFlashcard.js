const db = require('../db');

const atualizarFlashcard = (id, pergunta, resposta) => {
    const flashcard = db.flashcards.find((el) => el.id === Number(id));
    if (!flashcard) {
        return null;
    }
    flashcard.pergunta = pergunta;
    flashcard.resposta = resposta;
    return flashcard;
};

module.exports = atualizarFlashcard;
