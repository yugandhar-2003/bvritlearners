// Define the quiz data for Functions in C
const functionsCQuizData = [
    {
        question: "Which keyword is used to declare a function in C?",
        choices: ["function", "method", "void", "def"],
        correctAnswer: 2
    },
    {
        question: "What is the return type of a function that doesn't return any value?",
        choices: ["void", "null", "none", "empty"],
        correctAnswer: 0
    },
    {
        question: "How do you declare a function 'add' that takes two integers and returns an integer in C?",
        choices: ["add(int a, int b)", "function add(int a, int b)", "int add(int a, int b)", "def add(int a, int b)"],
        correctAnswer: 2
    },
    {
        question: "Which keyword is used to define the start of a function definition in C?",
        choices: ["begin", "function", "start", "void"],
        correctAnswer: 3
    },
    {
        question: "How do you call a function 'calculate' that takes no arguments and returns void in C?",
        choices: ["calculate()", "function calculate()", "call calculate()", "void calculate()"],
        correctAnswer: 0
    },
    {
        question: "What is a function prototype in C?",
        choices: ["A function that has no body", "A function declaration that tells the compiler about a function's name, return type, and parameters", "A function that returns a function pointer", "A function that can take variable arguments"],
        correctAnswer: 1
    },
    {
        question: "How do you define a function 'average' that takes a variable number of integers and returns a float in C?",
        choices: ["float average(int ...)", "float average(int[])", "float average(int *)", "average(float)"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is true about function arguments in C?",
        choices: ["Arguments are optional in C functions", "Functions can only take a maximum of 3 arguments", "Function arguments can have default values", "Arguments must match in type and order with the function declaration"],
        correctAnswer: 3
    },
    {
        question: "What is recursion in the context of C functions?",
        choices: ["A function that calls another function", "A function that takes multiple arguments", "A function that calls itself", "A function that returns a function pointer"],
        correctAnswer: 2
    },
    {
        question: "How do you declare a function pointer 'ptr' that points to a function returning void and taking no arguments in C?",
        choices: ["ptr = void *()", "void (*ptr)()", "ptr = void (*)()", "void ptr()"],
        correctAnswer: 1
    },
    {
        question: "Which keyword is used in C to pass arguments by reference to a function?",
        choices: ["passbyref", "reference", "ref", "pointer"],
        correctAnswer: 3
    },
    {
        question: "How do you declare a function 'power' that takes two integers and returns an integer representing a^b in C?",
        choices: ["power(int a, int b)", "int power(int a, int b)", "define power(int a, int b)", "function power(int a, int b)"],
        correctAnswer: 1
    },
    {
        question: "What is a static function in C?",
        choices: ["A function that cannot be called directly", "A function that can only be called from the main function", "A function that can only be called once", "A function whose scope is limited to the file where it is declared"],
        correctAnswer: 3
    },
    {
        question: "How do you declare a recursive function 'factorial' that computes n! in C?",
        choices: ["factorial(n)", "int factorial(int n)", "define factorial(int n)", "function factorial(int n)"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is a valid function definition in C?",
        choices: ["void function() { }", "function void() { }", "void function(void) { }", "void function(void);"],
        correctAnswer: 2
    },
    {
        question: "What is a function signature in C?",
        choices: ["The name of the function", "The return type and the number of parameters of a function", "The body of the function", "The keyword used to define the function"],
        correctAnswer: 1
    },
    {
        question: "How do you declare a function 'cube' that takes an integer pointer and returns void in C?",
        choices: ["void cube(int *)", "cube(void int)", "function cube(int)", "cube(int *) void"],
        correctAnswer: 0
    },
    {
        question: "Which keyword is used to return a value from a function in C?",
        choices: ["return", "yield", "exit", "terminate"],
        correctAnswer: 0
    },
    {
        question: "How do you define a function 'swap' that exchanges the values of two integers in C?",
        choices: ["swap(int a, int b)", "void swap(int a, int b)", "define swap(int a, int b)", "function swap(int a, int b)"],
        correctAnswer: 1
    },
    {
        question: "What is the purpose of the 'main' function in a C program?",
        choices: ["To execute other functions", "To declare variables", "To initialize the program", "To start the execution of the program"],
        correctAnswer: 3
    },
    {
        question: "How do you declare a function 'printMessage' that takes a string and returns void in C?",
        choices: ["void printMessage(string)", "printMessage(void string)", "printMessage(string)", "function printMessage(string)"],
        correctAnswer: 2
    },
    {
        question: "What is function overloading in C?",
        choices: ["Defining multiple functions with the same name but different return types", "Defining multiple functions with the same name but different parameter types or number of parameters", "Defining multiple functions with the same name and same return type", "Defining multiple functions with different names"],
        correctAnswer: 1
    },
    {
        question: "How do you declare a function 'max' that returns the maximum of two integers in C?",
        choices: ["max(int a, int b)", "int max(int a, int b)", "define max(int a, int b)", "function max(int a, int b)"],
        correctAnswer: 1
    },
    {
        question: "Which keyword is used in C to pass arguments by value to a function?",
        choices: ["passbyvalue", "value", "val", "void"],
        correctAnswer: 0
    },
    {
        question: "How do you declare a function 'sum' that takes a variable number of integers and returns an integer in C?",
        choices: ["int sum(int ...)", "sum(int[])", "int sum(int *)", "function sum(int)"],
        correctAnswer: 0
    },
    {
        question: "What is a function definition in C?",
        choices: ["A declaration of a function that tells the compiler about a function's name, return type, and parameters", "The implementation of a function that specifies what the function does", "A pointer to a function", "A function that calls another function"],
        correctAnswer: 1
    },
    {
        question: "How do you declare a function 'square' that takes an integer and returns its square in C?",
        choices: ["square(int)", "void square(int)", "define square(int)", "function square(int)"],
        correctAnswer: 0
    },
    {
        question: "What is a function header in C?",
        choices: ["The first line of a function definition that includes the function's name, return type, and parameters", "The last line of a function definition that specifies what the function does", "The keyword used to define the function", "The name of the function"],
        correctAnswer: 0
    },
    {
        question: "How do you declare a function 'isPrime' that checks if a number is prime and returns a boolean in C?",
        choices: ["boolean isPrime(int)", "int isPrime(int)", "bool isPrime(int)", "function isPrime(int)"],
        correctAnswer: 2
    },
    {
        question: "What is a function definition prototype in C?",
        choices: ["A function that has no body", "A function that returns a function pointer", "A function declaration that tells the compiler about a function's name, return type, and parameters", "A function that can take variable arguments"],
        correctAnswer: 3
    },
    {
        question: "How do you declare a function 'printArray' that takes an integer array and its size and returns void in C?",
        choices: ["printArray(int[], int)", "void printArray(int[], int)", "function printArray(int[], int)", "printArray(void int[], int)"],
        correctAnswer: 1
    }
];

let currentFunctionsCQuestion = 0;
let functionsCScore = 0;
let functionsCAttempt = JSON.parse(localStorage.getItem('functionsCAttemptCount')) || 0;
let functionsCScores = JSON.parse(localStorage.getItem('functionsCQuizScores')) || [];

const functionsCQuestionElement = document.getElementById('question');
const functionsCChoicesElement = document.getElementById('choices');
const functionsCResultElement = document.getElementById('result');
const functionsCNextButton = document.getElementById('next-btn');
const functionsCProgressElement = document.getElementById('current-question');
const functionsCScoresList = document.getElementById('scores-list');
const functionsCReattemptButton = document.getElementById('reattempt-btn');

function loadFunctionsCQuestion() {
    const q = functionsCQuizData[currentFunctionsCQuestion];
    functionsCQuestionElement.textContent = q.question;

    // Clear result text
    functionsCResultElement.textContent = '';

    // Reset choices
    functionsCChoicesElement.innerHTML = '';
    q.choices.forEach((choice, index) => {
        const li = document.createElement('li');
        li.textContent = choice;
        li.addEventListener('click', () => checkFunctionsCAnswer(index));
        li.dataset.index = index; // Add data attribute for index
        functionsCChoicesElement.appendChild(li);
    });

    // Update progress
    functionsCProgressElement.textContent = currentFunctionsCQuestion + 1;

    // Enable next button only after a choice is selected
    functionsCNextButton.disabled = true;
}

function checkFunctionsCAnswer(index) {
    const correctAnswerIndex = functionsCQuizData[currentFunctionsCQuestion].correctAnswer;
    const choices = functionsCChoicesElement.querySelectorAll('li');
    const selectedChoice = choices[index];

    // Add selected class to the clicked choice
    selectedChoice.classList.add('selected');

    if (index === correctAnswerIndex) {
        functionsCScore++;
        functionsCResultElement.textContent = 'Correct!';
        selectedChoice.classList.add('correct');
    } else {
        functionsCResultElement.textContent = `Wrong! The correct answer is: ${functionsCQuizData[currentFunctionsCQuestion].choices[correctAnswerIndex]}`;
        selectedChoice.classList.add('incorrect');

        // Highlight the correct answer
        choices[correctAnswerIndex].classList.add('correct');
    }
    disableFunctionsCChoices();
    functionsCNextButton.disabled = false;
}

function disableFunctionsCChoices() {
    functionsCChoicesElement.querySelectorAll('li').forEach(choice => {
        choice.style.cursor = 'not-allowed';
        // Don't change background color here, we're using classes now
    });
}

function nextFunctionsCQuestion() {
    currentFunctionsCQuestion++;
    if (currentFunctionsCQuestion < functionsCQuizData.length) {
        loadFunctionsCQuestion();
        functionsCResultElement.textContent = '';
        functionsCNextButton.disabled = true;
    } else {
        showFunctionsCResults();
    }
}

function showFunctionsCResults() {
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
    scoreInfo.innerHTML = `You scored <strong>${functionsCScore}</strong> out of <strong>${functionsCQuizData.length}</strong>`;
    scoreInfo.style.fontSize = '1.2rem';
    scoreInfo.style.marginBottom = '1.5rem';
    resultContainer.appendChild(scoreInfo);

    // Add performance message
    const performanceMsg = document.createElement('p');
    const percentage = (functionsCScore / functionsCQuizData.length) * 100;
    if (percentage >= 80) {
        performanceMsg.textContent = 'Excellent! You have a great understanding of C functions.';
        performanceMsg.style.color = 'var(--success-color)';
    } else if (percentage >= 60) {
        performanceMsg.textContent = 'Good job! You have a solid understanding of C functions.';
        performanceMsg.style.color = 'var(--primary-color)';
    } else {
        performanceMsg.textContent = 'Keep practicing! Review the C functions concepts.';
        performanceMsg.style.color = 'var(--warning-color)';
    }
    resultContainer.appendChild(performanceMsg);

    // Clear and update the UI
    functionsCQuestionElement.textContent = '';
    functionsCChoicesElement.innerHTML = '';
    functionsCChoicesElement.appendChild(resultContainer);
    functionsCResultElement.textContent = '';
    functionsCNextButton.style.display = 'none';
    functionsCReattemptButton.style.display = 'inline-block';

    // Increment attempt count
    functionsCAttempt++;
    localStorage.setItem('functionsCAttemptCount', JSON.stringify(functionsCAttempt));

    // Save score to scores array
    functionsCScores.push({
        attempt: functionsCAttempt,
        score: functionsCScore
    });
    localStorage.setItem('functionsCQuizScores', JSON.stringify(functionsCScores));

    // Display scores
    displayFunctionsCScores();
}

function displayFunctionsCScores() {
    functionsCScoresList.innerHTML = '';

    if (functionsCScores.length === 0) {
        const emptyMessage = document.createElement('li');
        emptyMessage.textContent = 'No previous attempts';
        emptyMessage.style.fontStyle = 'italic';
        emptyMessage.style.color = 'var(--text-secondary)';
        functionsCScoresList.appendChild(emptyMessage);
        return;
    }

    functionsCScores.forEach((scoreItem, index) => {
        const li = document.createElement('li');
        const percentage = (scoreItem.score / functionsCQuizData.length) * 100;

        // Create a more detailed score item
        const attemptLabel = document.createElement('span');
        attemptLabel.textContent = `Attempt ${scoreItem.attempt}: `;
        attemptLabel.style.fontWeight = '500';
        li.appendChild(attemptLabel);

        const scoreValue = document.createElement('span');
        scoreValue.textContent = `${scoreItem.score} / ${functionsCQuizData.length} `;
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

        functionsCScoresList.appendChild(li);
    });
}

function reattemptFunctionsCQuiz() {
    // Reset quiz state
    currentFunctionsCQuestion = 0;
    functionsCScore = 0;

    // Show next button and hide reattempt button
    functionsCNextButton.style.display = 'inline-block';
    functionsCReattemptButton.style.display = 'none';

    // Clear result text
    functionsCResultElement.textContent = '';

    // Add a smooth transition effect
    const container = document.querySelector('.container');
    container.style.opacity = '0.5';
    container.style.transform = 'scale(0.98)';

    // After a short delay, reset the container and load the first question
    setTimeout(() => {
        container.style.opacity = '1';
        container.style.transform = 'scale(1)';
        loadFunctionsCQuestion();
    }, 300);
}

functionsCNextButton.addEventListener('click', nextFunctionsCQuestion);
functionsCReattemptButton.addEventListener('click', reattemptFunctionsCQuiz);

// Initial load
loadFunctionsCQuestion();
displayFunctionsCScores();
