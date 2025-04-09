// Define the quiz data for File I/O in Java
const fileIOQuizData = [
    {
        "question": "Which class is used to read data from a file in Java?",
        "choices": ["FileReader", "FileInputStream", "BufferedReader", "FileReader"],
        "correctAnswer": 0
    },
    {
        "question": "What is the default encoding used by FileReader in Java?",
        "choices": ["UTF-8", "ISO-8859-1", "System default encoding", "ASCII"],
        "correctAnswer": 2
    },
    {
        "question": "Which class is used to write data to a file in Java?",
        "choices": ["FileWriter", "FileOutputStream", "BufferedWriter", "FileWriter"],
        "correctAnswer": 0
    },
    {
        "question": "How do you create a FileReader object to read a file named 'data.txt'?",
        "choices": ["new FileReader(\"data.txt\")", "new FileInputStream(\"data.txt\")", "new BufferedReader(\"data.txt\")", "new FileReader(\"data.txt\")"],
        "correctAnswer": 0
    },
    {
        "question": "What is the purpose of the BufferedReader class in Java?",
        "choices": ["To read text from a character-input stream", "To read binary data", "To buffer data for fast access", "To write data to a file"],
        "correctAnswer": 0
    },
    {
        "question": "Which class is used to create a directory in Java?",
        "choices": ["File", "Directory", "Path", "Folder"],
        "correctAnswer": 0
    },
    {
        "question": "How do you check if a file exists in Java?",
        "choices": ["file.exists()", "file.isExist()", "file.isAvailable()", "file.isExist()"],
        "correctAnswer": 0
    },
    {
        "question": "What is the purpose of the FileOutputStream class in Java?",
        "choices": ["To write binary data to a file", "To read binary data from a file", "To write text data to a file", "To read text data from a file"],
        "correctAnswer": 0
    },
    {
        "question": "Which method is used to close a file in Java?",
        "choices": ["close()", "terminate()", "end()", "shutdown()"],
        "correctAnswer": 0
    },
    {
        "question": "How do you create a new file in Java?",
        "choices": ["new File(\"filename.txt\").createNewFile()", "new File(\"filename.txt\").makeNewFile()", "new File(\"filename.txt\").createFile()", "new File(\"filename.txt\").newFile()"],
        "correctAnswer": 0
    },
    {
        "question": "Which method is used to write a string to a file in Java?",
        "choices": ["writeString()", "write()", "print()", "println()"],
        "correctAnswer": 1
    },
    {
        "question": "How do you read a line of text from a file in Java?",
        "choices": ["readLine()", "read()", "nextLine()", "getLine()"],
        "correctAnswer": 0
    },
    {
        "question": "Which class is used to work with directories in Java?",
        "choices": ["File", "Directory", "Path", "Folder"],
        "correctAnswer": 0
    },
    {
        "question": "What is the purpose of the Scanner class in Java?",
        "choices": ["To parse primitive types and strings using regular expressions", "To read binary data", "To write data to a file", "To buffer data for fast access"],
        "correctAnswer": 0
    },
    {
        "question": "How do you delete a file in Java?",
        "choices": ["file.delete()", "file.remove()", "file.erase()", "file.clear()"],
        "correctAnswer": 0
    },
    {
        "question": "Which method is used to append data to a file in Java?",
        "choices": ["append()", "add()", "write()", "insert()"],
        "correctAnswer": 0
    },
    {
        "question": "How do you list all files in a directory in Java?",
        "choices": ["file.listFiles()", "file.getFiles()", "file.listAllFiles()", "file.getAllFiles()"],
        "correctAnswer": 0
    },
    {
        "question": "Which class is used to read binary data from a file in Java?",
        "choices": ["FileInputStream", "FileReader", "BufferedReader", "FileInputStream"],
        "correctAnswer": 0
    },
    {
        "question": "How do you write binary data to a file in Java?",
        "choices": ["new FileOutputStream(\"filename\").write()", "new FileWriter(\"filename\").write()", "new BufferedWriter(\"filename\").write()", "new FileOutputStream(\"filename\").write()"],
        "correctAnswer": 0
    },
    {
        "question": "What is the purpose of the PrintWriter class in Java?",
        "choices": ["To write formatted text to a file", "To read text from a file", "To write binary data to a file", "To read binary data from a file"],
        "correctAnswer": 0
    },
    {
        "question": "Which class is used to copy files in Java?",
        "choices": ["Files", "FileUtils", "File", "Path"],
        "correctAnswer": 0
    },
    {
        "question": "What is the default buffer size used by BufferedWriter in Java?",
        "choices": ["8KB", "16KB", "32KB", "64KB"],
        "correctAnswer": 0
    },
    {
        "question": "How do you get the size of a file in Java?",
        "choices": ["file.length()", "file.size()", "file.getSize()", "file.getLength()"],
        "correctAnswer": 0
    },
    {
        "question": "Which method is used to rename a file in Java?",
        "choices": ["renameTo()", "changeName()", "setName()", "rename()"],
        "correctAnswer": 0
    },
    {
        "question": "What is the purpose of the FileChannel class in Java?",
        "choices": ["To transfer data to and from files", "To read text from a file", "To write text to a file", "To buffer data for fast access"],
        "correctAnswer": 0
    },
    {
        "question": "Which class is used to create a temporary file in Java?",
        "choices": ["Files", "FileUtils", "File", "Path"],
        "correctAnswer": 0
    },
    {
        "question": "How do you read all lines of a file into a List in Java?",
        "choices": ["Files.readAllLines()", "FileUtils.readAllLines()", "File.readAllLines()", "Path.readAllLines()"],
        "correctAnswer": 0
    },
    {
        "question": "Which class is used to read properties from a file in Java?",
        "choices": ["Properties", "FileReader", "FileInputStream", "BufferedReader"],
        "correctAnswer": 0
    },
    {
        "question": "How do you move a file in Java?",
        "choices": ["Files.move()", "FileUtils.move()", "File.move()", "Path.move()"],
        "correctAnswer": 0
    },
    {
        "question": "What is the purpose of the RandomAccessFile class in Java?",
        "choices": ["To read and write to a random access file", "To read text from a file", "To write text to a file", "To buffer data for fast access"],
        "correctAnswer": 0
    }
];

