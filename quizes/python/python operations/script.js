const quizData = [
    {
        question: "What will be the result of 5 + 3 in Python?",
        choices: ["8", "7", "6", "10"],
        correctAnswer: 0
    },
    {
        question: "What is the output of the expression 10 - 4?",
        choices: ["4", "6", "7", "2"],
        correctAnswer: 1
    },
    {
        question: "What will the expression 15 / 3 evaluate to?",
        choices: ["3", "5", "4", "2"],
        correctAnswer: 0
    },
    {
        question: "What is the result of 2 * 6 in Python?",
        choices: ["10", "12", "8", "14"],
        correctAnswer: 1
    },
    {
        question: "What is the output of the expression 16 // 3?",
        choices: ["5.33", "5", "6", "4"],
        correctAnswer: 1
    },
    {
        question: "What will be the value of 10 % 3 in Python?",
        choices: ["3", "1", "2", "0"],
        correctAnswer: 1
    },
    {
        question: "What is the result of 2 ** 4 in Python?",
        choices: ["6", "8", "16", "12"],
        correctAnswer: 2
    },
    {
        question: "What is the output of the expression 'Python' + ' is fun'?",
        choices: ["'Python is fun'", "'Python + is fun'", "'Python + ' is fun'", "'Python' ' is fun'"],
        correctAnswer: 0
    },
    {
        question: "What will be the value of 3 * (4 + 2) in Python?",
        choices: ["12", "18", "24", "30"],
        correctAnswer: 3
    },
    {
        question: "What is the output of the expression 7 - 2 * 3?",
        choices: ["1", "3", "7", "11"],
        correctAnswer: 0
    },
    {
        question: "What is the result of 9 / 2 in Python?",
        choices: ["4.5", "4", "5", "3.5"],
        correctAnswer: 0
    },
    {
        question: "What will the expression 17 // 4 evaluate to?",
        choices: ["4", "4.25", "4.5", "5"],
        correctAnswer: 3
    },
    {
        question: "What is the result of 2 ** 5 in Python?",
        choices: ["10", "16", "32", "64"],
        correctAnswer: 2
    },
    {
        question: "What is the output of the expression 'Hello' * 3?",
        choices: ["'HelloHelloHello'", "'HelloHello'", "'Hello Hello Hello'", "'HelloHelloHelloHello'"],
        correctAnswer: 3
    },
    {
        question: "What will be the value of 2 + 3 * 5 in Python?",
        choices: ["25", "17", "20", "None of the above"],
        correctAnswer: 1
    },
    {
        question: "What is the result of 11 % 4 in Python?",
        choices: ["3", "2", "4", "1"],
        correctAnswer: 0
    },
    {
        question: "What will the expression 3.5 * 2 evaluate to?",
        choices: ["7", "6.5", "8", "7.0"],
        correctAnswer: 1
    },
    {
        question: "What is the output of the expression 'Python'[2]?",
        choices: ["'t'", "'h'", "'y'", "'P'"],
        correctAnswer: 0
    },
    {
        question: "What will be the value of 2 ** 3 in Python?",
        choices: ["6", "8", "4", "16"],
        correctAnswer: 1
    },
    {
        question: "What is the result of 7 - 2 in Python?",
        choices: ["4", "5", "6", "3"],
        correctAnswer: 3
    },
    {
        question: "What will be the value of 10 / 4 in Python?",
        choices: ["2.5", "2", "2.25", "2.75"],
        correctAnswer: 0
    },
    {
        question: "What is the output of the expression 'Hello' + ' World'?",
        choices: ["'Hello World'", "'HelloWorld'", "'Hello + World'", "'Hello' 'World'"],
        correctAnswer: 0
    },
    {
        question: "What will the expression 9 // 2 evaluate to?",
        choices: ["4.5", "5", "4", "None of the above"],
        correctAnswer: 2
    },
    {
        question: "What is the result of 3 ** 4 in Python?",
        choices: ["7", "12", "81", "64"],
        correctAnswer: 2
    },
    {
        question: "What is the output of the expression 'Python'[0:3]?",
        choices: ["'Pyt'", "'Py'", "'P'", "'Pth'"],
        correctAnswer: 0
    },
    {
        question: "What will be the value of 5 / 2 in Python?",
        choices: ["2.5", "2", "2.0", "2.2"],
        correctAnswer: 0
    },
    {
        question: "What is the result of 12 % 5 in Python?",
        choices: ["1", "2", "3", "4"],
        correctAnswer: 1
    },
    {
        question: "What will the expression 8 // 3 evaluate to?",
        choices: ["2.67", "2", "3", "2.5"],
        correctAnswer: 1
    },
    {
        question: "What is the output of the expression 'Hello ' * 3?",
        choices: ["'HelloHelloHello'", "'Hello Hello Hello'", "'HelloHello'", "'Hello Hello'"],
        correctAnswer: 1
    },
    {
        question: "What will be the value of 4 ** 2 in Python?",
        choices: ["16", "8", "12", "6"],
        correctAnswer: 0
    },
    {
        question: "What is the result of 6 - 2 * 2 in Python?",
        choices: ["1", "2", "3", "4"],
        correctAnswer: 0
    },
    {
        question: "What is the output of the expression 'Python'[1]?",
        choices: ["'y'", "'P'", "'t'", "'h'"],
        correctAnswer: 0
    },
    {
        question: "What will be the value of 9 // 4 in Python?",
        choices: ["2.25", "3", "2", "2.5"],
        correctAnswer: 2
    },
    {
        question: "What is the result of 5 ** 3 in Python?",
        choices: ["15", "125", "100", "25"],
        correctAnswer: 1
    },
    {
        question: "What is the output of the expression 'Python'[-1]?",
        choices: ["'n'", "'P'", "'y'", "'h'"],
        correctAnswer: 0
    },
    {
        question: "What will be the value of 7 / 2 in Python?",
        choices: ["3.5", "3", "3.0", "3.2"],
        correctAnswer: 0
    }
    // Add more questions as needed
];


