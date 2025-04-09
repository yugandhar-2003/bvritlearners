// Define the quiz data for Basic Operators in C
const basicOperatorsCQuizData = [
    {
        question: "Which operator is used to assign a value to a variable in C?",
        choices: ["=", "==", "->", ":="],
        correctAnswer: 0
    },
    {
        question: "Which operator is used for addition in C?",
        choices: ["+", "-", "*", "/"],
        correctAnswer: 0
    },
    {
        question: "What is the result of 10 % 3 in C?",
        choices: ["1", "2", "3", "0"],
        correctAnswer: 0
    },
    {
        question: "Which operator is used for logical AND in C?",
        choices: ["&", "&&", "|", "||"],
        correctAnswer: 1
    },
    {
        question: "Which operator is used for bitwise OR in C?",
        choices: ["|", "||", "&", "&&"],
        correctAnswer: 0
    },
    {
        question: "What is the value of the expression 5 * 3 in C?",
        choices: ["8", "15", "5", "3"],
        correctAnswer: 1
    },
    {
        question: "Which operator is used for division in C?",
        choices: ["%", "/", "*", "-"],
        correctAnswer: 1
    },
    {
        question: "Which operator is used to decrement a value by 1 in C?",
        choices: ["--", "++", "-=", "*="],
        correctAnswer: 0
    },
    {
        question: "What is the result of the expression 5 > 3 in C?",
        choices: ["true", "false", "1", "0"],
        correctAnswer: 2
    },
    {
        question: "Which operator is used for bitwise AND in C?",
        choices: ["&", "&&", "|", "||"],
        correctAnswer: 0
    },
    {
        question: "Which operator is used to check equality in C?",
        choices: ["=", "==", "!=", "==="],
        correctAnswer: 1
    },
    {
        question: "What is the result of 3 << 2 in C?",
        choices: ["6", "12", "3", "9"],
        correctAnswer: 1
    },
    {
        question: "Which operator is used for bitwise XOR in C?",
        choices: ["^", "|", "&&", "||"],
        correctAnswer: 0
    },
    {
        question: "Which operator is used for subtraction in C?",
        choices: ["+", "-", "*", "/"],
        correctAnswer: 1
    },
    {
        question: "What is the result of the expression 4 != 5 in C?",
        choices: ["true", "false", "1", "0"],
        correctAnswer: 2
    },
    {
        question: "Which operator is used to increment a value by 1 in C?",
        choices: ["++", "--", "+=", "*="],
        correctAnswer: 0
    },
    {
        question: "What is the result of the expression 5 / 2 in C?",
        choices: ["2.5", "2", "3", "1"],
        correctAnswer: 1
    },
    {
        question: "Which operator is used to check if two values are not equal in C?",
        choices: ["!=", "==", "=", "!"],
        correctAnswer: 0
    },
    {
        question: "What is the result of 2 & 3 in C?",
        choices: ["0", "1", "2", "3"],
        correctAnswer: 1
    },
    {
        question: "Which operator is used for bitwise NOT in C?",
        choices: ["~", "!", "^", "&"],
        correctAnswer: 0
    },
    {
        question: "Which operator is used for logical OR in C?",
        choices: ["|", "||", "&", "&&"],
        correctAnswer: 1
    },
    {
        question: "What is the result of 10 >> 1 in C?",
        choices: ["5", "10", "20", "15"],
        correctAnswer: 0
    },
    {
        question: "Which operator is used to multiply two values in C?",
        choices: ["+", "-", "*", "/"],
        correctAnswer: 2
    },
    {
        question: "What is the result of the expression 7 >= 7 in C?",
        choices: ["true", "false", "1", "0"],
        correctAnswer: 2
    },
    {
        question: "Which operator is used to check if a value is greater than another in C?",
        choices: ["<", ">", "<=", ">="],
        correctAnswer: 1
    },
    {
        question: "What is the result of the expression 6 <= 5 in C?",
        choices: ["true", "false", "1", "0"],
        correctAnswer: 3
    },
    {
        question: "Which operator is used for modulo operation in C?",
        choices: ["%", "/", "*", "-"],
        correctAnswer: 0
    },
    {
        question: "What is the result of 4 | 1 in C?",
        choices: ["0", "1", "4", "5"],
        correctAnswer: 3
    },
    {
        question: "Which operator is used to combine multiple conditions in C?",
        choices: ["&", "&&", "|", "||"],
        correctAnswer: 1
    },
    {
        question: "What is the result of the expression 5 < 10 in C?",
        choices: ["true", "false", "1", "0"],
        correctAnswer: 2
    }
];
let currentBasicOperatorsCQuestion = 0;
let basicOperatorsCScore = 0;
let basicOperatorsCAttempt = JSON.parse(localStorage.getItem('basicOperatorsCAttemptCount')) || 0;
let basicOperatorsCScores = JSON.parse(localStorage.getItem('basicOperatorsCQuizScores')) || [];

