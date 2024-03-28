# Teste-Pr-tico-3x-web
Desenvolver uma aplicação simples que utilize Node.js para o backend e MongoDB como banco de dados.

                                                            Instruções de Configuração e Execução
Instalação de Dependências:

Certifique-se de ter o Nodejs instalado em sua máquina.
Certifique-se também de possuir um programa para fazer requisições http (insomnia,postman,APIdog).
A api utiliza o Cloud.mongodb, e o banco foi configurado para receber acessos de qualquer ip.

Configuração do Ambiente:

  Dê um clone no repositório (link: https://github.com/MarcosRibeiro086/Teste-Pr-tico-3x-web.git), a pasta node_modules foi inserida no projeto para evitar eventuais erros na execução da api.


Na pasta do projeto execute o aplicativo usando o seguinte comando:

nodemon ./index.js

O servidor estará acessível em http://localhost:3000.


Descrição dos Endpoints:

1. Endpoint 1
Descrição: Dá um get em todos os contatos cadastrados
Método: GET
URL: /contatos
Parâmetros:
_id: Id do contato cadastrado no banco de dados
Nome: Nome do contato.
Telefone:Telefone do contato.

GET http://localhost:5000/contatos
Resposta de Exemplo:

{
  "_id":"ajksgdbianohad"
  
  "nome": "Marcos Ribeiro",
  
  "telefone":"99999-9999"
}

2. Endpoint 2

Descrição: Retorna contatos por id
Método: GET
URL: /contatos/(id do contato desejado)

GET http://localhost:3000/contatos/(id do contato desejado)

Resposta de Exemplo:
{

  "_id":"ajksgdbianohad"
  
  "nome": "Marcos Ribeiro",
  
  "telefone":"99999-9999"

}

3. Endpoint 3
   
Descrição: Cadastro de Contatos, o id será auto incrementado no banco
Método: POST
URL: /contatos
POST (http://localhost:3000/contatos)

Inserção de objeto json pelo body de exemplo:
{

  "nome": "Marcos Ribeiro",
  
  "telefone":"99999-9999"

}

4. Endpoint 4

Descrição: Atualização de contatos do banco
Método: PATCH
URL: /contatos/(id do contato)
POST (http://localhost:3000/contatos/(id do contato)

Inserção de objeto json pelo body de exemplo,caso nenhum dado seja alterado o sistema enviará uma mensagem informando isso:
{

  "nome": "Marcos Ribeiro",
  
  "telefone":"98888-8888"

}

5. Endpoint 5

Descrição: Remoção de contatos do banco
Método: DELETE
URL: /contatos/(id do contato)
POST (http://localhost:3000/contatos/(id do contato)

A remoção do usuário será pela url da requisição  usando o id como parâmetro, assim, caso não exista nenhum usuário seja encontrado irá retornar uma mensagem de "usuário não encontrado":
{

  "Usuário deletado com sucesso!"

}
