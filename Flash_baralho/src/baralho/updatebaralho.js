const db = require('../db');

const atualizarBaralho = (id, titulo) => {
    const baralho = db.baralhos.find((el) => el.id === Number(id));
    if (!baralho) {
        return null;
    }
    baralho.titulo = titulo;
    return baralho;
};

module.exports = atualizarBaralho;
