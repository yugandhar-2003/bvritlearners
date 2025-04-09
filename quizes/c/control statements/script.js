// Define the quiz data for Control Statements in C
const cControlStatementsQuizData = [
    {
        question: "Which statement is used to terminate the execution of a loop in C?",
        choices: ["exit", "break", "continue", "stop"],
        correctAnswer: 1
    },
    {
        question: "In C, which loop is known as an entry-controlled loop?",
        choices: ["for loop", "while loop", "do-while loop", "switch statement"],
        correctAnswer: 0
    },
    {
        question: "How do you create an infinite loop in C?",
        choices: ["for(;;)", "while(1)", "do { } while(1)", "All of the above"],
        correctAnswer: 3
    },
    {
        question: "Which statement in C is used to skip the remaining statements in the current iteration of a loop?",
        choices: ["skip", "exit", "break", "continue"],
        correctAnswer: 3
    },
    {
        question: "Which loop in C guarantees that the loop body executes at least once?",
        choices: ["for loop", "while loop", "do-while loop", "switch statement"],
        correctAnswer: 2
    },
    {
        question: "In C, what will be the output of the following code?\n\n```\nint i = 0;\nwhile (i < 5) {\n    printf(\"%d \", i);\n    i++;\n}\n```",
        choices: ["0 1 2 3 4", "1 2 3 4 5", "0 1 2 3", "1 2 3 4"],
        correctAnswer: 0
    },
    {
        question: "Which statement is used to transfer control from a switch statement to the statement following the switch in C?",
        choices: ["exit", "break", "continue", "goto"],
        correctAnswer: 1
    },
    {
        question: "In C, what is the purpose of the 'default' case in a switch statement?",
        choices: ["It is executed if none of the cases match the value of the expression.", "It is executed if the 'switch' keyword is missing.", "It is executed if the 'switch' expression is empty.", "It is executed if the 'switch' expression is not of type int."],
        correctAnswer: 0
    },
    {
        question: "Which statement in C is used to transfer control to the beginning of the loop in which it appears?",
        choices: ["exit", "break", "continue", "goto"],
        correctAnswer: 2
    },
    {
        question: "In C, what will be the output of the following code?\n\n```\nint i;\nfor (i = 0; i < 3; i++) {\n    printf(\"%d \", i);\n}\n```",
        choices: ["0 1 2 3", "1 2 3", "0 1 2", "1 2"],
        correctAnswer: 2
    },
    {
        question: "Which statement in C is used to transfer control to a labeled statement in the same function?",
        choices: ["exit", "break", "continue", "goto"],
        correctAnswer: 3
    },
    {
        question: "In C, what will be the output of the following code?\n\n```\nint i = 5;\ndo {\n    printf(\"%d \", i);\n    i--;\n} while (i > 0);\n```",
        choices: ["5 4 3 2 1", "4 3 2 1", "5 4 3 2", "4 3 2"],
        correctAnswer: 0
    },
    {
        question: "In C, how do you break out of nested loops?",
        choices: ["break", "continue", "exit", "All of the above"],
        correctAnswer: 0
    },
    {
        question: "In C, which statement is used to execute a block of statements repeatedly based on the condition?",
        choices: ["for loop", "while loop", "do-while loop", "switch statement"],
        correctAnswer: 1
    },
    {
        question: "What will be the output of the following code snippet in C?\n\n```\nint i;\nfor (i = 0; i < 5; i++) {\n    if (i == 3)\n        continue;\n    printf(\"%d \", i);\n}\n```",
        choices: ["0 1 2 3 4", "0 1 2 4", "1 2 4", "0 1 2 3"],
        correctAnswer: 1
    },
    {
        question: "In C, which statement is used to execute a block of statements at least once, even if the condition is false?",
        choices: ["for loop", "while loop", "do-while loop", "if statement"],
        correctAnswer: 2
    },
    {
        question: "What will be the output of the following code snippet in C?\n\n```\nint i;\nfor (i = 0; i < 5; i++) {\n    if (i == 2)\n        break;\n    printf(\"%d \", i);\n}\n```",
        choices: ["0 1 2 3 4", "0 1 3 4", "1 2 3 4", "0 1"],
        correctAnswer: 1
    },
    {
        question: "In C, which statement is used to select one of many blocks of code to be executed based on the value of an expression?",
        choices: ["if statement", "for loop", "while loop", "switch statement"],
        correctAnswer: 3
    },
    {
        question: "What will be the output of the following code snippet in C?\n\n```\nint i = 5;\nwhile (i > 0) {\n    printf(\"%d \", i);\n    i -= 2;\n}\n```",
        choices: ["5 3 1", "5 3", "5 2", "5 2 0"],
        correctAnswer: 0
    },
    {
        question: "In C, which statement is used to skip the remaining statements in the current iteration and begin the next iteration of the loop?",
        choices: ["exit", "break", "continue", "goto"],
        correctAnswer: 2
    },
    {
        question: "What will be the output of the following code snippet in C?\n\n```\nint i = 0;\nfor (;;) {\n    if (i >= 3)\n        break;\n    printf(\"%d \", i);\n    i++;\n}\n```",
        choices: ["0 1 2 3", "0 1 2", "1 2 3", "0 1"],
        correctAnswer: 1
    },
    {
        question: "In C, which statement is used to transfer control to a labeled statement elsewhere in the code?",
        choices: ["exit", "break", "continue", "goto"],
        correctAnswer: 3
    },
    {
        question: "What will be the output of the following code snippet in C?\n\n```\nint i;\nfor (i = 0; i <= 5; i++) {\n    if (i % 2 == 0)\n        continue;\n    printf(\"%d \", i);\n}\n```",
        choices: ["1 3 5", "0 2 4", "1 2 3 4 5", "0 1 2 3 4 5"],
        correctAnswer: 0
    },
    {
        question: "In C, which loop executes at least once even if the condition is false?",
        choices: ["for loop", "while loop", "do-while loop", "switch statement"],
        correctAnswer: 2
    },
    {
        question: "What will be the output of the following code snippet in C?\n\n```\nint i = 0;\ndo {\n    if (i == 2)\n        continue;\n    printf(\"%d \", i);\n    i++;\n} while (i < 5);\n```",
        choices: ["0 1 3 4", "0 1 2 3 4", "0 1 2 3", "1 3 4"],
        correctAnswer: 0
    },
    {
        question: "In C, which statement is used to exit from the loop or switch statement?",
        choices: ["exit", "break", "continue", "goto"],
        correctAnswer: 1
    },
    {
        question: "What will be the output of the following code snippet in C?\n\n```\nint i = 5;\ndo {\n    printf(\"%d \", i);\n    i--;\n} while (i > 0);\n```",
        choices: ["5 4 3 2 1", "4 3 2 1", "5 4 3 2", "4 3 2"],
        correctAnswer: 0
    },
    {
        question: "In C, which statement is used to transfer control to a specific location in the program?",
        choices: ["exit", "break", "continue", "goto"],
        correctAnswer: 3
    },
    {
        question: "What will be the output of the following code snippet in C?\n\n```\nint i = 0;\nwhile (i < 5) {\n    printf(\"%d \", i);\n    i += 2;\n}\n```",
        choices: ["0 2 4 6", "0 1 2 3 4", "0 2 4", "0 1 2 3"],
        correctAnswer: 0
    }
];

