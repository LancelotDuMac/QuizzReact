import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: "De quel animal s'agit-il ?",
			questionImage: 'img/01.JPG',
			answerOptions: [
				{ answerText: 'Cerf', isCorrect: false, },
				{ answerText: 'Sanglier', isCorrect: false },
				{ answerText: 'Grenouille', isCorrect: true },
				{ answerText: 'Blaireau', isCorrect: false },
			],
		},
		{
			questionText: "De quel animal s'agit-il ?",
			questionImage: 'img/02.JPG',
			answerOptions: [
				{ answerText: 'Blaireau', isCorrect: false },
				{ answerText: 'Hérisson', isCorrect: true },
				{ answerText: 'Renard', isCorrect: false },
				{ answerText: 'Lapin', isCorrect: false },
			],
		},
		{
			questionText: "De quel animal s'agit-il ?",
			questionImage: 'img/03.JPG',
			answerOptions: [
				{ answerText: 'Loutre', isCorrect: true },
				{ answerText: 'Hérisson', isCorrect: false },
				{ answerText: 'Grenouille', isCorrect: false },
				{ answerText: 'Cerf', isCorrect: false },
			],
		},
		{
			questionText: "De quel animal s'agit-il ?",
			questionImage: 'img/04.JPG',
			answerOptions: [
				{ answerText: 'Hérisson', isCorrect: false },
				{ answerText: 'Blaireau', isCorrect: false },
				{ answerText: 'Renard', isCorrect: false },
				{ answerText: 'Loup', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			coucou
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}							
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
						<div><span><img src={questions[currentQuestion].questionImage}></img></span></div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