let currentFileIOQuestion = 0;
let fileIOScore = 0;
let fileIOAttempt = JSON.parse(localStorage.getItem('fileIOAttemptCount')) || 0;
let fileIOScores = JSON.parse(localStorage.getItem('fileIOQuizScores')) || [];

const fileIOQuestionElement = document.getElementById('java-question');
const fileIOChoicesElement = document.getElementById('java-choices');
const fileIOResultElement = document.getElementById('java-result');
const fileIONextButton = document.getElementById('java-next-btn');
const fileIOProgressElement = document.getElementById('java-current-question');
const fileIOScoresList = document.getElementById('java-scores-list');
const fileIOReattemptButton = document.getElementById('java-reattempt-btn');

function loadFileIOQuestion() {
    const q = fileIOQuizData[currentFileIOQuestion];
    fileIOQuestionElement.textContent = q.question;

    fileIOChoicesElement.innerHTML = '';
    q.choices.forEach((choice, index) => {
        const li = document.createElement('li');
        li.textContent = choice;
        li.addEventListener('click', () => checkFileIOAnswer(index));
        fileIOChoicesElement.appendChild(li);
    });

    fileIOProgressElement.textContent = currentFileIOQuestion + 1;
}

function checkFileIOAnswer(index) {
    const correctAnswerIndex = fileIOQuizData[currentFileIOQuestion].correctAnswer;
    if (index === correctAnswerIndex) {
        fileIOScore++;
        fileIOResultElement.textContent = 'Correct!';
    } else {
        fileIOResultElement.textContent = `Wrong! The correct answer is: ${fileIOQuizData[currentFileIOQuestion].choices[correctAnswerIndex]}`;
    }
    disableFileIOChoices();
    fileIONextButton.disabled = false;
}

function disableFileIOChoices() {
    fileIOChoicesElement.querySelectorAll('li').forEach(choice => {
        choice.style.cursor = 'not-allowed';
        choice.style.backgroundColor = '#ccc';
    });
}

function nextFileIOQuestion() {
    currentFileIOQuestion++;
    if (currentFileIOQuestion < fileIOQuizData.length) {
        loadFileIOQuestion();
        fileIOResultElement.textContent = '';
        fileIONextButton.disabled = true;
    } else {
        showFileIOResults();
    }
}

function showFileIOResults() {
    fileIOQuestionElement.textContent = `File I/O Quiz completed! You scored ${fileIOScore} out of ${fileIOQuizData.length}.`;
    fileIOChoicesElement.innerHTML = '';
    fileIOResultElement.textContent = '';
    fileIONextButton.style.display = 'none';
    fileIOReattemptButton.style.display = 'inline-block';

    // Increment attempt count
    fileIOAttempt++;
    localStorage.setItem('fileIOAttemptCount', JSON.stringify(fileIOAttempt));

    // Save score to scores array
    fileIOScores.push({
        attempt: fileIOAttempt,
        score: fileIOScore
    });
    localStorage.setItem('fileIOQuizScores', JSON.stringify(fileIOScores));

    // Display scores
    displayFileIOScores();
}

function displayFileIOScores() {
    fileIOScoresList.innerHTML = '';
    fileIOScores.forEach(scoreItem => {
        const li = document.createElement('li');
        li.textContent = `Attempt ${scoreItem.attempt}: ${scoreItem.score} / ${fileIOQuizData.length}`;
        fileIOScoresList.appendChild(li);
    });
}

function reattemptFileIOQuiz() {
    currentFileIOQuestion = 0;
    fileIOScore = 0;
    fileIONextButton.style.display = 'inline-block';
    fileIOReattemptButton.style.display = 'none';
    loadFileIOQuestion();
    fileIOResultElement.textContent = '';
}

fileIONextButton.addEventListener('click', nextFileIOQuestion);
fileIOReattemptButton.addEventListener('click', reattemptFileIOQuiz);

// Initial load
loadFileIOQuestion();
displayFileIOScores();
