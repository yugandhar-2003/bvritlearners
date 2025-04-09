// Define the quiz data for File Handling in C
const fileHandlingQuizData = [
    {
        "question": "Which tag is used to embed an image in an HTML document?",
        "choices": ["<img>", "<image>", "<picture>", "<photo>"],
        "correctAnswer": 0
    },
    {
        "question": "Which tag is used to define an audio file in HTML?",
        "choices": ["<audio>", "<sound>", "<music>", "<track>"],
        "correctAnswer": 0
    },
    {
        "question": "Which tag is used to define a video file in HTML?",
        "choices": ["<video>", "<movie>", "<film>", "<clip>"],
        "correctAnswer": 0
    },
    {
        "question": "Which attribute is used with the <video> tag to specify a video source?",
        "choices": ["src", "source", "file", "media"],
        "correctAnswer": 0
    },
    {
        "question": "Which tag is used to include a subtitle track in a video?",
        "choices": ["<track>", "<subtitles>", "<caption>", "<text>"],
        "correctAnswer": 0
    },
    {
        "question": "Which attribute is used with the <audio> tag to control the playback of audio?",
        "choices": ["controls", "play", "volume", "autoplay"],
        "correctAnswer": 0
    },
    {
        "question": "Which tag is used to define a canvas for drawing graphics in HTML?",
        "choices": ["<canvas>", "<draw>", "<graphic>", "<picture>"],
        "correctAnswer": 0
    },
    {
        "question": "Which attribute of the <img> tag specifies the image's width?",
        "choices": ["width", "size", "height", "dimension"],
        "correctAnswer": 0
    },
    {
        "question": "Which attribute of the <img> tag specifies the image's alternative text?",
        "choices": ["alt", "title", "desc", "text"],
        "correctAnswer": 0
    },
    {
        "question": "Which tag is used to specify a source for a video file in the <video> tag?",
        "choices": ["<source>", "<file>", "<media>", "<video-source>"],
        "correctAnswer": 0
    },
    {
        "question": "Which attribute is used with the <video> tag to automatically play the video when the page loads?",
        "choices": ["autoplay", "play", "start", "loop"],
        "correctAnswer": 0
    },
    {
        "question": "Which tag is used to provide a fallback message for users who cannot view a video?",
        "choices": ["<video>", "<fallback>", "<message>", "<source>"],
        "correctAnswer": 0
    },
    {
        "question": "Which tag is used to provide information about a media file, such as its duration or dimensions?",
        "choices": ["<metadata>", "<info>", "<details>", "<media>"],
        "correctAnswer": 0
    },
    {
        "question": "Which attribute of the <audio> tag specifies that the audio should start playing automatically?",
        "choices": ["autoplay", "play", "start", "loop"],
        "correctAnswer": 0
    },
    {
        "question": "Which attribute of the <video> tag specifies the aspect ratio of the video?",
        "choices": ["width", "height", "ratio", "aspect"],
        "correctAnswer": 0
    },
    {
        "question": "Which tag is used to create a hyperlink to a video file?",
        "choices": ["<a>", "<link>", "<video>", "<source>"],
        "correctAnswer": 0
    },
    {
        "question": "Which attribute is used to make an audio or video element loop indefinitely?",
        "choices": ["loop", "repeat", "endless", "autoplay"],
        "correctAnswer": 0
    },
    {
        "question": "Which tag is used to specify the dimensions of a canvas element?",
        "choices": ["width", "height", "size", "dimension"],
        "correctAnswer": 0
    },
    {
        "question": "Which tag is used to define a media query for responsive images in HTML?",
        "choices": ["<picture>", "<image>", "<media>", "<source>"],
        "correctAnswer": 0
    },
    {
        "question": "Which attribute of the <audio> tag specifies the path to the audio file?",
        "choices": ["src", "file", "path", "source"],
        "correctAnswer": 0
    },
    {
        "question": "Which tag is used to include an external resource in HTML, such as a stylesheet or script?",
        "choices": ["<link>", "<include>", "<import>", "<resource>"],
        "correctAnswer": 0
    }
]

let currentFileHandlingQuestion = 0;
let fileHandlingScore = 0;
let fileHandlingAttempt = JSON.parse(localStorage.getItem('htmlMultis')) || 0;
let fileHandlingScores = JSON.parse(localStorage.getItem('htmlMulti')) || [];

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
    localStorage.setItem('htmlMultis', JSON.stringify(fileHandlingAttempt));

    // Save score to scores array
    fileHandlingScores.push({
        attempt: fileHandlingAttempt,
        score: fileHandlingScore
    });
    localStorage.setItem('htmlMulti', JSON.stringify(fileHandlingScores));

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
