export const quiz = {
    subject: "Banco de Dados",
    totalQuestions: 5,
    questions: [
      {
        id: 1,
        question:
          "São modelos de bancos de dados:",
        answers: ["hierárquico, rede, orientado a objeto e relacional", "rede, orientado a objeto, procedural e relacional.", "relacional, hierárquico, rede e procedural.", " procedural, orientado a objeto, rede e hierárquico."],
        correctAnswer: "hierárquico, rede, orientado a objeto e relacional",
      },
      {
        id: 2,
        question:
          "Num ambiente Flyway, a linha de comando (command line) permite, dentre outros, o uso dos comandos:",
        answers: ["Apply, Check, Include;", "Baseline, Clean, Migrate;", "Info, Quit, Start;", "Load, Schema, View."],
        correctAnswer: "Baseline, Clean, Migrate;",
      },
      {
        id: 3,
        question:
          "O entendimento dos modelos de banco de dados é fundamental para compreender as vantagens e desvantagens em aspectos de estrutura e manipulação dos dados. Um destes modelos utiliza tabelas bidimensionais para o armazenamento dos dados e a maneira como os dados são armazenados influencia na facilidade de acesso às informações, existindo técnicas de normalização para aperfeiçoar a organização. Trata-se do modelo",
        answers: ["hierárquico", "distribuído", "orientado a objetos", "relacional"],
        correctAnswer: "relacional",
      },
      {
        id: 4,
        question:
          "O Administrador de Dados?",
        answers: ["mantém o dicionário de dados", "executa backup do banco de dados", "recupera protocolos", "desenvolve um modelo de dados com abrangência operacional"],
        correctAnswer: "mantém o dicionário de dados",
      },
      {
        id: 5,
        question:
          "O nível de abstração, que visa simplificar a interação entre usuários e o sistema de banco de dados, é o",
        answers: ["físico", "de visão", " lógico", "de esquema"],
        correctAnswer: "de visão",
      },
    ],
  };