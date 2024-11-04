const questions = [
    { question: "What does cybersecurity protect?", options: ["Networks", "Systems", "Programs", "All of the above"], answer: 3 },
    { question: "What is a common cybersecurity threat?", options: ["Virus", "Waterfall", "Rain", "Cyclone"], answer: 0 },
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = `
        <h3>${questions[currentQuestion].question}</h3>
        ${questions[currentQuestion].options.map((opt, idx) => `<button onclick="checkAnswer(${idx})">${opt}</button>`).join('')}
    `;
}

function checkAnswer(selected) {
    if (selected === questions[currentQuestion].answer) {
        score++;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("score").innerText = `Your score: ${score}/${questions.length}`;
    }
}

document.addEventListener("DOMContentLoaded", loadQuestion);
