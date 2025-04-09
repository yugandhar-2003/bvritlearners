// Define the quiz data for File Handling
const fileHandlingQuizData = [
    {
        question: "What is the correct way to open a file 'data.txt' in Python for reading?",
        choices: ["file = open('data.txt', 'r')", "file = open('data.txt', 'w')", "file = open('data.txt', 'rb')", "file = open('data.txt', 'read')"],
        correctAnswer: 0
    },
    {
        question: "How do you close an open file object 'file' in Python?",
        choices: ["file.close()", "close(file)", "file.close", "closeFile(file)"],
        correctAnswer: 0
    },
    {
        question: "Which mode is used to open a file for reading and writing both in Python?",
        choices: ["a", "b", "r+", "rw"],
        correctAnswer: 2
    },
    {
        question: "What does the 'with' statement do in relation to file handling in Python?",
        choices: ["Opens and closes the file automatically", "Deletes the file after use", "Creates a backup of the file", "None of the above"],
        correctAnswer: 0
    },
    {
        question: "How do you read the entire content of a file 'data.txt' in one go in Python?",
        choices: ["readAll('data.txt')", "file.readAll()", "file.read()", "file.readAll('data.txt')"],
        correctAnswer: 2
    },
    {
        question: "In Python, how do you write 'Hello, World!' to a file named 'output.txt'?",
        choices: ["file.write('Hello, World!')", "file.writeToFile('output.txt', 'Hello, World!')", "write('output.txt', 'Hello, World!')", "file.write('output.txt', 'Hello, World!')"],
        correctAnswer: 0
    },
    {
        question: "What method is used to check if a file exists in Python?",
        choices: ["file.exists()", "exists(file)", "os.path.exists(file)", "checkFileExistence(file)"],
        correctAnswer: 2
    },
    {
        question: "How do you read the first line of a file 'data.txt' in Python?",
        choices: ["file.readLine()", "file.readline()", "readLine('data.txt')", "file.readFirstLine()"],
        correctAnswer: 1
    },
    {
        question: "What does the 'w' mode do when opening a file in Python?",
        choices: ["Opens the file for reading", "Opens the file for reading and writing", "Truncates the file before writing", "Appends to the end of the file"],
        correctAnswer: 2
    },
    {
        question: "How do you append 'new data' to an existing file 'data.txt' in Python?",
        choices: ["file.append('data.txt', 'new data')", "file.append('new data')", "file.appendToFile('data.txt', 'new data')", "file.write('data.txt', 'new data')"],
        correctAnswer: 2
    },
    {
        question: "What is the method used to iterate through each line of a file 'data.txt' in Python?",
        choices: ["for line in file.readlines():", "for line in file.readLines():", "foreach line in file:", "while line in file:"],
        correctAnswer: 0
    },
    {
        question: "How do you check the current position within a file 'data.txt' in Python?",
        choices: ["file.position()", "file.tell()", "getPosition(file)", "file.currentPosition()"],
        correctAnswer: 1
    },
    {
        question: "Which method is used to truncate a file 'data.txt' to a specified size in Python?",
        choices: ["file.truncate(size)", "truncateFile('data.txt', size)", "file.setSize(size)", "setSize('data.txt', size)"],
        correctAnswer: 0
    },
    {
        question: "What does the 'a' mode do when opening a file in Python?",
        choices: ["Opens the file for reading", "Opens the file for reading and writing", "Appends to the end of the file", "Truncates the file before writing"],
        correctAnswer: 2
    },
    {
        question: "How do you write multiple lines to a file 'output.txt' in Python?",
        choices: ["file.writeLines(['line1', 'line2', 'line3'])", "file.write('line1\nline2\nline3')", "writeLines('output.txt', ['line1', 'line2', 'line3'])", "file.write('output.txt', ['line1', 'line2', 'line3'])"],
        correctAnswer: 0
    },
    {
        question: "In Python, how do you rename a file 'old.txt' to 'new.txt'?",
        choices: ["renameFile('old.txt', 'new.txt')", "os.rename('old.txt', 'new.txt')", "file.rename('new.txt')", "moveFile('old.txt', 'new.txt')"],
        correctAnswer: 1
    },
    {
        question: "What method is used to write binary data to a file 'data.bin' in Python?",
        choices: ["file.writeBinary('data.bin', data)", "file.write(data)", "writeBinary('data.bin', data)", "file.writeBinary(data)"],
        correctAnswer: 1
    },
    {
        question: "How do you check if a file 'data.txt' is writable in Python?",
        choices: ["file.writable('data.txt')", "isWritable('data.txt')", "os.path.writable('data.txt')", "file.isWritable()"],
        correctAnswer: 0
    },
    {
        question: "What does the 'r+' mode do when opening a file in Python?",
        choices: ["Opens the file for reading", "Opens the file for reading and writing", "Appends to the end of the file", "Truncates the file before writing"],
        correctAnswer: 1
    },
    {
        question: "How do you delete a file 'data.txt' in Python?",
        choices: ["deleteFile('data.txt')", "file.delete('data.txt')", "os.remove('data.txt')", "file.remove('data.txt')"],
        correctAnswer: 2
    },
    {
        question: "What is the method used to check if a file 'data.txt' is readable in Python?",
        choices: ["file.readable('data.txt')", "isReadable('data.txt')", "os.path.readable('data.txt')", "file.isReadable()"],
        correctAnswer: 0
    },
    {
        question: "How do you read a specific number of bytes from a file 'data.bin' in Python?",
        choices: ["file.readBytes('data.bin', n)", "readBytes('data.bin', n)", "file.read(n)", "file.readBytes(n)"],
        correctAnswer: 2
    },
    {
        question: "What does the 'x' mode do when opening a file in Python?",
        choices: ["Opens the file for exclusive creation", "Opens the file for reading and writing", "Appends to the end of the file", "Truncates the file before writing"],
        correctAnswer: 0
    },
    {
        question: "How do you check the size of a file 'data.txt' in Python?",
        choices: ["file.size('data.txt')", "getSize('data.txt')", "os.path.getsize('data.txt')", "file.getSize('data.txt')"],
        correctAnswer: 2
    },
    {
        question: "What method is used to write formatted data to a file 'output.txt' in Python?",
        choices: ["file.writeFormatted('output.txt', data)", "file.write(data)", "writeFormatted('output.txt', data)", "file.writeFormatted(data)"],
        correctAnswer: 3
    },
    {
        question: "In Python, how do you create a directory 'new_dir'?",
        choices: ["os.makeDir('new_dir')", "createDir('new_dir')", "os.mkdir('new_dir')", "makeDir('new_dir')"],
        correctAnswer: 2
    },
    {
        question: "How do you check if a path 'path/to/file' is a directory in Python?",
        choices: ["isDir('path/to/file')", "os.path.isdir('path/to/file')", "file.isDirectory('path/to/file')", "checkDir('path/to/file')"],
        correctAnswer: 1
    },
    {
        question: "What does the 'rb' mode do when opening a file in Python?",
        choices: ["Opens the file for reading", "Opens the file for reading and writing in binary mode", "Appends to the end of the file in binary mode", "Truncates the file before writing in binary mode"],
        correctAnswer: 1
    },
    {
        question: "How do you check if a file 'data.txt' exists and is a regular file in Python?",
        choices: ["file.isRegular('data.txt')", "os.path.isfile('data.txt')", "checkRegularFile('data.txt')", "isFile('data.txt')"],
        correctAnswer: 1
    },
    {
        question: "What method is used to read and write binary data to a file 'data.bin' in Python?",
        choices: ["file.binaryReadWrite('data.bin')", "file.readWriteBinary('data.bin')", "binaryReadWrite('data.bin')", "file.readWrite('data.bin')"],
        correctAnswer: 1
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
