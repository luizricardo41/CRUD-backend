# Desafio Técnico - HIGHTECHX - Backend

O desafio consiste na criação de uma aplicação completa, backend e frontend, de um CRUD de usuários. Neste repositório está o conteúdo referente ao backend.

## Tecnologias utilizadas

Para a criação da aplicação, foram utilizadas as seguintes tecnologias:
  
  - NodeJS;
  - ExpressJS;
  - Typescript;
  - Docker;
  - MySQL;
  - Prisma ORM;
  
## Passos para testar a aplicação em modo local

Para efetuar o teste localmente, é necessário seguir os passos:

- Clonar a aplicação: 

`git clone git@github.com:luizricardo41/desafio-tecnico-atlas.git`

- Instalar as dependencias do projeto: 

`npm install`

- Para iniciar o banco de dados, há um docker-compose no repositório. Para executá-lo, basta acessar a pasta raiz do projeto e rodar o seguinte comando:

`docker-compose up`

- Para a criação da tabela de usuários no banco, execute o comando do Prisma:

`npx prisma migrate dev`

- E por fim, iniciar a aplicação:

`npm run dev`

## Testar o funcionamento:

É possivel efetuar o teste manual da aplicação de duas maneiras:

- A primeira é utilizar uma plataforma para testar API (Postman, Insomnia), fazendo as requisições aos endpoints e validando suas respectivas respostas.

- A segunda maneira, é clonar este [repositório](https://github.com/luizricardo41/CRUD-frontend) do frontend, e executá-lo seguindo as orientações do README. Assim poderá verificar o funcionamento de ambas as aplicações localmente.
