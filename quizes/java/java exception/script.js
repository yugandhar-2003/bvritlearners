// Define the quiz data for Exception Handling in Java
const exceptionHandlingQuizData = [
    {
        question: "What is an exception in Java?",
        choices: ["A syntax error", "An error in logic", "An event during program execution that disrupts the normal flow", "A runtime error"],
        correctAnswer: 2
    },
    {
        question: "Which keyword is used to handle exceptions in Java?",
        choices: ["try", "catch", "throw", "throws"],
        correctAnswer: 1
    },
    {
        question: "Which block of code is used to handle exceptions in Java?",
        choices: ["try", "catch", "finally", "throw"],
        correctAnswer: 1
    },
    {
        question: "What is the purpose of the 'finally' block in Java exception handling?",
        choices: ["To throw an exception", "To handle an exception", "To execute code regardless of whether an exception is thrown or not", "To define custom exceptions"],
        correctAnswer: 2
    },
    {
        question: "Which keyword is used to explicitly throw an exception in Java?",
        choices: ["try", "throw", "catch", "throws"],
        correctAnswer: 1
    },
    {
        question: "What happens if an exception is thrown inside a 'try' block in Java?",
        choices: ["It is caught by the 'catch' block", "It is ignored", "The program terminates", "It is handled by the 'finally' block"],
        correctAnswer: 0
    },
    {
        question: "Which statement is used to catch multiple exceptions in Java?",
        choices: ["try", "catch", "throws", "multi-catch"],
        correctAnswer: 3
    },
    {
        question: "What is the superclass of all exception classes in Java?",
        choices: ["RuntimeException", "Throwable", "Exception", "Error"],
        correctAnswer: 1
    },
    {
        question: "Which block of code is optional in Java exception handling?",
        choices: ["try", "catch", "finally", "throw"],
        correctAnswer: 2
    },
    {
        question: "Which keyword is used to specify that a method can throw one or more exceptions?",
        choices: ["try", "catch", "throw", "throws"],
        correctAnswer: 3
    },
    {
        question: "What does the 'throws' clause indicate in Java method declaration?",
        choices: ["The method can throw an exception", "The method catches an exception", "The method handles an exception", "The method will terminate"],
        correctAnswer: 0
    },
    {
        question: "Which exception is thrown when a method attempts to use a null reference?",
        choices: ["NullPointerException", "IllegalArgumentException", "ArrayIndexOutOfBoundsException", "ArithmeticException"],
        correctAnswer: 0
    },
    {
        question: "What does the 'try-catch-finally' block ensure in Java exception handling?",
        choices: ["Handling multiple exceptions", "Re-throwing exceptions", "Graceful handling of exceptions", "Resource cleanup"],
        correctAnswer: 3
    },
    {
        question: "Which exception is thrown when an array is accessed with an illegal index value?",
        choices: ["ArrayIndexOutOfBoundsException", "NullPointerException", "IndexOutOfBoundsException", "IllegalStateException"],
        correctAnswer: 0
    },
    {
        question: "How do you create a custom exception in Java?",
        choices: ["Extend the RuntimeException class", "Use the 'throws' keyword", "Catch a standard exception", "Use the 'throw' keyword"],
        correctAnswer: 0
    },
    {
        question: "Which exception is thrown when a number is divided by zero in Java?",
        choices: ["ArithmeticException", "NumberFormatException", "IllegalStateException", "NullPointerException"],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of the 'throw' keyword in Java?",
        choices: ["To handle an exception", "To define a custom exception class", "To catch an exception", "To explicitly throw an exception"],
        correctAnswer: 3
    },
    {
        question: "Which exception is thrown when an invalid cast is attempted in Java?",
        choices: ["ClassCastException", "IllegalArgumentException", "IllegalAccessException", "InstantiationException"],
        correctAnswer: 0
    },
    {
        question: "How does Java handle exceptions that are not caught?",
        choices: ["Silently ignores them", "Terminates the program", "Automatically retries the operation", "Throws an 'UncaughtException'"],
        correctAnswer: 1
    },
    {
        question: "Which exception is thrown when an illegal argument is passed to a method in Java?",
        choices: ["IllegalArgumentException", "IllegalStateException", "NullPointerException", "UnsupportedOperationException"],
        correctAnswer: 0
    },
    {
        question: "What does the 'getMessage()' method of the Exception class return?",
        choices: ["The error message", "The exception type", "The stack trace", "The error code"],
        correctAnswer: 0
    },
    {
        question: "Which exception is thrown when an operation is not supported in Java?",
        choices: ["UnsupportedOperationException", "IllegalStateException", "IllegalArgumentException", "NullPointerException"],
        correctAnswer: 0
    },
    {
        question: "What does the 'printStackTrace()' method do in Java exception handling?",
        choices: ["Prints the exception message", "Prints the exception type", "Prints the stack trace of the exception", "Prints the error code"],
        correctAnswer: 2
    },
    {
        question: "Which exception is thrown when an attempt is made to access a resource that has been closed?",
        choices: ["ClosedResourceException", "IllegalStateException", "ResourceAccessException", "ClosedChannelException"],
        correctAnswer: 1
    },
    {
        question: "What is the purpose of the 'getMessage()' method in Java exceptions?",
        choices: ["To print the exception message", "To retrieve the exception type", "To handle the exception", "To return the stack trace"],
        correctAnswer: 0
    },
    {
        question: "Which exception is thrown when a method is invoked at an illegal or inappropriate time?",
        choices: ["IllegalStateException", "IllegalArgumentException", "UnsupportedOperationException", "NullPointerException"],
        correctAnswer: 0
    },
    {
        question: "What does the 'fillInStackTrace()' method do in Java exception handling?",
        choices: ["Fills the stack trace of the exception", "Returns the exception message", "Throws a new exception", "Handles the exception"],
        correctAnswer: 0
    },
    {
        question: "Which exception is thrown when a method is called on a null object reference?",
        choices: ["NullPointerException", "IllegalArgumentException", "IllegalStateException", "ClassCastException"],
        correctAnswer: 0
    },
    {
        question: "What does the 'getCause()' method of the Exception class return?",
        choices: ["The cause of the exception", "The error message", "The exception type", "The stack trace"],
        correctAnswer: 0
    },
    {
        question: "Which exception is thrown when an invalid operation is attempted in Java?",
        choices: ["UnsupportedOperationException", "IllegalStateException", "IllegalArgumentException", "NullPointerException"],
        correctAnswer: 1
    },
    {
        question: "What does the 'initCause()' method of the Throwable class do?",
        choices: ["Initializes the cause of the exception", "Throws a new exception", "Handles the exception", "Returns the exception message"],
        correctAnswer: 0
    }
];