let currentQuestion = 0;
let score = 0;
let attempt = JSON.parse(localStorage.getItem('pythonAttemptCount')) || 0;

const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const resultElement = document.getElementById('result');
const nextButton = document.getElementById('next-btn');
const progressElement = document.getElementById('current-question');
const scoresList = document.getElementById('scores-list');
const reattemptButton = document.getElementById('reattempt-btn');

// Load scores from localStorage if available
let scores = JSON.parse(localStorage.getItem('pythonQuizScores')) || [];

function loadQuestion() {
    const q = quizData[currentQuestion];
    questionElement.textContent = q.question;

    choicesElement.innerHTML = '';
    q.choices.forEach((choice, index) => {
        const li = document.createElement('li');
        li.textContent = choice;
        li.addEventListener('click', () => checkAnswer(index));
        choicesElement.appendChild(li);
    });

    progressElement.textContent = currentQuestion + 1;
}

function checkAnswer(index) {
    const correctAnswerIndex = quizData[currentQuestion].correctAnswer;
    if (index === correctAnswerIndex) {
        score++;
        resultElement.textContent = 'Correct!';
    } else {
        resultElement.textContent = `Wrong! The correct answer is: ${quizData[currentQuestion].choices[correctAnswerIndex]}`;
    }
    disableChoices();
    nextButton.disabled = false;
}

function disableChoices() {
    choicesElement.querySelectorAll('li').forEach(choice => {
        choice.style.cursor = 'not-allowed';
        choice.style.backgroundColor = '#ccc';
    });
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
        resultElement.textContent = '';
        nextButton.disabled = true;
    } else {
        showResults();
    }
}

function showResults() {
    questionElement.textContent = `Quiz completed! You scored ${score} out of ${quizData.length}.`;
    choicesElement.innerHTML = '';
    resultElement.textContent = '';
    nextButton.style.display = 'none';
    reattemptButton.style.display = 'inline-block';

    // Increment attempt count
    attempt++;
    localStorage.setItem('pythonAttemptCount', JSON.stringify(attempt));

    // Save score to scores array
    scores.push({
        attempt: attempt,
        score: score
    });
    localStorage.setItem('pythonQuizScores', JSON.stringify(scores));

    // Display scores
    displayScores();
}

function displayScores() {
    scoresList.innerHTML = '';
    scores.forEach(scoreItem => {
        const li = document.createElement('li');
        li.textContent = `Attempt ${scoreItem.attempt}: ${scoreItem.score} / ${quizData.length}`;
        scoresList.appendChild(li);
    });
}

function reattemptQuiz() {
    currentQuestion = 0;
    score = 0;
    nextButton.style.display = 'inline-block';
    reattemptButton.style.display = 'none';
    loadQuestion();
    resultElement.textContent = '';
}

nextButton.addEventListener('click', nextQuestion);
reattemptButton.addEventListener('click', reattemptQuiz);

// Initial load
loadQuestion();
displayScores();
