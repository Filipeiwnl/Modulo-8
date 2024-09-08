const db = require('../db');
const criarBaralho = (titulo) => {
    const newBaralho = {
        id: db.baralhos.length + 1,
        titulo: titulo
    };
    db.baralhos.push(newBaralho);
    return newBaralho;
};

module.exports = criarBaralho;