let currentExceptionHandlingQuestion = 0;
let exceptionHandlingScore = 0;
let exceptionHandlingAttempt = JSON.parse(localStorage.getItem('exceptionHandlingAttemptCount')) || 0;
let exceptionHandlingScores = JSON.parse(localStorage.getItem('exceptionHandlingQuizScores')) || [];

const exceptionHandlingQuestionElement = document.getElementById('question');
const exceptionHandlingChoicesElement = document.getElementById('choices');
const exceptionHandlingResultElement = document.getElementById('result');
const exceptionHandlingNextButton = document.getElementById('next-btn');
const exceptionHandlingProgressElement = document.getElementById('current-question');
const exceptionHandlingScoresList = document.getElementById('scores-list');
const exceptionHandlingReattemptButton = document.getElementById('reattempt-btn');

function loadExceptionHandlingQuestion() {
    const q = exceptionHandlingQuizData[currentExceptionHandlingQuestion];
    exceptionHandlingQuestionElement.textContent = q.question;

    exceptionHandlingChoicesElement.innerHTML = '';
    q.choices.forEach((choice, index) => {
        const li = document.createElement('li');
        li.textContent = choice;
        li.addEventListener('click', () => checkExceptionHandlingAnswer(index));
        exceptionHandlingChoicesElement.appendChild(li);
    });

    exceptionHandlingProgressElement.textContent = currentExceptionHandlingQuestion + 1;
}

function checkExceptionHandlingAnswer(index) {
    const correctAnswerIndex = exceptionHandlingQuizData[currentExceptionHandlingQuestion].correctAnswer;
    if (index === correctAnswerIndex) {
        exceptionHandlingScore++;
        exceptionHandlingResultElement.textContent = 'Correct!';
    } else {
        exceptionHandlingResultElement.textContent = `Wrong! The correct answer is: ${exceptionHandlingQuizData[currentExceptionHandlingQuestion].choices[correctAnswerIndex]}`;
    }
    disableExceptionHandlingChoices();
    exceptionHandlingNextButton.disabled = false;
}

function disableExceptionHandlingChoices() {
    exceptionHandlingChoicesElement.querySelectorAll('li').forEach(choice => {
        choice.style.cursor = 'not-allowed';
        choice.style.backgroundColor = '#ccc';
    });
}

function nextExceptionHandlingQuestion() {
    currentExceptionHandlingQuestion++;
    if (currentExceptionHandlingQuestion < exceptionHandlingQuizData.length) {
        loadExceptionHandlingQuestion();
        exceptionHandlingResultElement.textContent = '';
        exceptionHandlingNextButton.disabled = true;
    } else {
        showExceptionHandlingResults();
    }
}

function showExceptionHandlingResults() {
    exceptionHandlingQuestionElement.textContent = `Exception Handling Quiz completed! You scored ${exceptionHandlingScore} out of ${exceptionHandlingQuizData.length}.`;
    exceptionHandlingChoicesElement.innerHTML = '';
    exceptionHandlingResultElement.textContent = '';
    exceptionHandlingNextButton.style.display = 'none';
    exceptionHandlingReattemptButton.style.display = 'inline-block';

    // Increment attempt count
    exceptionHandlingAttempt++;
    localStorage.setItem('exceptionHandlingAttemptCount', JSON.stringify(exceptionHandlingAttempt));

    // Save score to scores array
    exceptionHandlingScores.push({
        attempt: exceptionHandlingAttempt,
        score: exceptionHandlingScore
    });
    localStorage.setItem('exceptionHandlingQuizScores', JSON.stringify(exceptionHandlingScores));

    // Display scores
    displayExceptionHandlingScores();
}

function displayExceptionHandlingScores() {
    exceptionHandlingScoresList.innerHTML = '';
    exceptionHandlingScores.forEach(scoreItem => {
        const li = document.createElement('li');
        li.textContent = `Attempt ${scoreItem.attempt}: ${scoreItem.score} / ${exceptionHandlingQuizData.length}`;
        exceptionHandlingScoresList.appendChild(li);
    });
}

function reattemptExceptionHandlingQuiz() {
    currentExceptionHandlingQuestion = 0;
    exceptionHandlingScore = 0;
    exceptionHandlingNextButton.style.display = 'inline-block';
    exceptionHandlingReattemptButton.style.display = 'none';
    loadExceptionHandlingQuestion();
    exceptionHandlingResultElement.textContent = '';
}

exceptionHandlingNextButton.addEventListener('click', nextExceptionHandlingQuestion);
exceptionHandlingReattemptButton.addEventListener('click', reattemptExceptionHandlingQuiz);

// Initial load
loadExceptionHandlingQuestion();
displayExceptionHandlingScores();
