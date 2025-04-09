// Define the quiz data for Error Handling in C
const errorHandlingQuizData = [
    {
        question: "Which header file is used for handling errors in C programming?",
        choices: ["<stdio.h>", "<stdlib.h>", "<assert.h>", "<error.h>"],
        correctAnswer: 1
    },
    {
        question: "What is the return type of the standard error handling function 'perror' in C?",
        choices: ["void", "int", "char*", "FILE*"],
        correctAnswer: 0
    },
    {
        question: "Which function is used to print an error message to the standard error stream in C?",
        choices: ["printf", "puts", "fprintf", "perror"],
        correctAnswer: 3
    },
    {
        question: "How do you terminate a C program abnormally due to an error?",
        choices: ["exit(1);", "return -1;", "terminate(-1);", "end(1);"],
        correctAnswer: 0
    },
    {
        question: "Which keyword in C is used to handle exceptions?",
        choices: ["try", "throw", "catch", "except"],
        correctAnswer: 2
    },
    {
        question: "What is the role of 'errno' in C error handling?",
        choices: ["Stores error code", "Prints error messages", "Terminates the program", "Handles exceptions"],
        correctAnswer: 0
    },
    {
        question: "Which macro is used to indicate an error condition in C?",
        choices: ["ERR_FAIL", "ERROR", "FAILURE", "EXIT_FAILURE"],
        correctAnswer: 3
    },
    {
        question: "What does the function 'strerror' in C do?",
        choices: ["Prints a string", "Converts string to integer", "Returns error message string", "Checks for string length"],
        correctAnswer: 2
    },
    {
        question: "How do you handle file errors in C?",
        choices: ["file_error();", "check_file();", "fileError();", "perror(\"File error\");"],
        correctAnswer: 3
    },
    {
        question: "Which function is used to clear the error indicator for a file in C?",
        choices: ["clearerr", "clrerr", "clearerror", "reseterror"],
        correctAnswer: 0
    },
    {
        question: "How do you check if an error has occurred during input/output operations in C?",
        choices: ["error();", "checkError();", "feof();", "ferror();"],
        correctAnswer: 3
    },
    {
        question: "What is the purpose of 'assert.h' in C programming?",
        choices: ["Error handling", "File handling", "Memory allocation", "Assertion testing"],
        correctAnswer: 3
    },
    {
        question: "Which function is used to abort the program execution with a message in C?",
        choices: ["exit(1);", "terminate();", "abort();", "end();"],
        correctAnswer: 2
    },
    {
        question: "What is the return type of the 'assert' function in C?",
        choices: ["void", "int", "char*", "FILE*"],
        correctAnswer: 0
    },
    {
        question: "How do you include 'assert.h' in your C program?",
        choices: ["#include <assert.h>", "#include <error.h>", "#include <stdio.h>", "#include <stdlib.h>"],
        correctAnswer: 0
    },
    {
        question: "Which function in C is used to check for assertion failures?",
        choices: ["assertionCheck()", "checkAssert()", "assert()", "assertion()"],
        correctAnswer: 2
    },
    {
        question: "What is the purpose of 'setjmp' and 'longjmp' functions in C error handling?",
        choices: ["Jump to a specified line", "Handle long integers", "Handle non-local jumps", "Set jump addresses"],
        correctAnswer: 2
    },
    {
        question: "Which function is used to set the jump point in C error handling?",
        choices: ["longjmp", "setjmp", "jmpset", "setjump"],
        correctAnswer: 1
    },
    {
        question: "What does 'SIG_ERR' represent in C error handling?",
        choices: ["Signal error", "Significant error", "Syntax error", "Special error"],
        correctAnswer: 0
    },
    {
        question: "Which function is used to handle signals in C?",
        choices: ["signal()", "handleSignal()", "catchSignal()", "registerSignal()"],
        correctAnswer: 0
    },
    {
        question: "What is the return type of the 'signal' function in C?",
        choices: ["void", "int", "char*", "FILE*"],
        correctAnswer: 1
    },
    {
        question: "How do you handle division by zero in C?",
        choices: ["catch (DivisionByZeroException e) { ... }", "signal(SIGFPE, SIG_DFL);", "perror(\"Division by zero\");", "assert(0);"],
        correctAnswer: 1
    },
    {
        question: "Which function is used to handle segmentation faults in C?",
        choices: ["sigsegv_handler()", "segmentationFault()", "signal(SIGSEGV, handler);", "handleSegfault()"],
        correctAnswer: 2
    },
    {
        question: "What does 'errno' indicate after a successful library function call in C?",
        choices: ["Error occurred", "No error occurred", "Undefined behavior", "Segmentation fault"],
        correctAnswer: 1
    },
    {
        question: "Which function is used to convert an error number into an error message in C?",
        choices: ["strerror()", "errorToStr()", "convertError()", "errorToString()"],
        correctAnswer: 0
    },
    {
        question: "How do you handle memory allocation errors in C?",
        choices: ["mallocError();", "checkMalloc();", "perror(\"Memory allocation failed\");", "assert(ptr != NULL);"],
        correctAnswer: 3
    },
    {
        question: "Which function is used to handle floating point exceptions in C?",
        choices: ["catchFloatingPointException()", "signal(SIGFPE, handler);", "handleFloatingPointError();", "floatException()"],
        correctAnswer: 1
    },
    {
        question: "What does 'SIGFPE' represent in C error handling?",
        choices: ["Signal for floating point exception", "Special floating point error", "Syntax error", "Significant floating point error"],
        correctAnswer: 0
    },
    {
        question: "How do you handle file opening errors in C?",
        choices: ["openFileError();", "checkFileOpen();", "perror(\"Failed to open file\");", "assert(file != NULL);"],
        correctAnswer: 2
    },
    {
        question: "Which function is used to handle arithmetic overflow errors in C?",
        choices: ["signal(SIGSEGV, SIG_DFL);", "catch(ArithmeticOverflowException e) { ... }", "assert(0);", "signal(SIGFPE, handler);"],
        correctAnswer: 3
    }
];

