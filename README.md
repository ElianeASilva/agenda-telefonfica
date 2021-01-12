<h1 align="center">Projeto Agenda Telefônica</h1>

## Descrição do Projeto

Projeto inicialmente proposto pela profª Jess através da {reprograma}. O intuito é reforçar o aprendizado
dos verbos HTTP, e explorar meios de como fazer valer as regras de negócio propostas.
O projeto consiste em criar uma agenda, com informações como nome, telefone, email e outros telefones.

## Regras de Negócio

- Não pode ter números iguais
- Buscar por nome cadastrado
- Buscar por número cadastrado
- Atualizar todo o cadastro através do ID fornecido
- Atualizar somente o campo telefone através do ID fornecido
- Deletar cadastro através do ID fornecido

## Rotas

| Função | Rota|
| --- | --- |
| Criar novo cadastro  | http://localhost:3000/agenda/new |
| Exibir todos os cadastros | http://localhost:3000/agenda/view-all |
| Buscar um contato através do nome | http://localhost:3000/agenda/by-name?name=Patricia |
| Buscar um contato através do telefone | http://localhost:3000/agenda/by-phone?phone= |
| Atualiza um cadastro através do ID | http://localhost:3000/agenda/update-contact/:id |
| Atualiza apenas o campo telefone através do ID | http://localhost:3000/agenda/update-phone/:id |
| Deleta um cadastro através do ID | http://localhost:3000/agenda/delete/id |

## Tecnologias e Ferramentas Utilizadas

- Modelo de arquitetura: MVC;
- Linguagem: JavaScript;
- Banco de Dados (não relacional): MongoDB;
- Ambiente de execução: NodeJS;
- Gerenciador de Pacotes: NPM;
- Dependências: Cors, Express, Mongoose e Nodemon.

## Como rodar a Aplicação

- Faça clone ou fork do repositório
- No terminal, use o comando npm install para baixar as dependências
- Em seguida, use o comando npm start e o projeto irá rodar na porta 3000


# Obrigada por chegarem até aqui! 👩‍💻



