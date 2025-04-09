// Define the quiz data for Control Statements in Java
const controlStatementsQuizDataJava = [
    {
        question: "What is the keyword used in Java to execute a block of code repeatedly?",
        choices: ["for", "while", "loop", "repeat"],
        correctAnswer: 0
    },
    {
        question: "Which loop is guaranteed to execute at least once in Java?",
        choices: ["for loop", "while loop", "do-while loop", "if-else loop"],
        correctAnswer: 2
    },
    {
        question: "How do you exit from a loop in Java?",
        choices: ["exit", "end", "break", "stop"],
        correctAnswer: 2
    },
    {
        question: "Which statement is used to skip the current iteration and continue with the next iteration in a loop in Java?",
        choices: ["skip", "continue", "next", "pass"],
        correctAnswer: 1
    },
    {
        question: "What is the keyword used to exit from a loop before its normal termination in Java?",
        choices: ["halt", "exit", "break", "stop"],
        correctAnswer: 2
    },
    {
        question: "How do you specify a block of code to be executed if a condition is false in Java?",
        choices: ["else", "unless", "not", "otherwise"],
        correctAnswer: 0
    },
    {
        question: "Which statement is used to test multiple conditions in Java?",
        choices: ["if-else", "else-if", "switch", "select"],
        correctAnswer: 2
    },
    {
        question: "In a switch statement, what happens if no case matches the value of the switch expression?",
        choices: ["An exception is thrown", "The default case is executed", "The program terminates", "The switch statement skips to the next case"],
        correctAnswer: 1
    },
    {
        question: "Which statement is used to execute a block of code repeatedly based on a given boolean condition in Java?",
        choices: ["for", "while", "loop", "do-while"],
        correctAnswer: 1
    },
    {
        question: "What is the purpose of the 'break' statement in Java?",
        choices: ["To terminate the loop", "To skip to the next iteration", "To exit the program", "To execute a default case in a switch statement"],
        correctAnswer: 0
    },
    {
        question: "How do you specify a block of code to be executed if a condition is true and another block if the condition is false in Java?",
        choices: ["either-if", "switch", "if-else", "if-otherwise"],
        correctAnswer: 2
    },
    {
        question: "Which statement is used to specify a block of code to be executed if a condition is true in Java?",
        choices: ["unless", "either", "if", "only-if"],
        correctAnswer: 2
    },
    {
        question: "What is the purpose of the 'default' case in a switch statement in Java?",
        choices: ["To execute when no other cases match", "To provide a default value for variables", "To specify the default loop condition", "To define a default constructor"],
        correctAnswer: 0
    },
    {
        question: "Which loop structure is preferred when the number of iterations is known beforehand in Java?",
        choices: ["for loop", "while loop", "do-while loop", "if-else loop"],
        correctAnswer: 0
    },
    {
        question: "How do you specify a block of code to be executed repeatedly until a condition becomes false in Java?",
        choices: ["until", "loop", "do-while", "while"],
        correctAnswer: 2
    },
    {
        question: "Which statement is used to execute a block of code only if a condition is true in Java?",
        choices: ["when", "while", "do-while", "if"],
        correctAnswer: 3
    },
    {
        question: "What is the purpose of the 'continue' statement in Java?",
        choices: ["To terminate the loop", "To skip to the next iteration", "To exit the program", "To execute a default case in a switch statement"],
        correctAnswer: 1
    },
    {
        question: "In a switch statement, what happens if a 'break' statement is omitted?",
        choices: ["The next case is executed", "The default case is executed", "The program throws an exception", "The switch statement terminates"],
        correctAnswer: 0
    },
    {
        question: "Which loop structure is used when you want to execute the loop body at least once in Java?",
        choices: ["for loop", "while loop", "do-while loop", "if-else loop"],
        correctAnswer: 2
    },
    {
        question: "How do you specify a block of code to be executed repeatedly while a condition is true in Java?",
        choices: ["repeat", "loop", "while", "do-while"],
        correctAnswer: 2
    },
    {
        question: "Which statement is used to select one of many code blocks to be executed in Java?",
        choices: ["select", "if-else", "switch", "when"],
        correctAnswer: 2
    },
    {
        question: "What is the purpose of the 'do-while' loop in Java?",
        choices: ["To execute a block of code repeatedly", "To check a condition before executing a loop", "To execute at least once even if the condition is false", "To skip to the next iteration"],
        correctAnswer: 2
    },
    {
        question: "Which statement is used to terminate the execution of a loop in Java?",
        choices: ["exit", "end", "break", "stop"],
        correctAnswer: 2
    },
    {
        question: "How do you specify a block of code to be executed if a condition is false and another block if the condition is true in Java?",
        choices: ["unless", "either", "if-else", "if-otherwise"],
        correctAnswer: 2
    },
    {
        question: "Which loop structure is used when the number of iterations is not known beforehand in Java?",
        choices: ["for loop", "while loop", "do-while loop", "if-else loop"],
        correctAnswer: 1
    },
    {
        question: "What is the purpose of the 'else' statement in Java?",
        choices: ["To execute a block of code repeatedly", "To specify a block of code to be executed only if a condition is true", "To execute a block of code only if a condition is false", "To exit the loop"],
        correctAnswer: 2
    },
    {
        question: "Which statement is used to specify a block of code to be executed repeatedly until a condition becomes false in Java?",
        choices: ["until", "loop", "do-while", "while"],
        correctAnswer: 3
    },
    {
        question: "In a switch statement, what happens if the 'default' case is omitted?",
        choices: ["The switch statement executes without a default case", "The program throws an exception", "The switch statement terminates", "The next case is executed"],
        correctAnswer: 0
    },
    {
        question: "Which loop structure is used when you want to execute the loop body at least once in Java?",
        choices: ["for loop", "while loop", "do-while loop", "if-else loop"],
        correctAnswer: 2
    },
    {
        question: "How do you specify a block of code to be executed repeatedly while a condition is true in Java?",
        choices: ["repeat", "loop", "while", "do-while"],
        correctAnswer: 2
    }
];