const basicOperatorsCQuestionElement = document.getElementById('question');
const basicOperatorsCChoicesElement = document.getElementById('choices');
const basicOperatorsCResultElement = document.getElementById('result');
const basicOperatorsCNextButton = document.getElementById('next-btn');
const basicOperatorsCProgressElement = document.getElementById('current-question');
const basicOperatorsCScoresList = document.getElementById('scores-list');
const basicOperatorsCReattemptButton = document.getElementById('reattempt-btn');

function loadBasicOperatorsCQuestion() {
    const q = basicOperatorsCQuizData[currentBasicOperatorsCQuestion];
    basicOperatorsCQuestionElement.textContent = q.question;

    // Clear result text
    basicOperatorsCResultElement.textContent = '';

    // Reset choices
    basicOperatorsCChoicesElement.innerHTML = '';
    q.choices.forEach((choice, index) => {
        const li = document.createElement('li');
        li.textContent = choice;
        li.addEventListener('click', () => checkBasicOperatorsCAnswer(index));
        li.dataset.index = index; // Add data attribute for index
        basicOperatorsCChoicesElement.appendChild(li);
    });

    // Update progress
    basicOperatorsCProgressElement.textContent = currentBasicOperatorsCQuestion + 1;

    // Enable next button only after a choice is selected
    basicOperatorsCNextButton.disabled = true;
}

function checkBasicOperatorsCAnswer(index) {
    const correctAnswerIndex = basicOperatorsCQuizData[currentBasicOperatorsCQuestion].correctAnswer;
    const choices = basicOperatorsCChoicesElement.querySelectorAll('li');
    const selectedChoice = choices[index];

    // Add selected class to the clicked choice
    selectedChoice.classList.add('selected');

    if (index === correctAnswerIndex) {
        basicOperatorsCScore++;
        basicOperatorsCResultElement.textContent = 'Correct!';
        selectedChoice.classList.add('correct');
    } else {
        basicOperatorsCResultElement.textContent = `Wrong! The correct answer is: ${basicOperatorsCQuizData[currentBasicOperatorsCQuestion].choices[correctAnswerIndex]}`;
        selectedChoice.classList.add('incorrect');

        // Highlight the correct answer
        choices[correctAnswerIndex].classList.add('correct');
    }
    disableBasicOperatorsCChoices();
    basicOperatorsCNextButton.disabled = false;
}

function disableBasicOperatorsCChoices() {
    basicOperatorsCChoicesElement.querySelectorAll('li').forEach(choice => {
        choice.style.cursor = 'not-allowed';
        // Don't change background color here, we're using classes now
    });
}

function nextBasicOperatorsCQuestion() {
    currentBasicOperatorsCQuestion++;
    if (currentBasicOperatorsCQuestion < basicOperatorsCQuizData.length) {
        loadBasicOperatorsCQuestion();
        basicOperatorsCResultElement.textContent = '';
        basicOperatorsCNextButton.disabled = true;
    } else {
        showBasicOperatorsCResults();
    }
}

