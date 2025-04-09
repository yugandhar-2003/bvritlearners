// Define the quiz data for File Handling in C
const fileHandlingQuizData = [
    {
        "question": "Which function is used to open a file in C?",
        "choices": [  "open","fopen", "file_open", "open_file"],
        "correctAnswer": 1
    },
    {
        "question": "What is the default mode for opening a file using fopen() in C?",
        "choices": [ "w", "a", "rb","r"],
        "correctAnswer": 3
    },
    {
        "question": "Which function is used to read a character from a file in C?",
        "choices": [ "getc", "read", "fread","fgetc"],
        "correctAnswer": 3
    },
    {
        "question": "How do you write a string to a file in C?",
        "choices": ["fputs", "putstr", "write", "fwrite"],
        "correctAnswer": 0
    },
    {
        "question": "What is the correct way to close a file in C?",
        "choices": ["close(file)", "fclose(file)", "end(file)", "file.close()"],
        "correctAnswer": 1
    },
    {
        "question": "Which function is used to set the file position indicator in C?",
        "choices": ["fseek", "seek", "setpos", "filepos"],
        "correctAnswer": 0
    },
    {
        "question": "What does the 'a' mode do when opening a file in C?",
        "choices": ["Opens for reading", "Opens for writing", "Appends to file", "Opens in binary mode"],
        "correctAnswer": 2
    },
    {
        "question": "Which function is used to get the current position of the file pointer in C?",
        "choices": ["ftell", "tell", "fgetpos", "getpos"],
        "correctAnswer": 0
    },
    {
        "question": "What is the return value of fgetc() when the end of file is reached?",
        "choices": ["0", "1", "EOF", "NULL"],
        "correctAnswer": 2
    },
    {
        "question": "How do you check if a file was opened successfully in C?",
        "choices": ["if (file)",  "if (file != NULL)", "if (!file)","if (file == NULL)"],
        "correctAnswer": 3
    },
    {
        "question": "Which function is used to write formatted output to a file in C?",
        "choices": ["fprintf", "fwrite", "fputs", "writef"],
        "correctAnswer": 0
    },
    {
        "question": "What does the 'r+' mode do when opening a file in C?",
        "choices": ["Read-only", "Write-only", "Read and write", "Append"],
        "correctAnswer": 2
    },
    {
        "question": "How do you read a string from a file in C?",
        "choices": ["fgets", "getstr", "readstr", "fread"],
        "correctAnswer": 0
    },
    {
        "question": "Which function is used to write a character to a file in C?",
        "choices": [  "putc","fputc", "writec", "fwrite"],
        "correctAnswer": 1
    },
    {
        "question": "How do you move the file pointer to the beginning of a file in C?",
        "choices": ["fseek(file, 0, SEEK_SET)", "seek(file, 0, SEEK_SET)", "rewind(file)", "fsetpos(file, 0)"],
        "correctAnswer": 2
    },
    {
        "question": "Which function is used to flush the output buffer to a file in C?",
        "choices": ["flush", "fwrite","fflush", "fclose"],
        "correctAnswer": 2
    },
    {
        "question": "What is the size of the buffer used by default in setbuf() in C?",
        "choices": ["BUFSIZ", "1024", "512", "4096"],
        "correctAnswer": 0
    },
    {
        "question": "Which function is used to read binary data from a file in C?",
        "choices": ["read","fread", "fgetc", "fscanf"],
        "correctAnswer": 1
    },
    {
        "question": "How do you write binary data to a file in C?",
        "choices": ["write", "fputs", "fprintf","fwrite"],
        "correctAnswer": 3
    },
    {
        "question": "What is the return value of fwrite() in C?",
        "choices": ["Number of elements written", "Number of bytes written", "1 on success, 0 on failure", "EOF on failure"],
        "correctAnswer": 0
    },
    {
        "question": "Which function is used to reposition the file pointer to a previous position in C?",
        "choices": ["fseek", "rewind", "fsetpos", "ftell"],
        "correctAnswer": 2
    },
    {
        "question": "What is the purpose of the feof() function in C?",
        "choices": ["To check if end of file has been reached", "To close a file", "To read a file", "To write to a file"],
        "correctAnswer": 0
    },
    {
        "question": "How do you associate a file with a stream in C?",
        "choices": ["fopen", "freopen", "fileopen", "streamopen"],
        "correctAnswer": 1
    },
    {
        "question": "Which function is used to read formatted input from a file in C?",
        "choices": ["fscanf", "fgets", "fread", "fgetc"],
        "correctAnswer": 0
    },
    {
        "question": "How do you check for a file error in C?",
        "choices": [  "feof","ferror", "fcheck", "fstatus"],
        "correctAnswer": 1
    },
    {
        "question": "Which function is used to clear the error indicator for a file in C?",
        "choices": [  "fclear", "reseterr", "reset","clearerr"],
        "correctAnswer": 3
    },
    {
        "question": "What is the default mode for fopen() if the mode is not specified?",
        "choices": [  "w","r", "a", "rb"],
        "correctAnswer": 1
    },
    {
        "question": "Which function is used to set a buffer for a file stream in C?",
        "choices": [  "fsetbuf", "buffer","setbuf", "fbuf"],
        "correctAnswer": 2
    },
    {
        "question": "How do you determine the length of a file in C?",
        "choices": ["Use fseek and ftell", "Use fread", "Use fgetpos", "Use ftell directly"],
        "correctAnswer": 0
    },
    {
        "question": "Which function is used to delete a file in C?",
        "choices": [  "delete","remove", "unlink", "fdelete"],
        "correctAnswer": 1
    }
];

let currentFileHandlingQuestion = 0;
let fileHandlingScore = 0;
let fileHandlingAttempt = JSON.parse(localStorage.getItem('fileHandlingAttemptCount')) || 0;
let fileHandlingScores = JSON.parse(localStorage.getItem('fileHandlingQuizScores')) || [];

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
    localStorage.setItem('fileHandlingAttemptCount', JSON.stringify(fileHandlingAttempt));

    // Save score to scores array
    fileHandlingScores.push({
        attempt: fileHandlingAttempt,
        score: fileHandlingScore
    });
    localStorage.setItem('fileHandlingQuizScores', JSON.stringify(fileHandlingScores));

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
