const db = require('../db');
const deletarBaralho = (id) => {
    if (!id || isNaN(id)) {
        return { error: "ID inválido" };
    }
    if (!db.baralhos || db.baralhos.length === 0) {
        return { error: "Nenhum Baralho disponível para deletar" };
    }

    // Encontrar o índice do flashcard a ser deletado
    const index = db.baralhos.findIndex((el) => el.id === Number(id));

    if (index === -1) {
        return { error: "Baralho não encontrado" };
    }


    const [deletarBaralho] = db.baralhos.splice(index, 1);

    return { message: "Baralho deletado com sucesso", deletarBaralho };
};
module.exports = deletarBaralho;