function showBasicOperatorsCResults() {
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
    scoreInfo.innerHTML = `You scored <strong>${basicOperatorsCScore}</strong> out of <strong>${basicOperatorsCQuizData.length}</strong>`;
    scoreInfo.style.fontSize = '1.2rem';
    scoreInfo.style.marginBottom = '1.5rem';
    resultContainer.appendChild(scoreInfo);

    // Add performance message
    const performanceMsg = document.createElement('p');
    const percentage = (basicOperatorsCScore / basicOperatorsCQuizData.length) * 100;
    if (percentage >= 80) {
        performanceMsg.textContent = 'Excellent! You have a great understanding of C operators.';
        performanceMsg.style.color = 'var(--success-color)';
    } else if (percentage >= 60) {
        performanceMsg.textContent = 'Good job! You have a solid understanding of C operators.';
        performanceMsg.style.color = 'var(--primary-color)';
    } else {
        performanceMsg.textContent = 'Keep practicing! Review the C operators concepts.';
        performanceMsg.style.color = 'var(--warning-color)';
    }
    resultContainer.appendChild(performanceMsg);

    // Clear and update the UI
    basicOperatorsCQuestionElement.textContent = '';
    basicOperatorsCChoicesElement.innerHTML = '';
    basicOperatorsCChoicesElement.appendChild(resultContainer);
    basicOperatorsCResultElement.textContent = '';
    basicOperatorsCNextButton.style.display = 'none';
    basicOperatorsCReattemptButton.style.display = 'inline-block';

    // Increment attempt count
    basicOperatorsCAttempt++;
    localStorage.setItem('basicOperatorsCAttemptCount', JSON.stringify(basicOperatorsCAttempt));

    // Save score to scores array
    basicOperatorsCScores.push({
        attempt: basicOperatorsCAttempt,
        score: basicOperatorsCScore
    });
    localStorage.setItem('basicOperatorsCQuizScores', JSON.stringify(basicOperatorsCScores));

    // Display scores
    displayBasicOperatorsCScores();
}

function displayBasicOperatorsCScores() {
    basicOperatorsCScoresList.innerHTML = '';

    if (basicOperatorsCScores.length === 0) {
        const emptyMessage = document.createElement('li');
        emptyMessage.textContent = 'No previous attempts';
        emptyMessage.style.fontStyle = 'italic';
        emptyMessage.style.color = 'var(--text-secondary)';
        basicOperatorsCScoresList.appendChild(emptyMessage);
        return;
    }

    basicOperatorsCScores.forEach((scoreItem, index) => {
        const li = document.createElement('li');
        const percentage = (scoreItem.score / basicOperatorsCQuizData.length) * 100;

        // Create a more detailed score item
        const attemptLabel = document.createElement('span');
        attemptLabel.textContent = `Attempt ${scoreItem.attempt}: `;
        attemptLabel.style.fontWeight = '500';
        li.appendChild(attemptLabel);

        const scoreValue = document.createElement('span');
        scoreValue.textContent = `${scoreItem.score} / ${basicOperatorsCQuizData.length} `;
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

        basicOperatorsCScoresList.appendChild(li);
    });
}

function reattemptBasicOperatorsCQuiz() {
    // Reset quiz state
    currentBasicOperatorsCQuestion = 0;
    basicOperatorsCScore = 0;

    // Show next button and hide reattempt button
    basicOperatorsCNextButton.style.display = 'inline-block';
    basicOperatorsCReattemptButton.style.display = 'none';

    // Clear result text
    basicOperatorsCResultElement.textContent = '';

    // Add a smooth transition effect
    const container = document.querySelector('.container');
    container.style.opacity = '0.5';
    container.style.transform = 'scale(0.98)';

    // After a short delay, reset the container and load the first question
    setTimeout(() => {
        container.style.opacity = '1';
        container.style.transform = 'scale(1)';
        loadBasicOperatorsCQuestion();
    }, 300);
}

// Initialize the quiz
basicOperatorsCNextButton.addEventListener('click', nextBasicOperatorsCQuestion);
basicOperatorsCReattemptButton.addEventListener('click', reattemptBasicOperatorsCQuiz);
loadBasicOperatorsCQuestion();
displayBasicOperatorsCScores();
