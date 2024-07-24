const questions = [
    { question: "What is 2 + 2?", choices: ["3", "4", "5"], correct: "choice2" },
    { question: "What is 5 - 3?", choices: ["2", "3", "4"], correct: "choice1" },
    { question: "What is 7 x 3?", choices: ["21", "24", "27"], correct: "choice1" },
    { question: "What is 12 / 4?", choices: ["2", "3", "4"], correct: "choice2" },
    { question: "What is 9 + 5?", choices: ["12", "14", "15"], correct: "choice2" },
    { question: "What is 8 - 6?", choices: ["1", "2", "3"], correct: "choice2" },
    { question: "What is 6 x 2?", choices: ["10", "12", "14"], correct: "choice2" },
    { question: "What is 15 / 3?", choices: ["4", "5", "6"], correct: "choice2" },
    { question: "What is 3 + 7?", choices: ["9", "10", "11"], correct: "choice2" },
    { question: "What is 11 - 4?", choices: ["6", "7", "8"], correct: "choice2" }
];

let answeredQuestions = 0;
let score = 0;
let currentQuestion;

function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

function loadQuestion() {
    if (answeredQuestions < 10) {
        currentQuestion = getRandomQuestion(); 
        document.getElementById('questionText').textContent = currentQuestion.question;
        document.getElementById('choice1').textContent = currentQuestion.choices[0];
        document.getElementById('choice2').textContent = currentQuestion.choices[1];
        document.getElementById('choice3').textContent = currentQuestion.choices[2];
        document.getElementById('questionNumber').textContent = answeredQuestions + 1;
        
        // Clear previous feedback
        const feedback = document.getElementById('feedback');
        feedback.textContent = '';
        feedback.className = '';
    } else {
        showFinalScreen();
    }
}

function showFinalScreen() {
    document.getElementById('quizForm').innerHTML = `
        <h2>Quiz Finished</h2>
        <p>Your final score is ${score} out of 10</p>
        <div class="btn-container"><button id="restartButton">Restart Quiz</button></div>
    `;

    // Add event listener for the restart button
    document.getElementById('restartButton').addEventListener('click', function() {
        location.reload(); // Reload the page to restart the quiz
    });
}


document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    const feedback = document.getElementById('feedback');
    
    if (selectedChoice) {
        const answer = selectedChoice.value;
        
        if (answer === currentQuestion.correct) {
            score++;
            feedback.textContent = 'Correct!';
            feedback.className = 'correct';
        } else {
            feedback.textContent = `Incorrect. The correct answer is: ${currentQuestion.choices[questions.findIndex(q => q.correct === currentQuestion.correct)]}.`;
            feedback.className = 'incorrect';
        }
        
        document.getElementById('score').textContent = score;
        answeredQuestions++;
        loadQuestion();
    } else {
        alert('Please select an answer!');
    }
});


loadQuestion();