let currentCControlStatementQuestion = 0;
let cControlStatementScore = 0;
let cControlStatementAttempt = JSON.parse(localStorage.getItem('cControlStatementAttemptCount')) || 0;
let cControlStatementScores = JSON.parse(localStorage.getItem('cControlStatementQuizScores')) || [];

const cControlStatementQuestionElement = document.getElementById('question');
const cControlStatementChoicesElement = document.getElementById('choices');
const cControlStatementResultElement = document.getElementById('result');
const cControlStatementNextButton = document.getElementById('next-btn');
const cControlStatementProgressElement = document.getElementById('current-question');
const cControlStatementScoresList = document.getElementById('scores-list');
const cControlStatementReattemptButton = document.getElementById('reattempt-btn');

function loadCControlStatementQuestion() {
    const q = cControlStatementsQuizData[currentCControlStatementQuestion];
    cControlStatementQuestionElement.textContent = q.question;

    cControlStatementChoicesElement.innerHTML = '';
    q.choices.forEach((choice, index) => {
        const li = document.createElement('li');
        li.textContent = choice;
        li.addEventListener('click', () => checkCControlStatementAnswer(index));
        cControlStatementChoicesElement.appendChild(li);
    });

    cControlStatementProgressElement.textContent = currentCControlStatementQuestion + 1;
}

