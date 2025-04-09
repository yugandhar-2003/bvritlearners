const quizDataModules = [
    {
        question: "What is a module in Python?",
        choices: ["A Python script", "A package to install Python libraries", "A file containing Python definitions and statements", "An executable Python application"],
        correctAnswer: 2
    },
    {
        question: "Which keyword is used to import a module in Python?",
        choices: ["import", "use", "require", "include"],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of '__init__.py' file in a Python package?",
        choices: ["To indicate that the directory is a package", "To initialize variables in the package", "To define module-level constants", "To handle package initialization"],
        correctAnswer: 3
    },
    {
        question: "Which statement is used to reload a previously imported module in Python?",
        choices: ["reload(module)", "import module", "from module import reload", "None of the above"],
        correctAnswer: 0
    },
    {
        question: "What is the difference between 'import module' and 'from module import ...' in Python?",
        choices: ["There is no difference", "'import module' imports the entire module, 'from module import ...' imports specific items", "'import module' is used for built-in modules only, 'from module import ...' is used for custom modules", "None of the above"],
        correctAnswer: 1
    },
    {
        question: "Which statement is used to prevent a module from executing code when imported?",
        choices: ["__main__", "__init__", "__name__", "__module__"],
        correctAnswer: 2
    },
    {
        question: "What is a namespace in Python?",
        choices: ["A specific area where a variable is defined", "A way to organize modules", "A unique identifier for a module", "None of the above"],
        correctAnswer: 0
    },
    {
        question: "What does the 'dir()' function do in Python?",
        choices: ["Lists all built-in functions", "Lists all attributes of a module or object", "Lists all files in the current directory", "None of the above"],
        correctAnswer: 1
    },
    {
        question: "Which module in Python provides support for creating and managing zip archives?",
        choices: ["zipfile", "archivemodule", "zip", "None of the above"],
        correctAnswer: 0
    },
    {
        question: "What is a package in Python?",
        choices: ["A collection of related modules", "A large software application", "A specialized data type", "None of the above"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is not a built-in Python module?",
        choices: ["os", "sys", "math", "java"],
        correctAnswer: 3
    },
    {
        question: "What is the purpose of the '__all__' variable in Python?",
        choices: ["To list all modules in a package", "To list all attributes of a module that should be imported with 'from module import *'", "To define global variables in a module", "None of the above"],
        correctAnswer: 1
    },
    {
        question: "What does the 'sys.path' variable contain in Python?",
        choices: ["The path of the current script", "The paths where Python searches for modules", "The path of the Python interpreter", "None of the above"],
        correctAnswer: 1
    },
    {
        question: "Which module in Python provides functionality for running shell commands?",
        choices: ["subprocess", "shell", "command", "None of the above"],
        correctAnswer: 0
    },
    {
        question: "What does 'virtualenv' in Python help to achieve?",
        choices: ["Virtual machine environment for Python", "Creating isolated Python environments", "A Python package manager", "None of the above"],
        correctAnswer: 1
    },
    {
        question: "Which module in Python provides support for working with dates and times?",
        choices: ["datetime", "time", "calendar", "None of the above"],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of the '__file__' attribute in a Python module?",
        choices: ["To specify the file path of the module", "To store metadata about the module", "To provide the module's name", "None of the above"],
        correctAnswer: 0
    },
    {
        question: "Which statement is used to install external packages in Python using pip?",
        choices: ["install package_name", "pip install package_name", "package_name install", "None of the above"],
        correctAnswer: 1
    },
    {
        question: "What does the 'pkgutil' module provide in Python?",
        choices: ["Utilities for package installation", "Utilities for working with package namespaces", "Utilities for package generation", "None of the above"],
        correctAnswer: 1
    },
    {
        question: "Which module in Python is used to parse XML documents?",
        choices: ["xmlparser", "xml", "xml.etree.ElementTree", "None of the above"],
        correctAnswer: 2
    },
    {
        question: "What does the 'pickle' module in Python provide?",
        choices: ["Data serialization and deserialization", "Database connectivity", "Text processing utilities", "None of the above"],
        correctAnswer: 0
    },
    {
        question: "Which module in Python is used for sending emails?",
        choices: ["smtplib", "email", "mail", "None of the above"],
        correctAnswer: 0
    },
    {
        question: "What does the 'platform' module in Python provide?",
        choices: ["Information about the current platform", "Utilities for creating platforms", "APIs for platform-specific functions", "None of the above"],
        correctAnswer: 0
    },
    {
        question: "Which module in Python provides support for regular expressions?",
        choices: ["re", "regex", "regexp", "None of the above"],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of the 'itertools' module in Python?",
        choices: ["Working with iterators", "Generating permutations and combinations", "Handling lists efficiently", "None of the above"],
        correctAnswer: 1
    },
    {
        question: "Which module in Python provides support for mathematical operations?",
        choices: ["mathematics", "maths", "math", "None of the above"],
        correctAnswer: 2
    },
    {
        question: "What does the 'logging' module in Python provide?",
        choices: ["Logging messages to files", "Error handling utilities", "Debugging support", "None of the above"],
        correctAnswer: 0
    },
    {
        question: "Which module in Python provides support for multi-threading?",
        choices: ["thread", "threading", "multithreading", "None of the above"],
        correctAnswer: 1
    },
    {
        question: "What does the 'unittest' module in Python provide?",
        choices: ["Unit testing framework", "Integration testing framework", "End-to-end testing framework", "None of the above"],
        correctAnswer: 0
    },
    {
        question: "Which module in Python is used to interact with databases?",
        choices: ["sql", "sqlite", "db", "None of the above"],
        correctAnswer: 1
    },
    {
        question: "What is the purpose of the 'requests' module in Python?",
        choices: ["Working with HTTP requests", "Managing network connections", "Handling file transfers", "None of the above"],
        correctAnswer: 0
    }
    // Add more questions as needed
];


let currentQuestionModules = 0;
let scoreModules = 0;
let attemptModules = JSON.parse(localStorage.getItem('attemptCountModules')) || 0;
let scoresModules = JSON.parse(localStorage.getItem('quizScoresModules')) || [];

const questionElementModules = document.getElementById('question');
const choicesElementModules = document.getElementById('choices');
const resultElementModules = document.getElementById('result');
const nextButtonModules = document.getElementById('next-btn');
const progressElementModules = document.getElementById('current-question');
const scoresListModules = document.getElementById('scores-list');
const reattemptButtonModules = document.getElementById('reattempt-btn');

function loadQuestionModules() {
    const q = quizDataModules[currentQuestionModules];
    questionElementModules.textContent = q.question;

    choicesElementModules.innerHTML = '';
    q.choices.forEach((choice, index) => {
        const li = document.createElement('li');
        li.textContent = choice;
        li.addEventListener('click', () => checkAnswerModules(index));
        choicesElementModules.appendChild(li);
    });

    progressElementModules.textContent = currentQuestionModules + 1;
}

function checkAnswerModules(index) {
    const correctAnswerIndex = quizDataModules[currentQuestionModules].correctAnswer;
    if (index === correctAnswerIndex) {
        scoreModules++;
        resultElementModules.textContent = 'Correct!';
    } else {
        resultElementModules.textContent = `Wrong! The correct answer is: ${quizDataModules[currentQuestionModules].choices[correctAnswerIndex]}`;
    }
    disableChoicesModules();
    nextButtonModules.disabled = false;
}

function disableChoicesModules() {
    choicesElementModules.querySelectorAll('li').forEach(choice => {
        choice.style.cursor = 'not-allowed';
        choice.style.backgroundColor = '#ccc';
    });
}

function nextQuestionModules() {
    currentQuestionModules++;
    if (currentQuestionModules < quizDataModules.length) {
        loadQuestionModules();
        resultElementModules.textContent = '';
        nextButtonModules.disabled = true;
    } else {
        showResultsModules();
    }
}

function showResultsModules() {
    questionElementModules.textContent = `Quiz completed! You scored ${scoreModules} out of ${quizDataModules.length}.`;
    choicesElementModules.innerHTML = '';
    resultElementModules.textContent = '';
    nextButtonModules.style.display = 'none';
    reattemptButtonModules.style.display = 'inline-block';

    // Increment attempt count
    attemptModules++;
    localStorage.setItem('attemptCountModules', JSON.stringify(attemptModules));

    // Save score to scores array
    scoresModules.push({
        attempt: attemptModules,
        score: scoreModules
    });
    localStorage.setItem('quizScoresModules', JSON.stringify(scoresModules));

    // Display scores
    displayScoresModules();
}

function displayScoresModules() {
    scoresListModules.innerHTML = '';
    scoresModules.forEach(scoreItem => {
        const li = document.createElement('li');
        li.textContent = `Attempt ${scoreItem.attempt}: ${scoreItem.score} / ${quizDataModules.length}`;
        scoresListModules.appendChild(li);
    });
}

function reattemptQuizModules() {
    currentQuestionModules = 0;
    scoreModules = 0;
    nextButtonModules.style.display = 'inline-block';
    reattemptButtonModules.style.display = 'none';
    loadQuestionModules();
    resultElementModules.textContent = '';
}

nextButtonModules.addEventListener('click', nextQuestionModules);
reattemptButtonModules.addEventListener('click', reattemptQuizModules);

// Initial load
loadQuestionModules();
displayScoresModules();
