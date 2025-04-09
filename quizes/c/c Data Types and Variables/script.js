// Define the quiz data for Data Types and Variables in C
const dataTypesVariablesQuizData = [
    {
        question: "Which of the following is a valid C variable name?",
        choices: ["2variable", "_myVariable", "my Variable", "variable#"],
        correctAnswer: 1
    },
    {
        question: "What is the default value of an integer variable in C?",
        choices: ["0", "null", "undefined", "1"],
        correctAnswer: 0
    },
    {
        question: "Which keyword is used to declare a constant variable in C?",
        choices: ["const", "final", "static", "immutable"],
        correctAnswer: 0
    },
    {
        question: "How do you declare a variable 'count' of type int in C?",
        choices: ["int count;", "variable count;", "count = int;", "declare count as int;"],
        correctAnswer: 0
    },
    {
        question: "What is the size of the 'int' data type in C?",
        choices: ["8 bits", "16 bits", "32 bits", "64 bits"],
        correctAnswer: 2
    },
    {
        question: "Which data type in C is used to store text?",
        choices: ["char", "String", "int", "boolean"],
        correctAnswer: 0
    },
    {
        question: "How do you declare a constant 'PI' of type double in C?",
        choices: ["const double PI = 3.14;", "final double PI = 3.14;", "static double PI = 3.14;", "immutable double PI = 3.14;"],
        correctAnswer: 0
    },
    {
        question: "What is the default value of a boolean variable in C?",
        choices: ["true", "false", "null", "0"],
        correctAnswer: 3
    },
    {
        question: "Which keyword is used to allocate memory to an object in C?",
        choices: ["new", "malloc", "alloc", "create"],
        correctAnswer: 1
    },
    {
        question: "How do you declare a variable 'name' of type char array in C?",
        choices: ["char name[50];", "declare char name[50];", "String name[50];", "var name[50];"],
        correctAnswer: 0
    },
    {
        question: "Which data type in C is used to store decimal numbers?",
        choices: ["float", "double", "decimal", "real"],
        correctAnswer: 1
    },
    {
        question: "How do you declare a constant 'MAX_SIZE' of type int in C?",
        choices: ["const int MAX_SIZE = 100;", "final int MAX_SIZE = 100;", "static final MAX_SIZE = 100;", "immutable int MAX_SIZE = 100;"],
        correctAnswer: 0
    },
    {
        question: "What is the size of the 'long' data type in C?",
        choices: ["8 bits", "16 bits", "32 bits", "64 bits"],
        correctAnswer: 3
    },
    {
        question: "Which data type in C is used to store single characters?",
        choices: ["char", "String", "int", "byte"],
        correctAnswer: 0
    },
    {
        question: "How do you declare a constant 'SPEED_OF_LIGHT' of type double in C?",
        choices: ["const double SPEED_OF_LIGHT = 3.00e8;", "final double SPEED_OF_LIGHT = 3.00e8;", "static double SPEED_OF_LIGHT = 3.00e8;", "immutable double SPEED_OF_LIGHT = 3.00e8;"],
        correctAnswer: 0
    },
    {
        question: "What is the default value of a pointer variable in C?",
        choices: ["null", "0", "undefined", "false"],
        correctAnswer: 0
    },
    {
        question: "Which data type in C is used to store true or false values?",
        choices: ["char", "String", "boolean", "int"],
        correctAnswer: 2
    },
    {
        question: "How do you declare a variable 'price' of type double in C?",
        choices: ["double price;", "declare price as double;", "price = double;", "var price;"],
        correctAnswer: 0
    },
    {
        question: "Which data type in C is used to store very large numbers?",
        choices: ["int", "short", "long", "bigint"],
        correctAnswer: 2
    },
    {
        question: "What is the size of the 'float' data type in C?",
        choices: ["32 bits", "64 bits", "16 bits", "8 bits"],
        correctAnswer: 0
    },
    {
        question: "How do you declare a constant 'VERSION' of type char array in C?",
        choices: ["const char VERSION[] = \"1.0\";", "final char VERSION[] = \"1.0\";", "static final char VERSION[] = \"1.0\";", "immutable char VERSION[] = \"1.0\";"],
        correctAnswer: 0
    },
    {
        question: "What is the default value of a byte variable in C?",
        choices: ["0", "null", "undefined", "1"],
        correctAnswer: 0
    },
    {
        question: "Which keyword is used to declare a variable that is not modifiable after its initialization?",
        choices: ["const", "final", "immutable", "static"],
        correctAnswer: 0
    },
    {
        question: "How do you declare a variable 'isValid' of type _Bool in C?",
        choices: ["_Bool isValid;", "declare isValid as _Bool;", "isValid = _Bool;", "var isValid;"],
        correctAnswer: 0
    },
    {
        question: "What is the size of the 'short' data type in C?",
        choices: ["8 bits", "16 bits", "32 bits", "64 bits"],
        correctAnswer: 1
    },
    {
        question: "Which data type in C is used to store small integers?",
        choices: ["byte", "short", "int", "long"],
        correctAnswer: 1
    },
    {
        question: "How do you declare a constant 'NUM_DAYS' of type int in C?",
        choices: ["const int NUM_DAYS = 7;", "final int NUM_DAYS = 7;", "static final NUM_DAYS = 7;", "immutable int NUM_DAYS = 7;"],
        correctAnswer: 0
    },
    {
        question: "What is the default value of a double variable in C?",
        choices: ["0.0", "null", "undefined", "1.0"],
        correctAnswer: 0
    },
    {
        question: "Which keyword is used to define a file-scope variable in C?",
        choices: ["var", "static", "extern", "global"],
        correctAnswer: 2
    },
    {
        question: "How do you declare a variable 'initial' of type char in C?",
        choices: ["char initial;", "declare initial as char;", "initial = char;", "var initial;"],
        correctAnswer: 0
    },
    {
        question: "What is the size of the 'boolean' data type in C?",
        choices: ["1 bit", "8 bits", "16 bits", "32 bits"],
        correctAnswer: 0
    },
    {
        question: "Which data type in C is used to store large decimal numbers with high precision?",
        choices: ["float", "double", "long double", "real"],
        correctAnswer: 2
    }
];

