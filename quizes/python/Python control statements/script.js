// Define the quiz data for Control Statements
const controlStatementsQuizData = [
    {
        question: "What is the output of the following code?\n\nfor i in range(3):\n    print(i)",
        choices: ["0 1 2", "1 2 3", "0 1 2 3", "SyntaxError"],
        correctAnswer: 0
    },
    {
        question: "How do you start an if statement in Python?",
        choices: ["if x =", "if x == 5:", "if x => 5", "if x then"],
        correctAnswer: 1
    },
    {
        question: "What is the result of the following code?\n\nx = 10\nwhile x > 0:\n    print(x)\n    x -= 2",
        choices: ["10 8 6 4 2 0", "10 8 6 4 2", "10 9 8 7 6 5 4 3 2 1", "SyntaxError"],
        correctAnswer: 0
    },
    {
        question: "Which statement is used to exit a loop in Python?",
        choices: ["return", "exit", "break", "continue"],
        correctAnswer: 2
    },
    {
        question: "What is the correct way to write an else statement following an if block in Python?",
        choices: ["else:", "else if:", "elseif:", "elseif"],
        correctAnswer: 0
    },
    {
        question: "In Python, how do you execute a block of code repeatedly as long as a condition is true?",
        choices: ["while loop", "for loop", "repeat loop", "do-while loop"],
        correctAnswer: 0
    },
    {
        question: "What will be the output of the following code?\n\nfor i in range(1, 5):\n    print(i)\n    if i == 3:\n        break",
        choices: ["1 2 3 4", "1 2 3", "1 2 3 4 5", "1 2 3 4 5 6"],
        correctAnswer: 1
    },
    {
        question: "How do you skip the current iteration in a loop in Python?",
        choices: ["skip", "halt", "next", "continue"],
        correctAnswer: 3
    },
    {
        question: "What is the output of the following code?\n\nx = 0\nwhile x < 5:\n    print(x)\n    x += 1\nelse:\n    print('Finished!')",
        choices: ["0 1 2 3 4", "0 1 2 3 4 Finished!", "0 1 2 3 4 5 Finished!", "Finished!"],
        correctAnswer: 1
    },
    {
        question: "Which loop is used to iterate over a sequence of elements in Python?",
        choices: ["repeat loop", "while loop", "for loop", "do-while loop"],
        correctAnswer: 2
    },
    {
        question: "What is the output of the following code?\n\nfor i in range(3):\n    if i == 1:\n        continue\n    print(i)",
        choices: ["0 1 2", "0 2", "1 3", "0 1 3"],
        correctAnswer: 3
    },
    {
        question: "In Python, how do you execute a block of code if a condition is false?",
        choices: ["else:", "if not:", "else if:", "elseif:"],
        correctAnswer: 0
    },
    {
        question: "What is the output of the following code?\n\nx = 5\nwhile x > 0:\n    print(x)\n    x -= 1\n    if x == 2:\n        break",
        choices: ["5 4 3", "5 4", "5 4 3 2 1", "5 4 3 2 1 0"],
        correctAnswer: 2
    },
    {
        question: "Which statement in Python is used to skip the rest of the code inside a loop for the current iteration and continue to the next iteration?",
        choices: ["break", "continue", "exit", "pass"],
        correctAnswer: 1
    },
    {
        question: "What is the output of the following code?\n\nfor i in range(1, 10, 2):\n    print(i)",
        choices: ["1 3 5 7 9", "1 3 5 7", "1 2 3 4 5 6 7 8 9", "2 4 6 8 10"],
        correctAnswer: 0
    },
    {
        question: "How do you execute a block of code only if a certain condition is true in Python?",
        choices: ["else if:", "elseif:", "else:", "if:"],
        correctAnswer: 3
    },
    {
        question: "What is the output of the following code?\n\nx = 5\nwhile x > 0:\n    x -= 1\n    if x == 2:\n        continue\n    print(x)",
        choices: ["5 4 3 2 1 0", "5 4 3 1 0", "4 3 1 0", "5 4 1 0"],
        correctAnswer: 1
    },
    {
        question: "In Python, which loop is used to iterate over a sequence of elements and its index?",
        choices: ["repeat loop", "while loop", "for loop", "do-while loop"],
        correctAnswer: 2
    },
    {
        question: "What is the output of the following code?\n\nx = 0\nwhile x < 5:\n    x += 1\n    if x % 2 == 0:\n        continue\n    print(x)",
        choices: ["1 3 5", "1 2 3 4 5", "1 3 5 7 9", "2 4"],
        correctAnswer: 0
    },
    {
        question: "How do you execute a block of code repeatedly until a condition is met in Python?",
        choices: ["for loop", "while loop", "repeat loop", "until loop"],
        correctAnswer: 1
    },
    {
        question: "What is the output of the following code?\n\nfor i in range(5):\n    if i == 3:\n        continue\n    print(i)",
        choices: ["0 1 2 3 4", "0 1 2 4", "0 1 2 3", "1 2 4"],
        correctAnswer: 2
    },
    {
        question: "In Python, which statement is used to terminate the current loop and resume execution at the next iteration of the loop?",
        choices: ["return", "break", "continue", "exit"],
        correctAnswer: 2
    },
    {
        question: "What is the output of the following code?\n\nfor i in range(1, 10, 2):\n    if i == 5:\n        continue\n    print(i)",
        choices: ["1 3 7 9", "1 3 5 7 9", "1 3 5 9", "2 4 6 8 10"],
        correctAnswer: 0
    },
    {
        question: "How do you execute a block of code only if a certain condition is true in Python?",
        choices: ["elseif:", "else if:", "else:", "if:"],
        correctAnswer: 3
    },
    {
        question: "What is the output of the following code?\n\nx = 5\nwhile x > 0:\n    x -= 1\n    if x == 2:\n        continue\n    print(x)",
        choices: ["5 4 3 2 1 0", "5 4 3 1 0", "4 3 1 0", "5 4 1 0"],
        correctAnswer: 1
    },
    {
        question: "In Python, which loop is used to iterate over a sequence of elements and its index?",
        choices: ["repeat loop", "while loop", "for loop", "do-while loop"],
        correctAnswer: 2
    }
    // Add more questions here
];


