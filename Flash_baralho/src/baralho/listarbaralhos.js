const db = require('../db');
const listarBaralhos = () => {

    if (!db.baralhos || db.baralhos.length === 0) {
        return { message: "Nenhum Baralho encontrado" };
    }

    return db.baralhos;
};

module.exports = listarBaralhos;

