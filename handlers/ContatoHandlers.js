// Handler para contatos não encontrados
const handleNotFound = (res) => {
    res.status(422).json({ error: 'Contato não encontrado' });
};

// Handler para erros de validação
const handleValidationError = (res, error) => {
    res.status(422).json({ error: error.message });
};

// Handler para erros de servidor
const handleServerError = (res, error) => {
    res.status(500).json({ error: error.message });
};

module.exports = {
    handleNotFound,
    handleValidationError,
    handleServerError
};
