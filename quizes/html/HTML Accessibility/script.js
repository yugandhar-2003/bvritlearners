// Define the quiz data for File Handling in C
const fileHandlingQuizData = [
    {
        "question": "What attribute is used to provide alternative text for an image in HTML?",
        "choices": ["<alt>", "alt", "<text>", "text"],
        "correctAnswer": 1
    },
    {
        "question": "Which HTML tag is used to define the main content of a document?",
        "choices": ["<header>", "<footer>", "<main>", "<section>"],
        "correctAnswer": 2
    },
    {
        "question": "What attribute should be used to provide a label for an input element?",
        "choices": ["id", "label", "name", "aria-label"],
        "correctAnswer": 3
    },
    {
        "question": "Which HTML element is used to provide a visible label for form controls?",
        "choices": ["<button>", "<label>", "<legend>", "<input>"],
        "correctAnswer": 1
    },
    {
        "question": "What attribute helps users with screen readers understand the purpose of a form control?",
        "choices": ["aria-role", "aria-description", "aria-label", "aria-placeholder"],
        "correctAnswer": 2
    },
    {
        "question": "Which attribute is used to define the language of the document for accessibility purposes?",
        "choices": ["lang", "language", "locale", "dir"],
        "correctAnswer": 0
    },
    {
        "question": "What should be used to group related form controls and provide a description for them?",
        "choices": ["<fieldset>", "<form>", "<div>", "<section>"],
        "correctAnswer": 0
    },
    {
        "question": "Which HTML attribute provides additional context to assistive technologies about the role of an element?",
        "choices": ["role", "aria-role", "title", "description"],
        "correctAnswer": 0
    },
    {
        "question": "What attribute should be used to make an element accessible to users with screen readers by indicating its state?",
        "choices": ["aria-live", "aria-hidden", "aria-label", "aria-disabled"],
        "correctAnswer": 0
    },
    {
        "question": "Which HTML element is used to provide a description or title for a form field group?",
        "choices": ["<legend>", "<caption>", "<summary>", "<title>"],
        "correctAnswer": 0
    },
    {
        "question": "What is the purpose of the 'aria-describedby' attribute?",
        "choices": ["To link to a description of the element", "To specify the element's role", "To provide a tooltip", "To set the element's aria-label"],
        "correctAnswer": 0
    },
    {
        "question": "Which HTML tag should be used to create a navigation section that is accessible for screen readers?",
        "choices": ["<nav>", "<menu>", "<link>", "<sidebar>"],
        "correctAnswer": 0
    },
    {
        "question": "Which attribute can be used to specify a live region that updates automatically for screen readers?",
        "choices": ["aria-live", "aria-atomic", "aria-busy", "aria-relevant"],
        "correctAnswer": 0
    },
    {
        "question": "What is the purpose of the 'aria-hidden' attribute?",
        "choices": ["To hide an element from screen readers", "To hide an element from the visual display", "To provide an alternative description", "To indicate an element is disabled"],
        "correctAnswer": 0
    },
    {
        "question": "Which attribute should be used to mark an element as interactive for assistive technologies?",
        "choices": ["aria-interactive", "aria-controls", "aria-role", "aria-expanded"],
        "correctAnswer": 1
    },
    {
        "question": "What HTML tag is used to identify the main content area of a document for assistive technologies?",
        "choices": ["<main>", "<article>", "<section>", "<div>"],
        "correctAnswer": 0
    },
    {
        "question": "Which HTML tag is used to create a semantic header section for a document or a section of a document?",
        "choices": ["<header>", "<footer>", "<nav>", "<aside>"],
        "correctAnswer": 0
    },
    {
        "question": "What attribute is used to ensure that form controls have a label that screen readers can access?",
        "choices": ["aria-labelledby", "aria-label", "label", "name"],
        "correctAnswer": 0
    },
    {
        "question": "Which HTML element is used to create a footer section that often contains copyright or contact information?",
        "choices": ["<footer>", "<section>", "<aside>", "<header>"],
        "correctAnswer": 0
    },
    {
        "question": "What does the 'aria-expanded' attribute indicate?",
        "choices": ["The visibility of expandable content", "The state of an element's expansion", "The loading state of an element", "The focus state of an element"],
        "correctAnswer": 1
    },
    {
        "question": "Which attribute should be used to define a tooltip for an HTML element for better accessibility?",
        "choices": ["aria-tooltip", "aria-title", "title", "aria-description"],
        "correctAnswer": 2
    },
    {
        "question": "Which attribute is used to provide a hint about the expected input for a form field?",
        "choices": ["placeholder", "aria-placeholder", "title", "hint"],
        "correctAnswer": 0
    },
    {
        "question": "Which HTML tag is used to define a section that groups related content or controls?",
        "choices": ["<section>", "<div>", "<article>", "<group>"],
        "correctAnswer": 0
    },
    {
        "question": "What is the purpose of the 'aria-role' attribute?",
        "choices": ["To define the role of an element", "To describe the element's purpose", "To provide an accessible name", "To indicate the element's state"],
        "correctAnswer": 0
    },
    {
        "question": "Which attribute helps users with cognitive disabilities understand the purpose of a form element?",
        "choices": ["aria-label", "aria-description", "aria-labelledby", "aria-placeholder"],
        "correctAnswer": 1
    },
    {
        "question": "What is the function of the 'aria-controls' attribute?",
        "choices": ["To identify the element that controls another", "To specify the role of the element", "To provide a description for the element", "To link the element to a data source"],
        "correctAnswer": 0
    },
    {
        "question": "Which attribute is used to ensure a form field is not editable by users with disabilities?",
        "choices": ["disabled", "readonly", "required", "aria-disabled"],
        "correctAnswer": 3
    },
    {
        "question": "Which HTML element should be used to create an accessible table for presenting data?",
        "choices": ["<table>", "<data>", "<grid>", "<list>"],
        "correctAnswer": 0
    },
    {
        "question": "What attribute is used to specify that a form control is mandatory for submission?",
        "choices": ["required", "mandatory", "obligatory", "essential"],
        "correctAnswer": 0
    },
    {
        "question": "Which attribute provides a visible description of an input field for users who rely on screen readers?",
        "choices": ["aria-label", "aria-description", "title", "placeholder"],
        "correctAnswer": 0
    },
    {
        "question": "Which HTML tag should be used to describe a group of related form controls with a heading?",
        "choices": ["<fieldset>", "<legend>", "<group>", "<section>"],
        "correctAnswer": 0
    },
    {
        "question": "What does the 'aria-live' attribute indicate in an HTML document?",
        "choices": ["The dynamic updates of an element", "The visibility of an element", "The interactive state of an element", "The role of an element"],
        "correctAnswer": 0
    }
];

