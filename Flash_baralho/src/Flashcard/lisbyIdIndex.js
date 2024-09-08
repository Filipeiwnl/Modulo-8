const db = require('../db');

const findFlashcardIndexById = (id) => {
    // Verifica se o ID é válido e se os flashcards estão disponíveis
    if (!id || isNaN(id)) {
        return { error: "ID inválido" };
    }

    if (!db.flashcards || db.flashcards.length === 0) {
        return { error: "Nenhum flashcard encontrado" };
    }

    const index = db.flashcards.findIndex(flashcard => flashcard.id === Number(id));

    if (index === -1) {
        return { error: "Flashcard não encontrado" };
    }

    return index;
};

module.exports = findFlashcardIndexById;