function checkCControlStatementAnswer(index) {
    const correctAnswerIndex = cControlStatementsQuizData[currentCControlStatementQuestion].correctAnswer;
    if (index === correctAnswerIndex) {
        cControlStatementScore++;
        cControlStatementResultElement.textContent = 'Correct!';
    } else {
        cControlStatementResultElement.textContent = `Wrong! The correct answer is: ${cControlStatementsQuizData[currentCControlStatementQuestion].choices[correctAnswerIndex]}`;
    }
    disableCControlStatementChoices();
    cControlStatementNextButton.disabled = false;
}

function disableCControlStatementChoices() {
    cControlStatementChoicesElement.querySelectorAll('li').forEach(choice => {
        choice.style.cursor = 'not-allowed';
        choice.style.backgroundColor = '#ccc';
    });
}

function nextCControlStatementQuestion() {
    currentCControlStatementQuestion++;
    if (currentCControlStatementQuestion < cControlStatementsQuizData.length) {
        loadCControlStatementQuestion();
        cControlStatementResultElement.textContent = '';
        cControlStatementNextButton.disabled = true;
    } else {
        showCControlStatementResults();
    }
}

function showCControlStatementResults() {
    cControlStatementQuestionElement.textContent = `C Control Statements Quiz completed! You scored ${cControlStatementScore} out of ${cControlStatementsQuizData.length}.`;
    cControlStatementChoicesElement.innerHTML = '';
    cControlStatementResultElement.textContent = '';
    cControlStatementNextButton.style.display = 'none';
    cControlStatementReattemptButton.style.display = 'inline-block';

    // Increment attempt count
    cControlStatementAttempt++;
    localStorage.setItem('cControlStatementAttemptCount', JSON.stringify(cControlStatementAttempt));

    // Save score to scores array
    cControlStatementScores.push({
        attempt: cControlStatementAttempt,
        score: cControlStatementScore
    });
    localStorage.setItem('cControlStatementQuizScores', JSON.stringify(cControlStatementScores));

    // Display scores
    displayCControlStatementScores();
}

function displayCControlStatementScores() {
    cControlStatementScoresList.innerHTML = '';
    cControlStatementScores.forEach(scoreItem => {
        const li = document.createElement('li');
        li.textContent = `Attempt ${scoreItem.attempt}: ${scoreItem.score} / ${cControlStatementsQuizData.length}`;
        cControlStatementScoresList.appendChild(li);
    });
}

function reattemptCControlStatementQuiz() {
    currentCControlStatementQuestion = 0;
    cControlStatementScore = 0;
    cControlStatementNextButton.style.display = 'inline-block';
    cControlStatementReattemptButton.style.display = 'none';
    loadCControlStatementQuestion();
    cControlStatementResultElement.textContent = '';
}

cControlStatementNextButton.addEventListener('click', nextCControlStatementQuestion);
cControlStatementReattemptButton.addEventListener('click', reattemptCControlStatementQuiz);

// Initial load
loadCControlStatementQuestion();
displayCControlStatementScores();
