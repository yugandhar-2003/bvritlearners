// Define the quiz data for Java Operations
const javaOperationsQuizData = [
    {
        question: "What is the result of 5 + 3 * 2 in Java?",
        choices: ["16", "11", "10", "13"],
        correctAnswer: 3
    },
    {
        question: "Which operator is used for division in Java?",
        choices: ["/", "%", "*", "+"],
        correctAnswer: 0
    },
    {
        question: "What is the value of x after the following code executes? \nint x = 10; \nx++;",
        choices: ["9", "10", "11", "12"],
        correctAnswer: 2
    },
    {
        question: "Which operator is used to compare two values for equality in Java?",
        choices: ["==", "=", "===", "!="],
        correctAnswer: 0
    },
    {
        question: "What is the result of 10 % 3 in Java?",
        choices: ["3", "0", "1", "2"],
        correctAnswer: 3
    },
    {
        question: "Which operator is used to increment the value of a variable by 1 in Java?",
        choices: ["++", "+=", "--", "-="],
        correctAnswer: 0
    },
    {
        question: "What is the value of y after the following code executes? \nint y = 5; \ny += 3;",
        choices: ["8", "5", "3", "15"],
        correctAnswer: 0
    },
    {
        question: "Which operator is used to perform logical AND operation in Java?",
        choices: ["&", "&&", "|", "||"],
        correctAnswer: 1
    },
    {
        question: "What will be the result of the expression (true && false) in Java?",
        choices: ["true", "false", "null", "compile error"],
        correctAnswer: 1
    },
    {
        question: "Which operator is used for exponentiation in Java?",
        choices: ["^", "**", "^^", "^="],
        correctAnswer: 0
    },
    {
        question: "What is the value of z after the following code executes? \nint z = 15; \nz /= 3;",
        choices: ["3", "5", "15", "1"],
        correctAnswer: 1
    },
    {
        question: "Which operator is used to perform bitwise OR operation in Java?",
        choices: ["|", "&", "||", "&&"],
        correctAnswer: 0
    },
    {
        question: "What will be the result of the expression (false || true) in Java?",
        choices: ["true", "false", "null", "compile error"],
        correctAnswer: 0
    },
    {
        question: "Which operator is used to perform bitwise XOR operation in Java?",
        choices: ["^", "^^", "&", "&&"],
        correctAnswer: 0
    },
    {
        question: "What is the value of a after the following code executes? \nint a = 5; \na *= 2;",
        choices: ["10", "5", "2", "7"],
        correctAnswer: 0
    },
    {
        question: "Which operator is used to perform logical NOT operation in Java?",
        choices: ["~", "!", "&", "|"],
        correctAnswer: 1
    },
    {
        question: "What will be the result of the expression !(true && false) in Java?",
        choices: ["true", "false", "null", "compile error"],
        correctAnswer: 0
    },
    {
        question: "Which operator is used to perform left shift operation in Java?",
        choices: ["<<", ">>", ">>>", "<="],
        correctAnswer: 0
    },
    {
        question: "What is the value of b after the following code executes? \nint b = 10; \nb -= 3;",
        choices: ["7", "10", "3", "13"],
        correctAnswer: 0
    },
    {
        question: "Which operator is used to perform right shift operation in Java?",
        choices: [">>", "<<", ">>>", ">="],
        correctAnswer: 0
    },
    {
        question: "What will be the result of the expression (10 > 5) in Java?",
        choices: ["true", "false", "null", "compile error"],
        correctAnswer: 0
    },
    {
        question: "Which operator is used to perform ternary (conditional) operation in Java?",
        choices: ["?", ":", "??", "=>"],
        correctAnswer: 0
    },
    {
        question: "What is the value of c after the following code executes? \nint c = 5; \nc %= 2;",
        choices: ["0", "1", "2", "5"],
        correctAnswer: 1
    },
    {
        question: "Which operator is used to perform bitwise complement operation in Java?",
        choices: ["~", "!", "&", "|"],
        correctAnswer: 0
    },
    {
        question: "What will be the result of the expression (5 <= 3) in Java?",
        choices: ["true", "false", "null", "compile error"],
        correctAnswer: 1
    },
    {
        question: "Which operator is used to perform equality check without type comparison in Java?",
        choices: ["==", "=", "===", "!="],
        correctAnswer: 2
    },
    {
        question: "What is the value of d after the following code executes? \nint d = 8; \nd <<= 2;",
        choices: ["32", "8", "4", "16"],
        correctAnswer: 0
    },
    {
        question: "Which operator is used to perform bitwise AND operation in Java?",
        choices: ["&", "&&", "|", "||"],
        correctAnswer: 0
    },
    {
        question: "What will be the result of the expression (true || false) in Java?",
        choices: ["true", "false", "null", "compile error"],
        correctAnswer: 0
    },
    {
        question: "Which operator is used to perform bitwise right shift with zero fill operation in Java?",
        choices: [">>>", "<<", ">>", "<="],
        correctAnswer: 0
    },
    {
        question: "What is the value of e after the following code executes? \nint e = 12; \ne >>= 2;",
        choices: ["3", "12", "6", "24"],
        correctAnswer: 2
    }
];

