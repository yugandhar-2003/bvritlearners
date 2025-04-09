const quizData = [
    {
        question: "Which keyword is used to define a function in Python?",
        choices: ["def", "function", "define", "func"],
        correctAnswer: 0
    },
    {
        question: "What is the output of the following code?\n\n```python\n"
                + "def my_function():\n"
                + "    return 'Hello'\n"
                + "print(my_function())\n```",
        choices: ["'Hello'", "Hello", "None", "SyntaxError"],
        correctAnswer: 0
    },
    {
        question: "How do you call a function named `my_function` in Python?",
        choices: ["my_function()", "call my_function", "function my_function()", "run my_function"],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of the `return` statement in a Python function?",
        choices: ["To stop the execution of the function", "To print a value to the console", "To define a function's name", "To return a value from the function"],
        correctAnswer: 3
    },
    {
        question: "How do you pass data (arguments) into a function in Python?",
        choices: ["By using the `pass` keyword", "By writing the data directly in the function definition", "By using parameters inside the parentheses of the function", "By using the `data` keyword"],
        correctAnswer: 2
    },
    {
        question: "Which of the following statements about function arguments in Python is correct?",
        choices: ["Functions in Python cannot accept arguments", "Functions in Python can accept a variable number of arguments", "Functions in Python can only accept one argument", "Functions in Python must always accept two arguments"],
        correctAnswer: 1
    },
    {
        question: "What is the output of the following code?\n\n```python\n"
                + "def add(a, b):\n"
                + "    return a + b\n"
                + "print(add(2, 3))\n```",
        choices: ["5", "'5'", "SyntaxError", "TypeError"],
        correctAnswer: 0
    },
    {
        question: "In Python, can a function return more than one value?",
        choices: ["Yes", "No", "Only if it's a built-in function", "Only if the values are of the same data type"],
        correctAnswer: 0
    },
    {
        question: "What does the `pass` statement do in a Python function?",
        choices: ["Stops the function execution", "Prints the value of variables", "Does nothing and acts as a placeholder", "Deletes the function"],
        correctAnswer: 2
    },
    {
        question: "Which of the following is a correct way to define a function that takes no arguments in Python?",
        choices: ["def my_function:", "function my_function():", "def my_function():", "define my_function():"],
        correctAnswer: 2
    },
    {
        question: "What is the scope of variables defined inside a function in Python?",
        choices: ["Global scope", "Local scope", "Class scope", "Module scope"],
        correctAnswer: 1
    },
    {
        question: "What is the purpose of the `lambda` keyword in Python?",
        choices: ["To define a variable", "To create anonymous functions", "To import modules", "To declare a class"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is used to call a function recursively in Python?",
        choices: ["recurse()", "call()", "self()", "The function name itself"],
        correctAnswer: 3
    },
    {
        question: "What is the output of the following code?\n\n```python\n"
                + "def my_function(x):\n"
                + "    if x > 0:\n"
                + "        return 'Positive'\n"
                + "    elif x < 0:\n"
                + "        return 'Negative'\n"
                + "    else:\n"
                + "        return 'Zero'\n"
                + "print(my_function(5))\n```",
        choices: ["Positive", "5", "None", "SyntaxError"],
        correctAnswer: 0
    },
    {
        question: "What is recursion in Python?",
        choices: ["A built-in function", "A function that calls itself", "A function with no return statement", "A loop structure"],
        correctAnswer: 1
    },
    {
        question: "Which keyword is used to pass a function as an argument to another function in Python?",
        choices: ["pass", "func", "def", "lambda"],
        correctAnswer: 3
    },
    {
        question: "What is the purpose of the `map()` function in Python?",
        choices: ["To apply a function to every item in an iterable", "To create a map of locations", "To map variables to memory addresses", "To map a function to a variable"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is a correct way to define a function that accepts a variable number of arguments in Python?",
        choices: ["def my_function(*args):", "def my_function(args):", "def my_function(arguments):", "def my_function(*):"],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of the `__init__` method in Python classes?",
        choices: ["To initialize a new instance of a class", "To define private methods", "To import modules", "To call functions"],
        correctAnswer: 0
    },
    {
        question: "What is a decorator in Python?",
        choices: ["A comment that starts with #@decorator", "A function that modifies the behavior of another function", "A built-in function", "An import statement"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is used to raise an exception in Python?",
        choices: ["exception()", "raise Exception()", "throw Exception", "try...catch"],
        correctAnswer: 1
    },
    {
        question: "What does the `global` keyword do in Python?",
        choices: ["Declares a variable as global within a function", "Prints the value of a global variable", "Imports global modules", "Deletes global variables"],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of the `staticmethod` decorator in Python?",
        choices: ["To define a static method", "To import static modules", "To access global variables", "To call static functions"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is a correct way to define a function with default arguments in Python?",
        choices: ["def my_function(default):", "def my_function(default=1):", "def my_function(): default = 1", "def my_function(): default argument"],
        correctAnswer: 1
    },
    {
        question: "What is the purpose of the `*args` and `**kwargs` in Python function definitions?",
        choices: ["To define variable arguments and keyword arguments respectively", "To call functions with arguments", "To delete arguments and keyword arguments", "To import modules"],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of the `yield` keyword in Python?",
        choices: ["To terminate a function", "To yield control back to the calling function", "To define a generator", "To import generators"],
        correctAnswer: 2
    },
    {
        question: "Which of the following is used to define a recursive function in Python?",
        choices: ["recurse()", "self()", "def()", "The function name itself"],
        correctAnswer: 3
    },
    {
        question: "What is a lambda function in Python?",
        choices: ["A function defined using the `lambda` keyword", "A function that calls itself", "A function with no return statement", "A loop structure"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is used to call a function within itself in Python?",
        choices: ["recurse()", "call()", "self()", "loop()"],
        correctAnswer: 2
    },
    {
        question: "What is the output of the following code?\n\n```python\n"
                + "def my_function(n):\n"
                + "    if n <= 1:\n"
                + "        return n\n"
                + "    else:\n"
                + "        return my_function(n-1) + my_function(n-2)\n"
                + "print(my_function(5))\n```",
        choices: ["5", "8", "13", "21"],
        correctAnswer: 3
    }
    // Add more function-related questions as needed
];
let currentQuestion = 0;
let score = 0;
let attempt = JSON.parse(localStorage.getItem('functionAttemptCount')) || 0;

const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const resultElement = document.getElementById('result');
const nextButton = document.getElementById('next-btn');
const progressElement = document.getElementById('current-question');
const scoresList = document.getElementById('scores-list');
const reattemptButton = document.getElementById('reattempt-btn');

// Load scores from localStorage if available
let scores = JSON.parse(localStorage.getItem('functionQuizScores')) || [];

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
    localStorage.setItem('functionAttemptCount', JSON.stringify(attempt));

    // Save score to scores array
    scores.push({
        attempt: attempt,
        score: score
    });
    localStorage.setItem('functionQuizScores', JSON.stringify(scores));

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