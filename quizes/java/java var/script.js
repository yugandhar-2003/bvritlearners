// Define the quiz data for Data Types and Variables in Java
const javaDataTypesQuizData = [
    {
        question: "Which of the following is a valid Java variable name?",
        choices: ["2variable", "_myVariable", "my Variable", "variable#"],
        correctAnswer: 1
    },
    {
        question: "What is the default value of an integer variable in Java?",
        choices: ["0", "null", "undefined", "1"],
        correctAnswer: 0
    },
    {
        question: "Which keyword is used to declare a constant variable in Java?",
        choices: ["final", "const", "static", "immutable"],
        correctAnswer: 0
    },
    {
        question: "How do you declare a variable 'count' of type int in Java?",
        choices: ["int count", "variable count", "count = int", "declare count as int"],
        correctAnswer: 0
    },
    {
        question: "What is the size of the 'int' data type in Java?",
        choices: ["8 bits", "16 bits", "32 bits", "64 bits"],
        correctAnswer: 2
    },
    {
        question: "Which data type in Java is used to store text?",
        choices: ["char", "String", "int", "boolean"],
        correctAnswer: 1
    },
    {
        question: "How do you declare a constant 'PI' of type double in Java?",
        choices: ["const PI = 3.14", "final PI = 3.14", "static double PI = 3.14", "immutable double PI = 3.14"],
        correctAnswer: 1
    },
    {
        question: "What is the default value of a boolean variable in Java?",
        choices: ["true", "false", "null", "0"],
        correctAnswer: 1
    },
    {
        question: "Which keyword is used to allocate memory to an object in Java?",
        choices: ["new", "malloc", "alloc", "create"],
        correctAnswer: 0
    },
    {
        question: "How do you declare a variable 'name' of type String in Java?",
        choices: ["string name", "declare String name", "String name", "var name"],
        correctAnswer: 2
    },
    {
        question: "Which data type in Java is used to store decimal numbers?",
        choices: ["float", "double", "decimal", "real"],
        correctAnswer: 1
    },
    {
        question: "How do you declare a constant 'MAX_SIZE' of type int in Java?",
        choices: ["const int MAX_SIZE = 100", "final int MAX_SIZE = 100", "static final MAX_SIZE = 100", "immutable int MAX_SIZE = 100"],
        correctAnswer: 1
    },
    {
        question: "What is the size of the 'long' data type in Java?",
        choices: ["8 bits", "16 bits", "32 bits", "64 bits"],
        correctAnswer: 3
    },
    {
        question: "Which data type in Java is used to store single characters?",
        choices: ["char", "String", "int", "byte"],
        correctAnswer: 0
    },
    {
        question: "How do you declare a constant 'SPEED_OF_LIGHT' of type double in Java?",
        choices: ["const SPEED_OF_LIGHT = 3.00e8", "final SPEED_OF_LIGHT = 3.00e8", "static double SPEED_OF_LIGHT = 3.00e8", "immutable double SPEED_OF_LIGHT = 3.00e8"],
        correctAnswer: 1
    },
    {
        question: "What is the default value of an object reference variable in Java?",
        choices: ["null", "0", "undefined", "false"],
        correctAnswer: 0
    },
    {
        question: "Which data type in Java is used to store true or false values?",
        choices: ["char", "String", "boolean", "int"],
        correctAnswer: 2
    },
    {
        question: "How do you declare a variable 'price' of type double in Java?",
        choices: ["double price", "declare price as double", "price = double", "var price"],
        correctAnswer: 0
    },
    {
        question: "Which data type in Java is used to store very large numbers?",
        choices: ["int", "short", "long", "bigint"],
        correctAnswer: 2
    },
    {
        question: "What is the size of the 'float' data type in Java?",
        choices: ["32 bits", "64 bits", "16 bits", "8 bits"],
        correctAnswer: 0
    },
    {
        question: "How do you declare a constant 'VERSION' of type String in Java?",
        choices: ["const String VERSION = \"1.0\"", "final String VERSION = \"1.0\"", "static final String VERSION = \"1.0\"", "immutable String VERSION = \"1.0\""],
        correctAnswer: 1
    },
    {
        question: "What is the default value of a byte variable in Java?",
        choices: ["0", "null", "undefined", "1"],
        correctAnswer: 0
    },
    {
        question: "Which keyword is used to declare a variable that is not modifiable after its initialization?",
        choices: ["final", "const", "immutable", "static"],
        correctAnswer: 0
    },
    {
        question: "How do you declare a variable 'isValid' of type boolean in Java?",
        choices: ["boolean isValid", "declare isValid as boolean", "isValid = boolean", "var isValid"],
        correctAnswer: 0
    },
    {
        question: "What is the size of the 'short' data type in Java?",
        choices: ["8 bits", "16 bits", "32 bits", "64 bits"],
        correctAnswer: 1
    },
    {
        question: "Which data type in Java is used to store small integers?",
        choices: ["byte", "short", "int", "long"],
        correctAnswer: 0
    },
    {
        question: "How do you declare a constant 'NUM_DAYS' of type int in Java?",
        choices: ["const NUM_DAYS = 7", "final int NUM_DAYS = 7", "static final NUM_DAYS = 7", "immutable int NUM_DAYS = 7"],
        correctAnswer: 1
    },
    {
        question: "What is the default value of a double variable in Java?",
        choices: ["0.0", "null", "undefined", "1.0"],
        correctAnswer: 0
    },
    {
        question: "Which keyword is used to define a class-level variable in Java?",
        choices: ["var", "static", "class", "instance"],
        correctAnswer: 4
    },
    {
        question: "How do you declare a variable 'initial' of type char in Java?",
        choices: ["char initial", "declare initial as char", "initial = char", "var initial"],
        correctAnswer: 3
    },
    {
        question: "What is the size of the 'boolean' data type in Java?",
        choices: ["1 bit", "8 bits", "16 bits", "32 bits"],
        correctAnswer: 0
    },
    {
        question: "Which data type in Java is used to store large decimal numbers with high precision?",
        choices: ["float", "double", "decimal", "real"],
        correctAnswer: 2
    }
];

