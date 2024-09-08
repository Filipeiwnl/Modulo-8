const db = require('../db');

const deletarFlashcard = (id) => {

    if (!id || isNaN(id)) {
        return { error: "ID inválido" };
    }


    if (!db.flashcards || db.flashcards.length === 0) {
        return { error: "Nenhum flashcard disponível para deletar" };
    }

    // Encontrar o índice do flashcard a ser deletado
    const index = db.flashcards.findIndex((el) => el.id === Number(id));

    if (index === -1) {
        return { error: "Flashcard não encontrado" };
    }


    const [deletedFlashcard] = db.flashcards.splice(index, 1);

    return { message: "Flashcard deletado com sucesso", deletedFlashcard };
};

module.exports = deletarFlashcard;
