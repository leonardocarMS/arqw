"use client";

import { quiz } from '@/data/quiz';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import { useGlobalContext } from '@/context/main';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc, updateDoc } from 'firebase/firestore/lite';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app); // Certifique-se de que 'app' seja a instância correta do Firebase


export default function PageQuiz() {

    const [activeQuestion, setActiveQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState(false)
    const [checked, setChecked] = useState(false)
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
    const [showResult, setShowResult] = useState(false)
    const [result, setResult] = useState({
        score: 0,
        correctAnswer: 0,
        wrongAnswer: 0,

    });
    const [tempQuestionBackgroundColor, setTempQuestionBackgroundColor] = useState("bg-gray-100");
    const [showCorrectAnswerMessage, setShowCorrectAnswerMessage] = useState(false);
    const [showAddQuestionButton, setShowAddQuestionButton] = useState(false);
    const [tabSwitchCount, setTabSwitchCount] = useState(0);
    const [hasSwitchedTab, setHasSwitchedTab] = useState(false);
    const [disqualified, setDisqualified] = useState(false);

    useEffect(() => {
        const handleTabSwitch = () => {
            if (hasSwitchedTab) {
                setTabSwitchCount((prevCount) => prevCount + 1);
            } else {
                setHasSwitchedTab(true);
            }
        };

        window.addEventListener('visibilitychange', handleTabSwitch);

        return () => {
            window.removeEventListener('visibilitychange', handleTabSwitch);
        };
    }, [hasSwitchedTab]);

    useEffect(() => {
        if (hasSwitchedTab && tabSwitchCount > 2) {
            // O usuário excedeu o limite de trocas de aba após a primeira saída
            setShowResult(true);
            // O usuário excedeu o limite de trocas de aba
            setDisqualified(true);
        }
    }, [tabSwitchCount, hasSwitchedTab]);

    useEffect(() => {
        if (showResult) {
            setShowAddQuestionButton(true);
        }
    }, [showResult]);


    useEffect(() => {
        resetQuestionBackgroundColor();
    }, [activeQuestion]);

    function resetQuestionBackgroundColor() {
        setTempQuestionBackgroundColor("bg-gray-100");
    }


    const { questions, subject, totalQuestions } = quiz;
    const { id, question, answers, correctAnswer } = questions[activeQuestion];

    const { newName, newEmail } = useGlobalContext()


    const router = useRouter();

    function onAnswerSelected(answer: any, idx: any) {
        setChecked(true);
        setSelectedAnswerIndex(idx)
        if (answer === correctAnswer) {
            setSelectedAnswer(true)
        } else {
            setSelectedAnswer(false)
        }
    }

    async function nextQuestionHandler() {

        setSelectedAnswerIndex(null);
        // Defina a cor temporária de fundo com base na resposta do usuário
        setTempQuestionBackgroundColor(selectedAnswer ? "bg-green-500" : "bg-red-500");

        const updatedResult = {
            score: selectedAnswer ? result.score + 5 : result.score,
            correctAnswer: selectedAnswer ? result.correctAnswer + 1 : result.correctAnswer,
            wrongAnswer: selectedAnswer ? result.wrongAnswer : result.wrongAnswer + 1,
            timestamp: new Date(), // Adicione um campo de data e hora
        };

        const userIdentifier = newEmail;
        const userDocRef = doc(firestore, 'users', userIdentifier);

        try {
            // O documento do usuário não existe, então crie-o com os resultados
            await setDoc(userDocRef, {
                quiz_results: {
                    [new Date().toISOString()]: updatedResult,
                },
            });

            console.log('Resultado inserido com sucesso');
        } catch (error) {
            console.error('Erro ao inserir resultado:', error);
        }

        setResult((prev) =>
            selectedAnswer
                ? {
                    ...prev,
                    score: prev.score + 5,
                    correctAnswer: prev.correctAnswer + 1,
                }
                : {
                    ...prev,
                    wrongAnswer: prev.wrongAnswer + 1,
                }
        );

        // Define a cor de fundo padrão bg-gray-100 após 2 segundos
        setTimeout(() => {
            setTempQuestionBackgroundColor("bg-gray-100");
        }, 2000);

        // Aguarda alguns segundos antes de passar para a próxima questão
        setTimeout(() => {
            // Limpa a cor de fundo temporária e prossiga para a próxima questão
            setTempQuestionBackgroundColor("");

            if (activeQuestion !== questions.length - 1) {
                setActiveQuestion((prev) => prev + 1);
            } else {
                setActiveQuestion(0);
                setShowResult(true);
            }
            setChecked(false);

            setShowCorrectAnswerMessage(false); // Redefine showCorrectAnswerMessage como false antes de passar para a próxima pergunta
        }, 2000); // Agora, aguarde 2 segundos para dar tempo à transição
    }



    return (
        <div className="flex flex-col justify-center items-center py-5">

            <div>
                <p>Olá <span className="font-bold">{newName}</span> seja bem vindo!</p>
            </div>
            <div className="flex flex-col">
                <h2>Assunto: {subject} </h2>
                <h2>
                    Questão: {activeQuestion + 1}/{totalQuestions}
                </h2>
            </div>
            <div className={`max-w-sm rounded overflow-hidden shadow-lg ${tempQuestionBackgroundColor}`}>
                {!showResult ? (
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-black">{question}</div>
                        <div className="text-gray-700 text-base flex flex-col gap-1">
                            {answers.map((answer, idx) => (
                                <button key={idx}
                                    className={`
                                        hover:bg-blue-500 
                                        text-blue-700 font-semibold hover:text-white 
                                        py-2 px-4 border border-blue-500 
                                        hover:border-transparent rounded
                                        ${selectedAnswerIndex === idx ? "bg-blue-700 text-white" : ""}
                                        `}
                                    onClick={() => onAnswerSelected(answer, idx)}
                                >
                                    {answer}
                                </button>
                            ))}
                        </div>
                        <div className="px-6 pt-4 pb-2 flex justify-center">
                            <button disabled={!checked} className={`
                                                        bg-gray-400  text-white font-bold 
                                                        py-2 px-4 rounded-full select-none
                                                        ${checked ? "hover:bg-gray-600" : "bg-gray-200 cursor-not-allowed"}
                                                        `}
                                onClick={() => {
                                    setShowCorrectAnswerMessage(true); // Definir showCorrectAnswerMessage como true após o clique no botão Next para mostrar a resposta
                                    nextQuestionHandler()
                                }
                                }
                            >
                                Next
                            </button>
                        </div>
                        <div className="mt-2">
                            {showCorrectAnswerMessage && (
                                <div className={`font-bold text-black`}>
                                    Resposta Correta: {correctAnswer}
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="px-6 py-4 text-black">

                        <h1 className="font-bold text-xl text-blue-600"> Resultados</h1>
                        <h3>Porcentagem de acertos: {(result.score / 25) * 100}% </h3>
                        <h3>Total de Questões: <span>{questions.length}</span> </h3>
                        <h3>Total de pontos: <span>{result.score}</span></h3>
                        <h3>Respostas certas: <span>{result.correctAnswer}</span></h3>
                        <h3>Respostas erradas: <span>{result.wrongAnswer}</span> </h3>
                        <div className="px-6 pt-4 pb-2 flex justify-center">
                            <button className={`
                                                        bg-gray-400  text-white font-bold 
                                                        py-2 px-4 rounded-full select-none
                                                        `}
                                onClick={() => router.push("/")}
                            >
                                Restart
                            </button>
                        </div>
                        {disqualified && (
                            <div className="text-red-500">
                                Você foi desclassificado por sair mais de 2 vezes da aba do quiz.
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}