// Variables for quiz control
let currentQuestion = 0;
let score = 0;
let attempt = JSON.parse(localStorage.getItem('javaDataTypesAttemptCount')) || 0;
let scores = JSON.parse(localStorage.getItem('javaDataTypesQuizScores')) || [];

// DOM Elements
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const resultElement = document.getElementById('result');
const nextButton = document.getElementById('next-btn');
const progressElement = document.getElementById('current-question');
const scoresList = document.getElementById('scores-list');
const reattemptButton = document.getElementById('reattempt-btn');

// Function to load question
function loadQuestion() {
    const q = javaDataTypesQuizData[currentQuestion];
    questionElement.textContent = q.question;

    // Clear result text
    resultElement.textContent = '';

    // Reset choices
    choicesElement.innerHTML = '';
    q.choices.forEach((choice, index) => {
        const li = document.createElement('li');
        li.textContent = choice;
        li.addEventListener('click', () => checkAnswer(index));
        li.dataset.index = index; // Add data attribute for index
        choicesElement.appendChild(li);
    });

    // Update progress
    progressElement.textContent = currentQuestion + 1;

    // Enable next button only after a choice is selected
    nextButton.disabled = true;
}

// Function to check answer
function checkAnswer(index) {
    const correctAnswerIndex = javaDataTypesQuizData[currentQuestion].correctAnswer;
    const choices = choicesElement.querySelectorAll('li');
    const selectedChoice = choices[index];

    // Add selected class to the clicked choice
    selectedChoice.classList.add('selected');

    if (index === correctAnswerIndex) {
        score++;
        resultElement.textContent = 'Correct!';
        selectedChoice.classList.add('correct');
    } else {
        resultElement.textContent = `Wrong! The correct answer is: ${javaDataTypesQuizData[currentQuestion].choices[correctAnswerIndex]}`;
        selectedChoice.classList.add('incorrect');

        // Highlight the correct answer
        choices[correctAnswerIndex].classList.add('correct');
    }
    disableChoices();
    nextButton.disabled = false;
}

// Function to disable choices after an answer is selected
function disableChoices() {
    choicesElement.querySelectorAll('li').forEach(choice => {
        choice.style.cursor = 'not-allowed';
        // Don't change background color here, we're using classes now
    });
}

// Function to handle next question
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < javaDataTypesQuizData.length) {
        loadQuestion();
        resultElement.textContent = '';
        nextButton.disabled = true;
    } else {
        showResults();
    }
}

