const criarFlashcard = require('../Flashcard/criarFlashcard')
const atualizarFlashcard = require('../Flashcard/atualizarFlashcard');
const deletarFlashcard = require('../Flashcard/deletarFlashcard');
const listarFlashcards = require('../Flashcard/listFlahscard');
const findFlashCard = require('../Flashcard/findFlashCard');
const findforqFlahscard = require('../Flashcard/findforqFlahscard');

const criarFlashcardHandler = (req, res) => {
    const { pergunta, resposta, baralhoId } = req.body;
    const newFlashcard = criarFlashcard(pergunta, resposta, baralhoId);
    res.status(201).json({ message: "Flashcard criado com sucesso", flashcard: newFlashcard });
};

const atualizarFlashcardHandler = (req, res) => {
    const { id } = req.params;
    const { pergunta, resposta } = req.body;
    const flashcardAtualizado = atualizarFlashcard(id, pergunta, resposta);
    if (!flashcardAtualizado) {
        return res.status(404).json({ message: "Flashcard não encontrado" });
    }
    res.status(200).json({ message: "Flashcard atualizado", flashcard: flashcardAtualizado });
};

const deletarFlashcardHandler = (req, res) => {
    const { id } = req.params;
    const flashcardDeletado = deletarFlashcard(id);
    if (!flashcardDeletado) {
        return res.status(404).json({ message: "Flashcard não encontrado" });
    }
    res.status(200).json({ message: "Flashcard deletado", flashcard: flashcardDeletado });
};

const listarFlashcardsHandler = (req, res) => {
    const flashcards = listarFlashcards();
    res.status(200).json(flashcards);
};

const findFlashCardHandler = (req, res) => {
    const { baralhoId } = req.params;
    const flashcards = findFlashCard(baralhoId);
    res.status(200).json(flashcards);
};

const findforqFlahscardHandler = (req, res) => {
    const { pergunta } = req.query;
    const flashcards = findforqFlahscard(pergunta);
    res.status(200).json(flashcards);
};

module.exports = {
    criarFlashcardHandler,
    atualizarFlashcardHandler,
    deletarFlashcardHandler,
    listarFlashcardsHandler,
    findFlashCardHandler,
    findforqFlahscardHandler
};