let currentControlStatementQuestion = 0;
let controlStatementScore = 0;
let controlStatementAttempt = JSON.parse(localStorage.getItem('controlStatementAttemptCount')) || 0;
let controlStatementScores = JSON.parse(localStorage.getItem('controlStatementQuizScores')) || [];

const controlStatementQuestionElement = document.getElementById('question');
const controlStatementChoicesElement = document.getElementById('choices');
const controlStatementResultElement = document.getElementById('result');
const controlStatementNextButton = document.getElementById('next-btn');
const controlStatementProgressElement = document.getElementById('current-question');
const controlStatementScoresList = document.getElementById('scores-list');
const controlStatementReattemptButton = document.getElementById('reattempt-btn');

function loadControlStatementQuestion() {
    const q = controlStatementsQuizData[currentControlStatementQuestion];
    controlStatementQuestionElement.textContent = q.question;

    controlStatementChoicesElement.innerHTML = '';
    q.choices.forEach((choice, index) => {
        const li = document.createElement('li');
        li.textContent = choice;
        li.addEventListener('click', () => checkControlStatementAnswer(index));
        controlStatementChoicesElement.appendChild(li);
    });

    controlStatementProgressElement.textContent = currentControlStatementQuestion + 1;
}

function checkControlStatementAnswer(index) {
    const correctAnswerIndex = controlStatementsQuizData[currentControlStatementQuestion].correctAnswer;
    if (index === correctAnswerIndex) {
        controlStatementScore++;
        controlStatementResultElement.textContent = 'Correct!';
    } else {
        controlStatementResultElement.textContent = `Wrong! The correct answer is: ${controlStatementsQuizData[currentControlStatementQuestion].choices[correctAnswerIndex]}`;
    }
    disableControlStatementChoices();
    controlStatementNextButton.disabled = false;
}

function disableControlStatementChoices() {
    controlStatementChoicesElement.querySelectorAll('li').forEach(choice => {
        choice.style.cursor = 'not-allowed';
        choice.style.backgroundColor = '#ccc';
    });
}

function nextControlStatementQuestion() {
    currentControlStatementQuestion++;
    if (currentControlStatementQuestion < controlStatementsQuizData.length) {
        loadControlStatementQuestion();
        controlStatementResultElement.textContent = '';
        controlStatementNextButton.disabled = true;
    } else {
        showControlStatementResults();
    }
}

function showControlStatementResults() {
    controlStatementQuestionElement.textContent = `Control Statements Quiz completed! You scored ${controlStatementScore} out of ${controlStatementsQuizData.length}.`;
    controlStatementChoicesElement.innerHTML = '';
    controlStatementResultElement.textContent = '';
    controlStatementNextButton.style.display = 'none';
    controlStatementReattemptButton.style.display = 'inline-block';

    // Increment attempt count
    controlStatementAttempt++;
    localStorage.setItem('controlStatementAttemptCount', JSON.stringify(controlStatementAttempt));

    // Save score to scores array
    controlStatementScores.push({
        attempt: controlStatementAttempt,
        score: controlStatementScore
    });
    localStorage.setItem('controlStatementQuizScores', JSON.stringify(controlStatementScores));

    // Display scores
    displayControlStatementScores();
}

function displayControlStatementScores() {
    controlStatementScoresList.innerHTML = '';
    controlStatementScores.forEach(scoreItem => {
        const li = document.createElement('li');
        li.textContent = `Attempt ${scoreItem.attempt}: ${scoreItem.score} / ${controlStatementsQuizData.length}`;
        controlStatementScoresList.appendChild(li);
    });
}

function reattemptControlStatementQuiz() {
    currentControlStatementQuestion = 0;
    controlStatementScore = 0;
    controlStatementNextButton.style.display = 'inline-block';
    controlStatementReattemptButton.style.display = 'none';
    loadControlStatementQuestion();
    controlStatementResultElement.textContent = '';
}

controlStatementNextButton.addEventListener('click', nextControlStatementQuestion);
controlStatementReattemptButton.addEventListener('click', reattemptControlStatementQuiz);

// Initial load
loadControlStatementQuestion();
displayControlStatementScores();
