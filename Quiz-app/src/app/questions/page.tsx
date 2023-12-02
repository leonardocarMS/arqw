"use client";

import { ChangeEvent, useState } from "react";

export default function CreateQuestion() {
  const [newQuestion, setNewQuestion] = useState({
    question: "",
    answers: ["", "", "", ""],
    correctAnswer: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { name, value } = e.target;
    const updatedAnswers = [...newQuestion.answers];
    updatedAnswers[index] = value;
    setNewQuestion({
      ...newQuestion,
      answers: updatedAnswers,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Envie os dados do formulário para o servidor ou adicione a pergunta ao estado global aqui
  };

  return (
    <div className="flex flex-col justify-center items-center py-5">
      <h1>Adicionar Pergunta</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="question">Pergunta:</label>
          <input
            type="text"
            name="question"
            id="question"
            value={newQuestion.question}
            onChange={(e) => setNewQuestion({ ...newQuestion, question: e.target.value })}
          />
        </div>
        {newQuestion.answers.map((answer, index) => (
          <div key={index}>
            <label htmlFor={`answer-${index}`}>{`Resposta ${index + 1}:`}</label>
            <input
              type="text"
              name={`answer-${index}`}
              id={`answer-${index}`}
              value={answer}
              onChange={(e) => handleInputChange(e, index)}
            />
          </div>
        ))}
        <div>
          <label htmlFor="correctAnswer">Resposta Correta:</label>
          <select
            name="correctAnswer"
            id="correctAnswer"
            value={newQuestion.correctAnswer}
            onChange={(e) => setNewQuestion({ ...newQuestion, correctAnswer: e.target.value })}
          >
            <option value="">Selecione a resposta correta</option>
            <option value="0">Resposta 1</option>
            <option value="1">Resposta 2</option>
            <option value="2">Resposta 3</option>
            <option value="3">Resposta 4</option>
          </select>
        </div>
        <button type="submit">Adicionar Pergunta</button>
      </form>
    </div>
  );
}
