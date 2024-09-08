const readline = require('readline');

// Importações mantendo os caminhos originais
const criarBaralho = require('./baralho/criarbaralho');
const listarBaralhos = require('./baralho/listarbaralhos');
const atualizarBaralho = require('./baralho/updatebaralho');
const deletarBaralho = require('./baralho/deletebaralho');

const criarFlashcard = require('./Flashcard/criarFlashcard');
const listarFlashcards = require('./Flashcard/listFlahscard');
const atualizarFlashcard = require('./Flashcard/atualizarFlashcard');
const deletarFlashcard = require('./Flashcard/deletarFlashcard');
const buscarFlashcardsPorPergunta = require('./Flashcard/findforqFlahscard');
const buscarFlashcardsPorBaralho = require('./Flashcard/findFlashCard');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Exibir o menu no terminal
const exibirMenu = () => {
    console.log(`
1. Criar Baralho
2. Criar Flashcard
3. Listar Baralhos
4. Listar Flashcards
5. Listar Flashcards por Baralho
6. Atualizar Baralho
7. Atualizar Flashcard
8. Deletar Baralho
9. Deletar Flashcard
10. Buscar Flashcards por Pergunta
11. Buscar Flashcards por Baralho
0. Sair
    `);

    rl.question('Escolha uma opção: ', (opcao) => {
        handleMenuOption(opcao);
    });
};

// Função para manipular as opções do menu
const handleMenuOption = (opcao) => {
    switch (opcao) {
        case '1':
            rl.question('Digite o título do novo baralho: ', (titulo) => {
                const newBaralho = criarBaralho(titulo);
                console.log('Baralho criado:', newBaralho);
                exibirMenu();
            });
            break;

        case '2':
            rl.question('Digite a pergunta do flashcard: ', (pergunta) => {
                rl.question('Digite a resposta do flashcard: ', (resposta) => {
                    rl.question('Digite o ID do baralho: ', (baralhoId) => {
                        const flashcard = criarFlashcard(pergunta, resposta, baralhoId);
                        console.log('Flashcard criado:', flashcard);
                        exibirMenu();
                    });
                });
            });
            break;

        case '3':
            const baralhos = listarBaralhos();
            console.log('Baralhos:', baralhos);
            exibirMenu();
            break;

        case '4':
            const flashcards = listarFlashcards();
            console.log('Flashcards:', flashcards);
            exibirMenu();
            break;

        case '5':
            rl.question('Digite o ID do baralho: ', (baralhoId) => {
                const flashcardsPorBaralho = buscarFlashcardsPorBaralho(baralhoId);
                console.log('Flashcards:', flashcardsPorBaralho);
                exibirMenu();
            });
            break;

        case '6':
            rl.question('Digite o ID do baralho para atualizar: ', (id) => {
                rl.question('Digite o novo título do baralho: ', (novoTitulo) => {
                    const baralhoAtualizado = atualizarBaralho(id, novoTitulo);
                    console.log('Baralho atualizado:', baralhoAtualizado);
                    exibirMenu();
                });
            });
            break;

        case '7':
            rl.question('Digite o ID do flashcard para atualizar: ', (id) => {
                rl.question('Digite a nova pergunta: ', (novaPergunta) => {
                    rl.question('Digite a nova resposta: ', (novaResposta) => {
                        const flashcardAtualizado = atualizarFlashcard(id, novaPergunta, novaResposta);
                        console.log('Flashcard atualizado:', flashcardAtualizado);
                        exibirMenu();
                    });
                });
            });
            break;

        case '8':
            rl.question('Digite o ID do baralho para deletar: ', (id) => {
                const baralhoDeletado = deletarBaralho(id);
                console.log('Baralho deletado:', baralhoDeletado);
                exibirMenu();
            });
            break;

        case '9':
            rl.question('Digite o ID do flashcard para deletar: ', (id) => {
                const flashcardDeletado = deletarFlashcard(id);
                console.log('Flashcard deletado:', flashcardDeletado);
                exibirMenu();
            });
            break;

        case '10':
            rl.question('Digite a pergunta para buscar: ', (pergunta) => {
                const flashcardsEncontrados = buscarFlashcardsPorPergunta(pergunta);
                console.log('Flashcards encontrados:', flashcardsEncontrados);
                exibirMenu();
            });
            break;

        case '11':
            rl.question('Digite o ID do baralho para buscar flashcards: ', (baralhoId) => {
                const flashcardsPorBaralho = buscarFlashcardsPorBaralho(baralhoId);
                console.log('Flashcards por baralho:', flashcardsPorBaralho);
                exibirMenu();
            });
            break;

        case '0':
            console.log('Saindo...');
            rl.close();
            break;

        default:
            console.log('Opção inválida.');
            exibirMenu();
            break;
    }
};

exibirMenu();