let currentErrorHandlingQuestion = 0;
let errorHandlingScore = 0;
let errorHandlingAttempt = JSON.parse(localStorage.getItem('errorHandlingAttemptCount')) || 0;
let errorHandlingScores = JSON.parse(localStorage.getItem('errorHandlingQuizScores')) || [];

const errorHandlingQuestionElement = document.getElementById('question');
const errorHandlingChoicesElement = document.getElementById('choices');
const errorHandlingResultElement = document.getElementById('result');
const errorHandlingNextButton = document.getElementById('next-btn');
const errorHandlingProgressElement = document.getElementById('current-question');
const errorHandlingScoresList = document.getElementById('scores-list');
const errorHandlingReattemptButton = document.getElementById('reattempt-btn');

function loadErrorHandlingQuestion() {
    const q = errorHandlingQuizData[currentErrorHandlingQuestion];
    errorHandlingQuestionElement.textContent = q.question;

    errorHandlingChoicesElement.innerHTML = '';
    q.choices.forEach((choice, index) => {
        const li = document.createElement('li');
        li.textContent = choice;
        li.addEventListener('click', () => checkErrorHandlingAnswer(index));
        errorHandlingChoicesElement.appendChild(li);
    });

    errorHandlingProgressElement.textContent = currentErrorHandlingQuestion + 1;
}

function checkErrorHandlingAnswer(index) {
    const correctAnswerIndex = errorHandlingQuizData[currentErrorHandlingQuestion].correctAnswer;
    if (index === correctAnswerIndex) {
        errorHandlingScore++;
        errorHandlingResultElement.textContent = 'Correct!';
    } else {
        errorHandlingResultElement.textContent = `Wrong! The correct answer is: ${errorHandlingQuizData[currentErrorHandlingQuestion].choices[correctAnswerIndex]}`;
    }
    disableErrorHandlingChoices();
    errorHandlingNextButton.disabled = false;
}

function disableErrorHandlingChoices() {
    errorHandlingChoicesElement.querySelectorAll('li').forEach(choice => {
        choice.style.cursor = 'not-allowed';
        choice.style.backgroundColor = '#ccc';
    });
}

function nextErrorHandlingQuestion() {
    currentErrorHandlingQuestion++;
    if (currentErrorHandlingQuestion < errorHandlingQuizData.length) {
        loadErrorHandlingQuestion();
        errorHandlingResultElement.textContent = '';
        errorHandlingNextButton.disabled = true;
    } else {
        showErrorHandlingResults();
    }
}

function showErrorHandlingResults() {
    errorHandlingQuestionElement.textContent = `Error Handling Quiz completed! You scored ${errorHandlingScore} out of ${errorHandlingQuizData.length}.`;
    errorHandlingChoicesElement.innerHTML = '';
    errorHandlingResultElement.textContent = '';
    errorHandlingNextButton.style.display = 'none';
    errorHandlingReattemptButton.style.display = 'inline-block';

    // Increment attempt count
    errorHandlingAttempt++;
    localStorage.setItem('errorHandlingAttemptCount', JSON.stringify(errorHandlingAttempt));

    // Save score to scores array
    errorHandlingScores.push({
        attempt: errorHandlingAttempt,
        score: errorHandlingScore
    });
    localStorage.setItem('errorHandlingQuizScores', JSON.stringify(errorHandlingScores));

    // Display scores
    displayErrorHandlingScores();
}

function displayErrorHandlingScores() {
    errorHandlingScoresList.innerHTML = '';
    errorHandlingScores.forEach(scoreItem => {
        const li = document.createElement('li');
        li.textContent = `Attempt ${scoreItem.attempt}: ${scoreItem.score} / ${errorHandlingQuizData.length}`;
        errorHandlingScoresList.appendChild(li);
    });
}

function reattemptErrorHandlingQuiz() {
    currentErrorHandlingQuestion = 0;
    errorHandlingScore = 0;
    errorHandlingNextButton.style.display = 'inline-block';
    errorHandlingReattemptButton.style.display = 'none';
    loadErrorHandlingQuestion();
    errorHandlingResultElement.textContent = '';
}

errorHandlingNextButton.addEventListener('click', nextErrorHandlingQuestion);
errorHandlingReattemptButton.addEventListener('click', reattemptErrorHandlingQuiz);

loadErrorHandlingQuestion();
displayErrorHandlingScores();
