const db = require('../db');
const criarFlashcard = (pergunta, resposta, baralhoId) => {
    const newFlashcard = {
        id: db.flashcards.length + 1,
        pergunta: pergunta,
        resposta: resposta,
        baralhoId: Number(baralhoId)
    };
    db.flashcards.push(newFlashcard);
    return newFlashcard;
};

module.exports = criarFlashcard;
