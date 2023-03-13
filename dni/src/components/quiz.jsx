import { useEffect, useState } from "react";

export default function Quiz() {
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [school, setSchool] = useState("");
	const [city, setCity] = useState("");
	const [formFilled, setFormFilled] = useState(false);
	const [answers, setAnswers] = useState([]);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [quizFinished, setQuizFinished] = useState(false);
	const [score, setScore] = useState(0);

    const questions = [
        {
            "question": "Ile jest osób w sali 32?",
            "answers": ["12", "10", "2", "15"],
            "correctAnswer": 3
        },
        {
            "question": "Jaki jest wzór na drzwiach w sali 36?",
            "answers": ["Δ=b<sup>2</sup>-4ac", "P=a<sup>2</sup>", "E=mc<sup>2</sup>", "OBJ= a<sup>3</sup>"],
            "correctAnswer": 2
        },
        {
            "question": "Czy na końcu korytarza jest plakat Technika grafiki i poligrafii cyfrowej?",
            "answers": ["TAK", "NIE"],
            "correctAnswer": 0
        },
        {
            "question": "W jakiej sali jest znak CISCO?",
            "answers": ["w sali 33", "w sali 36", "w sali 35", "w sali 37"],
            "correctAnswer": 2
        },
        {
            "question": "W których salach nie są włączone projektory?",
            "answers": ["w sali 33 i 36", "w sali 36 i 37", "w sali 35 i 34", "w sali 37 i 34"],
            "correctAnswer": 1
        },
        {
            "question": "Ile jest gaśnic na korytarzu?",
            "answers": ["0", "1", "2", "3"],
            "correctAnswer": 2
        },
        {
            "question": "W której sali jest napis \"Technik grafiki i poligrafii cyfrowej\"?",
            "answers": ["w sali 36", "w sali 34", "w sali 37", "w sali 33"],
            "correctAnswer": 2
        },
        {
            "question": "Jakiego koloru znajduje się plakat na drzwiach do sali 33?",
            "answers": ["Różowego", "Żółtego", "Zielonego", "Białego"],
            "correctAnswer": 0
        },
        {
            "question": "W jednej z sali ukrył się polityk, w której?",
            "answers": ["w sali 35", "w sali 37", "w sali 32", "w sali 34"],
            "correctAnswer": 2
        },
        {
            "question": "Ile jest klimatyzatorów w sali 33?",
            "answers": ["0", "1", "2", "3"],
            "correctAnswer": 2
        }
    ]
    


	function showScore() {
		let score = 0;
		questions.forEach((questionData, i) => {
			if (answers[i] === questionData.correctAnswer) {
				score += 1;
			}
		});
		setScore(score);
		setQuizFinished(true);
	}

    function setAnswer(question, answer) {
		console.log(question, answer);
		console.log(answers[question]);
		if (answers[question] !== undefined) {
			setAnswers(
				answers.map((a, i) => {
					if (i !== question) {
						return a;
					} else {
						return answer;
					}
				})
			);
		} else {
			const newAnswers = [...answers];
			newAnswers[question] = answer;
			console.log(newAnswers);
			setAnswers(newAnswers);
		}
	}

	function startQuiz() {
		if (username && school && city) {
			setFormFilled(true);
		}
	}

	if (!formFilled)
		return (
			<div className="mt-[100px] w-[80%] m-auto bg-black text-white p-[20px] rounded-3xl justify-center text-center" id="formularz">
				<div className="form_content">
					<h1>WPROWADŹ DANE, ABY ROZPOCZĄĆ QUIZ O NASZEJ SZKOLE</h1>
				</div>
				<div className="line"></div>
				<div className="form">
                    <div className="flex justify-center m-auto text-center">
                        <p>Imię i nazwisko (opcjonalnie): </p>
					<input
						value={name}
						onChange={(e) => setName(e.target.value)}
						type="text"
						className="dane bg-transparent text-white border-b-[2px] border-[crimson] ml-[10px] py-[5px] px-[20px] focus:outline-none"
						name="dane"
					/></div>
					<br />

                <div className="flex justify-center m-auto text-center">
                  <p>Pseudonim: </p>
					<input
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						type="text"
						// placeholder="Pseudonim"
						className="dane bg-transparent text-white border-b-[2px] border-[crimson] ml-[10px] py-[5px] px-[20px] focus:outline-none"
						name="nick"
						id="nickName"
					/>
                  </div>
					<br />

                    <div className="flex justify-center m-auto text-center">
                    <p>Szkoła: </p>
					<input
						value={school}
						onChange={(e) => setSchool(e.target.value)}
						type="text"
						// placeholder="Szkoła"
						className="dane bg-transparent text-white border-b-[2px] border-[crimson] ml-[10px] py-[5px] px-[20px] focus:outline-none"
						name="szkola"
					/>
                    </div>
					<br />

                    <div className="flex justify-center m-auto text-center">
                   <p>Miejscowość: </p>
					<input
						value={city}
						onChange={(e) => setCity(e.target.value)}
						type="text"
						// placeholder="Miejscowość"
						className="dane bg-transparent text-white border-b-[2px] border-[crimson] ml-[10px] py-[5px] px-[20px] focus:outline-none"
						name="miejscowosc"
					/>
                   </div>
					<br />

					{/* <input type="button" value="Prześlij" className="send" id="send" /> */}
					<button className="send border-[2px] border-[crimson] rounded-full px-[25px] py-[10px] font-gruppo font-extrabold text-[20px] " id="send" onClick={startQuiz}>
						Rozpocznij
					</button>
				</div>
			</div>
		);

	if (quizFinished) {
		return (
			<div className="formularz" id="formularz">
				<div>
					<h1 style={{ fontSize: "3rem", color: "white" }}>Twój Wynik:</h1>
					<h2 style={{ color: "white" }}>
						<span style={{ fontSize: "5rem" }}>{score}</span>/{questions.length}
					</h2>
				</div>
				<div className="line"></div>
				<div>
					{/* <ResultsTable overflow="scroll" /> */}
				</div>
			</div>
		);
	}

	return (
		<div className="quiz" id="quiz">
			<div className="questions">
				<h1>Pytanie {currentQuestion + 1}</h1>
				<p>{questions[currentQuestion].question}</p>
				<div className="answers">
					<ul>
						{questions[currentQuestion].answers.map((answer, i2) => (
							<li key={answer}>
								<label>
									<input
										type="radio"
										className="in-radio"
										onChange={(e) => setAnswer(currentQuestion, i2)}
										checked={answers[currentQuestion] === i2}
									/>
									{answer}
								</label>
							</li>
						))}
					</ul>

					<div className="buttons">
						{currentQuestion !== 0 ? (
							<button className="prev" onClick={() => setCurrentQuestion(currentQuestion - 1)}>
								Poprzednie
							</button>
						) : (
							<></>
						)}
						{currentQuestion !== questions.length - 1 ? (
							<button className="next" onClick={() => setCurrentQuestion(currentQuestion + 1)}>
								Następne
							</button>
						) : (
							<></>
						)}
						{currentQuestion === questions.length - 1 ? (
							<button className="next" onClick={showScore}>
								Zakończ
							</button>
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