let currentFileHandlingQuestion = 0;
let fileHandlingScore = 0;
let fileHandlingAttempt = JSON.parse(localStorage.getItem('htmlAcces')) || 0;
let fileHandlingScores = JSON.parse(localStorage.getItem('htmlAcce')) || [];

const fileHandlingQuestionElement = document.getElementById('question');
const fileHandlingChoicesElement = document.getElementById('choices');
const fileHandlingResultElement = document.getElementById('result');
const fileHandlingNextButton = document.getElementById('next-btn');
const fileHandlingProgressElement = document.getElementById('current-question');
const fileHandlingScoresList = document.getElementById('scores-list');
const fileHandlingReattemptButton = document.getElementById('reattempt-btn');

function loadFileHandlingQuestion() {
    const q = fileHandlingQuizData[currentFileHandlingQuestion];
    fileHandlingQuestionElement.textContent = q.question;

    fileHandlingChoicesElement.innerHTML = '';
    q.choices.forEach((choice, index) => {
        const li = document.createElement('li');
        li.textContent = choice;
        li.addEventListener('click', () => checkFileHandlingAnswer(index));
        fileHandlingChoicesElement.appendChild(li);
    });

    fileHandlingProgressElement.textContent = currentFileHandlingQuestion + 1;
}

function checkFileHandlingAnswer(index) {
    const correctAnswerIndex = fileHandlingQuizData[currentFileHandlingQuestion].correctAnswer;
    if (index === correctAnswerIndex) {
        fileHandlingScore++;
        fileHandlingResultElement.textContent = 'Correct!';
    } else {
        fileHandlingResultElement.textContent = `Wrong! The correct answer is: ${fileHandlingQuizData[currentFileHandlingQuestion].choices[correctAnswerIndex]}`;
    }
    disableFileHandlingChoices();
    fileHandlingNextButton.disabled = false;
}

function disableFileHandlingChoices() {
    fileHandlingChoicesElement.querySelectorAll('li').forEach(choice => {
        choice.style.cursor = 'not-allowed';
        choice.style.backgroundColor = '#ccc';
    });
}

function nextFileHandlingQuestion() {
    currentFileHandlingQuestion++;
    if (currentFileHandlingQuestion < fileHandlingQuizData.length) {
        loadFileHandlingQuestion();
        fileHandlingResultElement.textContent = '';
        fileHandlingNextButton.disabled = true;
    } else {
        showFileHandlingResults();
    }
}

function showFileHandlingResults() {
    fileHandlingQuestionElement.textContent = `File Handling Quiz completed! You scored ${fileHandlingScore} out of ${fileHandlingQuizData.length}.`;
    fileHandlingChoicesElement.innerHTML = '';
    fileHandlingResultElement.textContent = '';
    fileHandlingNextButton.style.display = 'none';
    fileHandlingReattemptButton.style.display = 'inline-block';

    // Increment attempt count
    fileHandlingAttempt++;
    localStorage.setItem('htmlAcces', JSON.stringify(fileHandlingAttempt));

    // Save score to scores array
    fileHandlingScores.push({
        attempt: fileHandlingAttempt,
        score: fileHandlingScore
    });
    localStorage.setItem('htmlAcce', JSON.stringify(fileHandlingScores));

    // Display scores
    displayFileHandlingScores();
}

function displayFileHandlingScores() {
    fileHandlingScoresList.innerHTML = '';
    fileHandlingScores.forEach(scoreItem => {
        const li = document.createElement('li');
        li.textContent = `Attempt ${scoreItem.attempt}: ${scoreItem.score} / ${fileHandlingQuizData.length}`;
        fileHandlingScoresList.appendChild(li);
    });
}

function reattemptFileHandlingQuiz() {
    currentFileHandlingQuestion = 0;
    fileHandlingScore = 0;
    fileHandlingNextButton.style.display = 'inline-block';
    fileHandlingReattemptButton.style.display = 'none';
    loadFileHandlingQuestion();
    fileHandlingResultElement.textContent = '';
}

fileHandlingNextButton.addEventListener('click', nextFileHandlingQuestion);
fileHandlingReattemptButton.addEventListener('click', reattemptFileHandlingQuiz);

// Initial load
loadFileHandlingQuestion();
displayFileHandlingScores();
