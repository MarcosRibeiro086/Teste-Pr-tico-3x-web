const express = require('express');
const router = express.Router();
const Contatos = require('../models/Contatos');
const { handleNotFound, handleValidationError, handleServerError } = require('../handlers/ContatoHandlers');

router.use(express.json());

// Função para validar o contato
const validateContato = (nome, telefone) => {
    if (!nome) {
        throw new Error('Nome é um campo obrigatório!!');
    }
    if (!telefone) {
        throw new Error('Telefone é um campo obrigatório!!');
    }
};

//Adição de novos Contatos
router.post('/', async (req, res) => {
    const { nome, telefone } = req.body;

    try {
        validateContato(nome, telefone);

        const existingContato = await Contatos.findOne({ telefone });
        if (existingContato) {
            return res.status(422).json({ error: 'Telefone já cadastrado' });
        }

        await Contatos.create({ nome, telefone });
        res.status(201).json({ message: 'Contato adicionado com sucesso' });
    } catch (error) {
        handleValidationError(res, error);
    }
});

//Recuperar todos os contatos
router.get('/', async (req, res) => {
    try {
        const contatos = await Contatos.find();
        res.status(200).json(contatos);
    } catch (error) {
        handleServerError(res, error);
    }
});

//Recuperar contato por id
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const contato = await Contatos.findOne({ _id: id });
        if (!contato) {
            return handleNotFound(res);
        }
        res.status(200).json(contato);
    } catch (error) {
        handleServerError(res, error);
    }
});

//Atualizar contato por id
router.patch('/:id', async (req, res) => {
    const id = req.params.id;
    const { nome, telefone } = req.body;
    try {
        validateContato(nome, telefone);

        const updatedContato = await Contatos.findByIdAndUpdate(id, { nome, telefone }, { new: true });
        if (!updatedContato) {
            return handleNotFound(res);
        }
        res.status(200).json(updatedContato);
    } catch (error) {
        handleValidationError(res, error);
    }
});

//Deletar contato por id
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const contato = await Contatos.findByIdAndDelete(id);
        if (!contato) {
            return handleNotFound(res);
        }
        res.status(200).json({ message: 'Contato deletado com sucesso!' });
    } catch (error) {
        handleServerError(res, error);
    }
});

module.exports = router;
