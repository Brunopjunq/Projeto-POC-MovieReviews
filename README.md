# Projeto-POC-MovieReviews

Uma Prova de conceito para me familiarizar com o TypeScript. Este projeto é uma API para reviews de filmes. Você pode adicionar reviews de filmes e também pode adicionar filmes novos.

<h2>Como rodar este projeto</h2>

1. Clone este repositório
2. Instale todas as dependências:

```bash
npm i
```

3. Crie um banco de dados local usando o arquivo `dump.sql`
4. Configure o arquivo `.env` usando o arquivo `.env.example`
5. Rode a aplicação usando o comando `npx nodemon src/app.ts`

<h2>Testando as Rotas</h2>

<h3>Rota Movies</h3>

  • POST:`/movies`
    
    Body: {
      "name": "Batman: O Cavaleiro das Trevas",
      "email": "Ação"
      }
    

  • GET: `/movies`
      
  
  • DELETE: `/movies/:id`
  
    "id" é o ID do filme que você deseja excluir
    
    
<h3>Rota Reviews</h3>

  • POST:`/reviews`
    
    Body: {
      "userName": "Joãozinho",
      "movieId": 1 ,
      "review": "Este é um dos melhores filmes que já assisti!"
      }
    

  • GET: `/reviews`
      
  
  • DELETE: `/reviews/:id`
  
    "id" é o ID do review que você deseja excluir
    
  
  • PUT: `/reviews/:id`
  
     "id" é o ID do review que você deseja atualizar
      
      Body: {
        "review": "Este é um dos melhores filmes que já assisti! Porém, assistindo novamente, pude perceber algumas falhas no roteiro!"
      }
      
      
  • GET: `/reviews/trending`
  
    Nesta rota, você consegue ver os filmes com as maiores quantidades de reviews
