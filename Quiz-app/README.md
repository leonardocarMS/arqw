# Quiz APP 
 O objetivo deste trabalho é consolidar os conceitos sobre React e NextJs na criação de um quiz interativo com os seguintes requisitos:

## Requisitos avaliativos:
1) Implementar um formulário simples de cadastro do usuário na primeira tela no Quiz.
Coletando nome e e-mail. Você deve armazenar essas informações em um banco de dados, e usar
essa informação para guardar o resultado da resposta ao Quiz do respectivo usuário.
- Solução

Foi utilizado o Firestore Database para armazenar o resultado do quiz pelo email do usuário.

![Firebase.png](https://github.com/Lucasx10/Quiz-app/blob/main/Firebase.png) 
 
3) Implementar uma forma de correção automática da questão. A forma de fazer isso está aberta,
você pode ao final por exemplo dar a opção ao usuário acessar as questões já respondidas, e
mostrar se ele errou ou não a questão. Alguns questionários mostram até um feedback,
explicando a resposta.
- Solução

Como estava em aberto foi utilizado um esquema de cores para dar um feedback, o card fica verde se acertou e se errou ele fica vermelho, mostrando em negrito em baixo qual seria a questão correta.

5) Implementar forma de inserção de mais perguntas ao Quiz. Ou conjunto de perguntas por
temas.
- Solução
  
Botão no inicio com um form para adicionar pergunta ao quiz.

7) Implementar controle de mudança de aba do navegador. Limitar a 2 (duas) trocas de aba do
Quiz, caso contrário ir para tela de resultado do Quiz e mostrar que o usuário não pode mais
responder aquele Quiz específico. (Recurso de certificações on-line)
- Solução

Basicamente, Essa abordagem usa os eventos do navegador para controlar o comportamento do usuário e atualiza os estados relevantes para refletir a situação.

## Getting Started
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


