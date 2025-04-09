const errorHandlingQuizData = [
{
    question: "What is an exception in Python?",
    choices: ["A syntax error", "An error that halts the program", "An unexpected event that occurs during program execution", "A logical error"],
    correctAnswer: 2
},
{
    question: "How do you handle exceptions in Python?",
    choices: ["try/except", "catch/finally", "try/catch", "try/finally"],
    correctAnswer: 0
},
{
    question: "What is the purpose of the 'finally' block in Python exception handling?",
    choices: ["To catch all exceptions", "To define cleanup actions that must be executed whether an exception occurred or not", "To handle specific exceptions", "To re-raise exceptions"],
    correctAnswer: 1
},
{
    question: "Which keyword is used to raise exceptions manually in Python?",
    choices: ["raise", "throw", "except", "throwException"],
    correctAnswer: 0
},
{
    question: "What happens if an exception is not handled in Python?",
    choices: ["The program crashes", "The exception is ignored", "Python automatically handles it", "The program continues executing normally"],
    correctAnswer: 0
},
{
    question: "What is the syntax for defining multiple except blocks in Python?",
    choices: ["multiple except:", "catch:", "except Multiple:", "except ExceptionType1, ExceptionType2:"],
    correctAnswer: 3
},
{
    question: "Which of the following statements is true about the 'else' block in Python exception handling?",
    choices: ["It must always follow the 'try' block", "It is executed if an exception occurs", "It is executed if no exception occurs in the 'try' block", "It handles exceptions"],
    correctAnswer: 2
},
{
    question: "What is the primary role of the 'except' block in Python?",
    choices: ["To define cleanup actions", "To raise exceptions", "To handle specific exceptions", "To execute code regardless of exceptions"],
    correctAnswer: 2
},
{
    question: "In Python, how do you retrieve the exception object itself?",
    choices: ["exception()", "exception", "sys.exception()", "sys.exc_info()"],
    correctAnswer: 3
},
{
    question: "What is the output of the following code?\n\ntry:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print('Division by zero error')",
    choices: ["Division by zero error", "ZeroDivisionError", "1", "Error"],
    correctAnswer: 0
},
{
    question: "What is the purpose of the 'assert' statement in Python?",
    choices: ["To raise an exception", "To terminate the program", "To test conditions that should always be true", "To handle errors"],
    correctAnswer: 2
},
{
    question: "How do you handle any exception in Python regardless of its type?",
    choices: ["try/finally", "try/except:", "try/except Exception:", "try/catch"],
    correctAnswer: 2
},
{
    question: "What is the role of the 'pass' statement in exception handling in Python?",
    choices: ["To raise an exception", "To handle exceptions", "To ignore exceptions", "To terminate the program"],
    correctAnswer: 2
},
{
    question: "What does the 'raise' statement do in Python?",
    choices: ["Terminates the program", "Raises an exception manually", "Handles exceptions", "Ignores exceptions"],
    correctAnswer: 1
},
{
    question: "Which built-in Python function is used to catch all exceptions?",
    choices: ["catch_all()", "except_all()", "except:", "except Exception:"],
    correctAnswer: 3
},
{
    question: "What does the 'try' block in Python signify?",
    choices: ["Code that is always executed", "Code that may raise an exception", "Code that handles exceptions", "Code that is skipped"],
    correctAnswer: 1
},
{
    question: "How do you handle different exceptions with one 'except' block in Python?",
    choices: ["catch (ExceptionType1, ExceptionType2):", "except (ExceptionType1, ExceptionType2):", "except ExceptionType1, ExceptionType2:", "except:"],
    correctAnswer: 1
},
{
    question: "What does the 'finally' block execute in Python exception handling?",
    choices: ["Only if an exception occurs", "Only if no exception occurs", "Always, regardless of whether an exception occurred or not", "When 'try' block encounters an error"],
    correctAnswer: 2
},
{
    question: "How do you define custom exception classes in Python?",
    choices: ["class MyException(Exception):", "def MyException(Exception):", "exception MyException(Exception):", "class Exception MyException:"],
    correctAnswer: 0
},
{
    question: "What is the purpose of the 'sys.exc_info()' function in Python?",
    choices: ["To retrieve the current exception object", "To raise exceptions", "To terminate the program", "To ignore exceptions"],
    correctAnswer: 0
},
{
    question: "What is the output of the following code?\n\ntry:\n    raise ValueError('Custom error')\nexcept ValueError as e:\n    print(e)",
    choices: ["Custom error", "ValueError", "Error", "None of the above"],
    correctAnswer: 0
},
{
    question: "In Python, what is the recommended approach to handle exceptions?",
    choices: ["Use only 'try/except' blocks", "Use 'try/except' blocks with specific exception types", "Use 'try/finally' blocks", "Avoid using exception handling altogether"],
    correctAnswer: 1
},
{
    question: "How do you create a user-defined exception in Python?",
    choices: ["raise Exception('Message')", "throw Exception('Message')", "raise MyException('Message')", "throw MyException('Message')"],
    correctAnswer: 2
},
{
    question: "What is the purpose of the 'assert' statement in Python?",
    choices: ["To terminate the program", "To raise an exception", "To test conditions that should always be true", "To handle errors"],
    correctAnswer: 2
},
{
    question: "How do you handle any exception in Python regardless of its type?",
    choices: ["try/finally", "try/except:", "try/except Exception:", "try/catch"],
    correctAnswer: 2
},
{
    question: "What is the role of the 'pass' statement in exception handling in Python?",
    choices: ["To raise an exception", "To handle exceptions", "To ignore exceptions", "To terminate the program"],
    correctAnswer: 2
},
{
    question: "What does the 'raise' statement do in Python?",
    choices: ["Terminates the program", "Raises an exception manually", "Handles exceptions", "Ignores exceptions"],
    correctAnswer: 1
},
{
    question: "Which built-in Python function is used to catch all exceptions?",
    choices: ["catch_all()", "except_all()", "except:", "except Exception:"],
    correctAnswer: 3
},
{
    question: "What does the 'try' block in Python signify?",
    choices: ["Code that is always executed", "Code that may raise an exception", "Code that handles exceptions", "Code that is skipped"],
    correctAnswer: 1
},
{
    question: "How do you handle different exceptions with one 'except' block in Python?",
    choices: ["catch (ExceptionType1, ExceptionType2):", "except (ExceptionType1, ExceptionType2):", "except ExceptionType1, ExceptionType2:", "except:"],
    correctAnswer: 1
},
{
    question: "What does the 'finally' block execute in Python exception handling?",
    choices: ["Only if an exception occurs", "Only if no exception occurs", "Always, regardless of whether an exception occurred or not", "When 'try' block encounters an error"],
    correctAnswer: 2
},
{
    question: "How do you define custom exception classes in Python?",
    choices: ["class MyException(Exception):", "def MyException(Exception):", "exception MyException(Exception):", "class Exception MyException:"],
    correctAnswer: 0
},
{
    question: "What is the purpose of the 'sys.exc_info()' function in Python?",
    choices: ["To retrieve the current exception object", "To raise exceptions", "To terminate the program", "To ignore exceptions"],
    correctAnswer: 0
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

// Initial load
loadErrorHandlingQuestion();
displayErrorHandlingScores();