let currentDataTypeQuestion = 0;
let dataTypeScore = 0;
let dataTypeAttempt = JSON.parse(localStorage.getItem('dataTypeAttemptCount')) || 0;
let dataTypeScores = JSON.parse(localStorage.getItem('dataTypeQuizScores')) || [];

const dataTypeQuestionElement = document.getElementById('question');
const dataTypeChoicesElement = document.getElementById('choices');
const dataTypeResultElement = document.getElementById('result');
const dataTypeNextButton = document.getElementById('next-btn');
const dataTypeProgressElement = document.getElementById('current-question');
const dataTypeScoresList = document.getElementById('scores-list');
const dataTypeReattemptButton = document.getElementById('reattempt-btn');

function loadDataTypeQuestion() {
    const q = dataTypesVariablesQuizData[currentDataTypeQuestion];
    dataTypeQuestionElement.textContent = q.question;

    dataTypeChoicesElement.innerHTML = '';
    q.choices.forEach((choice, index) => {
        const li = document.createElement('li');
        li.textContent = choice;
        li.addEventListener('click', () => checkDataTypeAnswer(index));
        dataTypeChoicesElement.appendChild(li);
    });

    dataTypeProgressElement.textContent = currentDataTypeQuestion + 1;
}

function checkDataTypeAnswer(index) {
    const correctAnswerIndex = dataTypesVariablesQuizData[currentDataTypeQuestion].correctAnswer;
    if (index === correctAnswerIndex) {
        dataTypeScore++;
        dataTypeResultElement.textContent = 'Correct!';
    } else {
        dataTypeResultElement.textContent = `Wrong! The correct answer is: ${dataTypesVariablesQuizData[currentDataTypeQuestion].choices[correctAnswerIndex]}`;
    }
    disableDataTypeChoices();
    dataTypeNextButton.disabled = false;
}

function disableDataTypeChoices() {
    dataTypeChoicesElement.querySelectorAll('li').forEach(choice => {
        choice.style.cursor = 'not-allowed';
        choice.style.backgroundColor = '#ccc';
    });
}

function nextDataTypeQuestion() {
    currentDataTypeQuestion++;
    if (currentDataTypeQuestion < dataTypesVariablesQuizData.length) {
        loadDataTypeQuestion();
        dataTypeResultElement.textContent = '';
        dataTypeNextButton.disabled = true;
    } else {
        showDataTypeResults();
    }
}

function showDataTypeResults() {
    dataTypeQuestionElement.textContent = `Data Types and Variables Quiz completed! You scored ${dataTypeScore} out of ${dataTypesVariablesQuizData.length}.`;
    dataTypeChoicesElement.innerHTML = '';
    dataTypeResultElement.textContent = '';
    dataTypeNextButton.style.display = 'none';
    dataTypeReattemptButton.style.display = 'inline-block';

    // Increment attempt count
    dataTypeAttempt++;
    localStorage.setItem('dataTypeAttemptCount', JSON.stringify(dataTypeAttempt));

    // Save score to scores array
    dataTypeScores.push({
        attempt: dataTypeAttempt,
        score: dataTypeScore
    });
    localStorage.setItem('dataTypeQuizScores', JSON.stringify(dataTypeScores));

    // Display scores
    displayDataTypeScores();
}

function displayDataTypeScores() {
    dataTypeScoresList.innerHTML = '';
    dataTypeScores.forEach(scoreItem => {
        const li = document.createElement('li');
        li.textContent = `Attempt ${scoreItem.attempt}: ${scoreItem.score} / ${dataTypesVariablesQuizData.length}`;
        dataTypeScoresList.appendChild(li);
    });
}

function reattemptDataTypeQuiz() {
    currentDataTypeQuestion = 0;
    dataTypeScore = 0;
    dataTypeNextButton.style.display = 'inline-block';
    dataTypeReattemptButton.style.display = 'none';
    loadDataTypeQuestion();
}

// Event listeners
dataTypeNextButton.addEventListener('click', nextDataTypeQuestion);
dataTypeReattemptButton.addEventListener('click', reattemptDataTypeQuiz);

// Initialize
loadDataTypeQuestion();
displayDataTypeScores();