// Function to show quiz results
function showResults() {
    // Create a result container with modern styling
    const resultContainer = document.createElement('div');
    resultContainer.style.padding = '2rem';
    resultContainer.style.backgroundColor = 'var(--dark-surface-2)';
    resultContainer.style.borderRadius = 'var(--border-radius-lg)';
    resultContainer.style.marginBottom = '2rem';
    resultContainer.style.border = '1px solid var(--dark-border)';
    resultContainer.style.animation = 'fadeIn 0.5s ease-out';

    // Add result heading
    const resultHeading = document.createElement('h2');
    resultHeading.textContent = 'Quiz Completed!';
    resultHeading.style.marginBottom = '1rem';
    resultHeading.style.color = 'var(--primary-400)';
    resultContainer.appendChild(resultHeading);

    // Add score information
    const scoreInfo = document.createElement('p');
    scoreInfo.innerHTML = `You scored <strong>${score}</strong> out of <strong>${javaDataTypesQuizData.length}</strong>`;
    scoreInfo.style.fontSize = '1.2rem';
    scoreInfo.style.marginBottom = '1.5rem';
    resultContainer.appendChild(scoreInfo);

    // Add performance message
    const performanceMsg = document.createElement('p');
    const percentage = (score / javaDataTypesQuizData.length) * 100;
    if (percentage >= 80) {
        performanceMsg.textContent = 'Excellent! You have a great understanding of Java variables and data types.';
        performanceMsg.style.color = 'var(--success-color)';
    } else if (percentage >= 60) {
        performanceMsg.textContent = 'Good job! You have a solid understanding of Java variables and data types.';
        performanceMsg.style.color = 'var(--primary-color)';
    } else {
        performanceMsg.textContent = 'Keep practicing! Review the Java variables and data types concepts.';
        performanceMsg.style.color = 'var(--warning-color)';
    }
    resultContainer.appendChild(performanceMsg);

    // Clear and update the UI
    questionElement.textContent = '';
    choicesElement.innerHTML = '';
    choicesElement.appendChild(resultContainer);
    resultElement.textContent = '';
    nextButton.style.display = 'none';
    reattemptButton.style.display = 'inline-block';

    // Increment attempt count
    attempt++;
    localStorage.setItem('javaDataTypesAttemptCount', JSON.stringify(attempt));

    // Save score to scores array
    scores.push({
        attempt: attempt,
        score: score
    });
    localStorage.setItem('javaDataTypesQuizScores', JSON.stringify(scores));

    // Display scores
    displayScores();
}

// Function to display scores
function displayScores() {
    scoresList.innerHTML = '';

    if (scores.length === 0) {
        const emptyMessage = document.createElement('li');
        emptyMessage.textContent = 'No previous attempts';
        emptyMessage.style.fontStyle = 'italic';
        emptyMessage.style.color = 'var(--text-secondary)';
        scoresList.appendChild(emptyMessage);
        return;
    }

    scores.forEach((scoreItem, index) => {
        const li = document.createElement('li');
        const percentage = (scoreItem.score / javaDataTypesQuizData.length) * 100;

        // Create a more detailed score item
        const attemptLabel = document.createElement('span');
        attemptLabel.textContent = `Attempt ${scoreItem.attempt}: `;
        attemptLabel.style.fontWeight = '500';
        li.appendChild(attemptLabel);

        const scoreValue = document.createElement('span');
        scoreValue.textContent = `${scoreItem.score} / ${javaDataTypesQuizData.length} `;
        scoreValue.style.fontWeight = '600';
        li.appendChild(scoreValue);

        const percentageSpan = document.createElement('span');
        percentageSpan.textContent = `(${percentage.toFixed(0)}%)`;

        // Color code the percentage based on performance
        if (percentage >= 80) {
            percentageSpan.style.color = 'var(--success-color)';
        } else if (percentage >= 60) {
            percentageSpan.style.color = 'var(--primary-color)';
        } else {
            percentageSpan.style.color = 'var(--warning-color)';
        }

        li.appendChild(percentageSpan);

        // Add animation delay for staggered appearance
        li.style.animationDelay = `${index * 0.1}s`;

        scoresList.appendChild(li);
    });
}

// Function to reattempt quiz
function reattemptQuiz() {
    // Reset quiz state
    currentQuestion = 0;
    score = 0;

    // Show next button and hide reattempt button
    nextButton.style.display = 'inline-block';
    reattemptButton.style.display = 'none';

    // Clear result text
    resultElement.textContent = '';

    // Add a smooth transition effect
    const container = document.querySelector('.container');
    container.style.opacity = '0.5';
    container.style.transform = 'scale(0.98)';

    // After a short delay, reset the container and load the first question
    setTimeout(() => {
        container.style.opacity = '1';
        container.style.transform = 'scale(1)';
        loadQuestion();
    }, 300);
}

// Event listeners
nextButton.addEventListener('click', nextQuestion);
reattemptButton.addEventListener('click', reattemptQuiz);

// Initial load
loadQuestion();
displayScores();
