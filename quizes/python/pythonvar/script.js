

const quizData = [{
        question: "Which of the following is not a Python data type?",
        choices: ["Integer", "Boolean", "String Array", "Dictionary"],
        correctAnswer: 2
    },
    {
        question: "What is the result of the expression 5 / 2 in Python?",
        choices: ["2.5", "2", "2.0", "2.2"],
        correctAnswer: 0
    },
    {
        question: "How do you declare a variable in Python?",
        choices: ["var x", "x = 5", "int x = 5", "x = int(5)"],
        correctAnswer: 1
    },
    {
        question: "Which data type is mutable in Python?",
        choices: ["Integer", "Tuple", "Float", "List"],
        correctAnswer: 3
    },
    {
        question: "What is the correct syntax to comment multiple lines in Python?",
        choices: ["// This is a comment", "/* This is a comment */", "# This is a comment", "''' This is a comment '''"],
        correctAnswer: 3
    },
    {
        question: "What will the type() function return for the value 'Hello'?",
        choices: ["str", "int", "float", "list"],
        correctAnswer: 0
    },
    {
        question: "Which of the following statements is true about Python variables?",
        choices: ["Variables must be declared before use", "Variables can have any name without restrictions", "Python variables are statically typed", "Variables can store only numbers"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is a valid variable name in Python?",
        choices: ["2myVar", "_myVar", "my Var", "my-var"],
        correctAnswer: 1
    },
    {
        question: "What will be the output of the following code?\n\nx = 5\nprint('x')",
        choices: ["x", "5", "Nothing is printed", "SyntaxError"],
        correctAnswer: 0
    },
    {
        question: "Which data type is used to store a sequence of characters in Python?",
        choices: ["int", "str", "float", "list"],
        correctAnswer: 1
    },
    {
        question: "What is the result of the expression 'hello' + 'world' in Python?",
        choices: ["helloworld", "'hello' + 'world'", "'hello' 'world'", "SyntaxError"],
        correctAnswer: 0
    },
    {
        question: "Which method can be used to convert a string to uppercase in Python?",
        choices: ["upper()", "toUpper()", "uppercase()", "toUpperCase()"],
        correctAnswer: 0
    },
    {
        question: "What will be the data type of the variable x after the following code?\n\nx = 3.5",
        choices: ["int", "float", "str", "list"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is a valid Python comment?",
        choices: ["/ This is a comment", "// This is a comment", "# This is a comment", "<!-- This is a comment -->"],
        correctAnswer: 2
    },
    {
        question: "How do you check the data type of a variable x in Python?",
        choices: ["type(x)", "typeof(x)", "datatype(x)", "x.type()"],
        correctAnswer: 0
    },
    {
        question: "What is the result of the expression 2 ** 3 in Python?",
        choices: ["6", "8", "4", "16"],
        correctAnswer: 3
    },
    {
        question: "Which of the following is a Python reserved keyword?",
        choices: ["lambda", "function", "method", "declare"],
        correctAnswer: 0
    },
    {
        question: "How do you remove the last item from a list in Python?",
        choices: ["list.remove(-1)", "list.pop()", "list.delete(-1)", "list.removeLast()"],
        correctAnswer: 1
    },
    {
        question: "What is the result of the expression 'Python'[1:4]?",
        choices: ["'Pyt'", "'yth'", "'ytho'", "'ytho'"],
        correctAnswer: 2
    },
    {
        question: "Which of the following is not a valid Python data type?",
        choices: ["tuple", "set", "array", "dictionary"],
        correctAnswer: 2
    },
    {
        question: "What will be the output of the following code?\n\nx = 5\ny = '5'\nprint(x + y)",
        choices: ["10", "55", "SyntaxError", "TypeError"],
        correctAnswer: 3
    },
    {
        question: "Which data type is used to store a collection of data in Python?",
        choices: ["tuple", "list", "set", "dict"],
        correctAnswer: 1
    },
    {
        question: "What is the correct way to round 3.75 to the nearest integer in Python?",
        choices: ["round(3.75)", "ceil(3.75)", "floor(3.75)", "int(3.75)"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is the correct way to create a dictionary in Python?",
        choices: ["{'key': 'value'}", "dict('key'='value')", "dict['key'] = 'value'", "dict(key='value')"],
        correctAnswer: 3
    },
    {
        question: "What will be the output of the following code?\n\nprint(type('5' + '2'))",
        choices: ["<class 'int'>", "<class 'str'>", "<class 'float'>", "<class 'list'>"],
        correctAnswer: 1
    },
    {
        question: "Which of the following statements is used to create a function in Python?",
        choices: ["def functionName():", "function functionName():", "def functionName[]:", "functionName():"],
        correctAnswer: 0
    },
    {
        question: "What will be the result of the expression int('10') in Python?",
        choices: ["10", "'10'", "TypeError", "SyntaxError"],
        correctAnswer: 0
    },
    {
        question: "Which method can be used to remove whitespace from the beginning and end of a string in Python?",
        choices: ["strip()", "trim()", "clean()", "removeWhitespace()"],
        correctAnswer: 0
    },
    {
        question: "What is the result of the expression bool('False') in Python?",
        choices: ["False", "True", "SyntaxError", "TypeError"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is a valid Python variable name?",
        choices: ["2myVar", "_my_Var", "my-var", "myVar"],
        correctAnswer: 1
    },
    {
        question: "What will be the output of the following code?\n\nx = 5\nprint(type(x))",
        choices: ["int", "<class 'int'>", "type", "TypeError"],
        correctAnswer: 1
    },
    {
        question: "Which data type is used to store a sequence of characters in Python?",
        choices: ["int", "str", "char", "sequence"],
        correctAnswer: 1
    }
    // Add more questions as needed
];


let currentQuestion = 0;
let score = 0;
let attempt = JSON.parse(localStorage.getItem('attemptCount')) || 0;

const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const resultElement = document.getElementById('result');
const nextButton = document.getElementById('next-btn');
const progressElement = document.getElementById('current-question');
const scoresList = document.getElementById('scores-list');
const reattemptButton = document.getElementById('reattempt-btn');

// Load scores from localStorage if available
let scores = JSON.parse(localStorage.getItem('quizScores')) || [];

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
    localStorage.setItem('attemptCount', JSON.stringify(attempt));

    // Save score to scores array
    scores.push({
        attempt: attempt,
        score: score
    });
    localStorage.setItem('quizScores', JSON.stringify(scores));

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