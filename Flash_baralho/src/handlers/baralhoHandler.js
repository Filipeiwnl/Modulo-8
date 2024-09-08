const criarBaralho = require('../baralho/criarbaralho');
const atualizarBaralho = require('../baralho/updatebaralho');
const deletarBaralho = require('../baralho/deletebaralho');
const listarBaralhos = require('../baralho/listarbaralhos');

const criarBaralhoHandler = (req, res) => {
    const { titulo } = req.body;
    if (!titulo) {
        return res.status(400).json({ message: "O título é obrigatório" });
    }
    const newBaralho = criarBaralho(titulo);
    res.status(201).json({ message: "Baralho criado com sucesso", baralho: newBaralho });
};

const atualizarBaralhoHandler = (req, res) => {
    const { id } = req.params;
    const { titulo } = req.body;
    const baralhoAtualizado = atualizarBaralho(id, titulo);
    if (!baralhoAtualizado) {
        return res.status(404).json({ message: "Baralho não encontrado" });
    }
    res.status(200).json({ message: "Baralho atualizado", baralho: baralhoAtualizado });
};

const deletarBaralhoHandler = (req, res) => {
    const { id } = req.params;
    const baralhoDeletado = deletarBaralho(id);
    if (!baralhoDeletado) {
        return res.status(404).json({ message: "Baralho não encontrado" });
    }
    res.status(200).json({ message: "Baralho deletado", baralho: baralhoDeletado });
};

const listarBaralhosHandler = (req, res) => {
    const baralhos = listarBaralhos();
    res.status(200).json(baralhos);
};

module.exports = {
    criarBaralhoHandler,
    atualizarBaralhoHandler,
    deletarBaralhoHandler,
    listarBaralhosHandler
};
