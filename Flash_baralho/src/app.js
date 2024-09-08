const express = require('express');
const {
    criarBaralhoHandler,
    atualizarBaralhoHandler,
    deletarBaralhoHandler,
    listarBaralhosHandler
} = require('./handlers/baralhoHandler');

const {
    criarFlashcardHandler,
    atualizarFlashcardHandler,
    deletarFlashcardHandler,
    listarFlashcardsHandler,
    findFlashCardHandler,
    findforqFlahscardHandler
} = require('./handlers/flashcardHandler');

const app = express();

app.use(express.json());

// Rotas de Baralho
app.post('/baralho', criarBaralhoHandler);
app.put('/baralho/:id', atualizarBaralhoHandler);
app.delete('/baralho/:id', deletarBaralhoHandler);
app.get('/baralho', listarBaralhosHandler);

// Rotas de Flashcard
app.post('/flashcard', criarFlashcardHandler);
app.put('/flashcard/:id', atualizarFlashcardHandler);
app.delete('/flashcard/:id', deletarFlashcardHandler);
app.get('/flashcard', listarFlashcardsHandler);
app.get('/flashcard/baralho/:baralhoId', findFlashCardHandler);
app.get('/flashcard/busca', findforqFlahscardHandler);


// Página inicial
app.get('/', (req, res) => {
    res.send('API is working');
});

app.listen(3003, () => {
    console.log("App listening at http://localhost:3003");
});