let currentJavaQuestion = 0;
let javaScore = 0;
let javaAttempt = JSON.parse(localStorage.getItem('javaAttemptCount')) || 0;
let javaScores = JSON.parse(localStorage.getItem('javaQuizScores')) || [];

const javaQuestionElement = document.getElementById('question');
const javaChoicesElement = document.getElementById('choices');
const javaResultElement = document.getElementById('result');
const javaNextButton = document.getElementById('next-btn');
const javaProgressElement = document.getElementById('current-question');
const javaScoresList = document.getElementById('scores-list');
const javaReattemptButton = document.getElementById('reattempt-btn');

function loadJavaQuestion() {
    const q = javaOperationsQuizData[currentJavaQuestion];
    javaQuestionElement.textContent = q.question;

    javaChoicesElement.innerHTML = '';
    q.choices.forEach((choice, index) => {
        const li = document.createElement('li');
        li.textContent = choice;
        li.addEventListener('click', () => checkJavaAnswer(index));
        javaChoicesElement.appendChild(li);
    });

    javaProgressElement.textContent = currentJavaQuestion + 1;
}

function checkJavaAnswer(index) {
    const correctAnswerIndex = javaOperationsQuizData[currentJavaQuestion].correctAnswer;
    if (index === correctAnswerIndex) {
        javaScore++;
        javaResultElement.textContent = 'Correct!';
    } else {
        javaResultElement.textContent = `Wrong! The correct answer is: ${javaOperationsQuizData[currentJavaQuestion].choices[correctAnswerIndex]}`;
    }
    disableJavaChoices();
    javaNextButton.disabled = false;
}

function disableJavaChoices() {
    javaChoicesElement.querySelectorAll('li').forEach(choice => {
        choice.style.cursor = 'not-allowed';
        choice.style.backgroundColor = '#ccc';
    });
}

function nextJavaQuestion() {
    currentJavaQuestion++;
    if (currentJavaQuestion < javaOperationsQuizData.length) {
        loadJavaQuestion();
        javaResultElement.textContent = '';
        javaNextButton.disabled = true;
    } else {
        showJavaResults();
    }
}

function showJavaResults() {
    javaQuestionElement.textContent = `Java Operations Quiz completed! You scored ${javaScore} out of ${javaOperationsQuizData.length}.`;
    javaChoicesElement.innerHTML = '';
    javaResultElement.textContent = '';
    javaNextButton.style.display = 'none';
    javaReattemptButton.style.display = 'inline-block';

    // Increment attempt count
    javaAttempt++;
    localStorage.setItem('javaAttemptCount', JSON.stringify(javaAttempt));

    // Save score to scores array
    javaScores.push({
        attempt: javaAttempt,
        score: javaScore
    });
    localStorage.setItem('javaQuizScores', JSON.stringify(javaScores));

    // Display scores
    displayJavaScores();
}

function displayJavaScores() {
    javaScoresList.innerHTML = '';
    javaScores.forEach(scoreItem => {
        const li = document.createElement('li');
        li.textContent = `Attempt ${scoreItem.attempt}: ${scoreItem.score} / ${javaOperationsQuizData.length}`;
        javaScoresList.appendChild(li);
    });
}

function reattemptJavaQuiz() {
    currentJavaQuestion = 0;
    javaScore = 0;
    javaNextButton.style.display = 'inline-block';
    javaReattemptButton.style.display = 'none';
    loadJavaQuestion();
    javaResultElement.textContent = '';
}

javaNextButton.addEventListener('click', nextJavaQuestion);
javaReattemptButton.addEventListener('click', reattemptJavaQuiz);

// Initial load
loadJavaQuestion();
displayJavaScores();