let currentControlStatementQuestionJava = 0;
let controlStatementScoreJava = 0;
let controlStatementAttemptJava = JSON.parse(localStorage.getItem('controlStatementAttemptCountJava')) || 0;
let controlStatementScoresJava = JSON.parse(localStorage.getItem('controlStatementQuizScoresJava')) || [];

const controlStatementQuestionElementJava = document.getElementById('question');
const controlStatementChoicesElementJava = document.getElementById('choices');
const controlStatementResultElementJava = document.getElementById('result');
const controlStatementNextButtonJava = document.getElementById('next-btn');
const controlStatementProgressElementJava = document.getElementById('current-question');
const controlStatementScoresListJava = document.getElementById('scores-list');
const controlStatementReattemptButtonJava = document.getElementById('reattempt-btn');

function loadControlStatementQuestionJava() {
    const q = controlStatementsQuizDataJava[currentControlStatementQuestionJava];
    controlStatementQuestionElementJava.textContent = q.question;

    controlStatementChoicesElementJava.innerHTML = '';
    q.choices.forEach((choice, index) => {
        const li = document.createElement('li');
        li.textContent = choice;
        li.addEventListener('click', () => checkControlStatementAnswerJava(index));
        controlStatementChoicesElementJava.appendChild(li);
    });

    controlStatementProgressElementJava.textContent = currentControlStatementQuestionJava + 1;
}

function checkControlStatementAnswerJava(index) {
    const correctAnswerIndex = controlStatementsQuizDataJava[currentControlStatementQuestionJava].correctAnswer;
    if (index === correctAnswerIndex) {
        controlStatementScoreJava++;
        controlStatementResultElementJava.textContent = 'Correct!';
    } else {
        controlStatementResultElementJava.textContent = `Wrong! The correct answer is: ${controlStatementsQuizDataJava[currentControlStatementQuestionJava].choices[correctAnswerIndex]}`;
    }
    disableControlStatementChoicesJava();
    controlStatementNextButtonJava.disabled = false;
}

function disableControlStatementChoicesJava() {
    controlStatementChoicesElementJava.querySelectorAll('li').forEach(choice => {
        choice.style.cursor = 'not-allowed';
        choice.style.backgroundColor = '#ccc';
    });
}

function nextControlStatementQuestionJava() {
    currentControlStatementQuestionJava++;
    if (currentControlStatementQuestionJava < controlStatementsQuizDataJava.length) {
        loadControlStatementQuestionJava();
        controlStatementResultElementJava.textContent = '';
        controlStatementNextButtonJava.disabled = true;
    } else {
        showControlStatementResultsJava();
    }
}

function showControlStatementResultsJava() {
    controlStatementQuestionElementJava.textContent = `Control Statements Quiz completed! You scored ${controlStatementScoreJava} out of ${controlStatementsQuizDataJava.length}.`;
    controlStatementChoicesElementJava.innerHTML = '';
    controlStatementResultElementJava.textContent = '';
    controlStatementNextButtonJava.style.display = 'none';
    controlStatementReattemptButtonJava.style.display = 'inline-block';

    // Increment attempt count
    controlStatementAttemptJava++;
    localStorage.setItem('controlStatementAttemptCountJava', JSON.stringify(controlStatementAttemptJava));

    // Save score to scores array
    controlStatementScoresJava.push({
        attempt: controlStatementAttemptJava,
        score: controlStatementScoreJava
    });
    localStorage.setItem('controlStatementQuizScoresJava', JSON.stringify(controlStatementScoresJava));

    // Display scores
    displayControlStatementScoresJava();
}

function displayControlStatementScoresJava() {
    controlStatementScoresListJava.innerHTML = '';
    controlStatementScoresJava.forEach(scoreItem => {
        const li = document.createElement('li');
        li.textContent = `Attempt ${scoreItem.attempt}: ${scoreItem.score} / ${controlStatementsQuizDataJava.length}`;
        controlStatementScoresListJava.appendChild(li);
    });
}

function reattemptControlStatementQuizJava() {
    currentControlStatementQuestionJava = 0;
    controlStatementScoreJava = 0;
    controlStatementNextButtonJava.style.display = 'inline-block';
    controlStatementReattemptButtonJava.style.display = 'none';
    loadControlStatementQuestionJava();
    controlStatementResultElementJava.textContent = '';
}

controlStatementNextButtonJava.addEventListener('click', nextControlStatementQuestionJava);
controlStatementReattemptButtonJava.addEventListener('click', reattemptControlStatementQuizJava);

// Initial load
loadControlStatementQuestionJava();
displayControlStatementScoresJava();
