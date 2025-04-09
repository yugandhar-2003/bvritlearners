// Define the quiz data for Java Methods
const javaMethodsQuizData = [
    {
        question: "What is a method in Java?",
        choices: ["A class instance variable", "A function that belongs to a class", "A constant value", "A reserved keyword"],
        correctAnswer: 1
    },
    {
        question: "How do you define a method in Java?",
        choices: ["def methodName()", "void methodName()", "function methodName()", "methodName() {}"],
        correctAnswer: 3
    },
    {
        question: "Which keyword is used to define a method that does not return any value in Java?",
        choices: ["void", "null", "none", "return"],
        correctAnswer: 0
    },
    {
        question: "What is method overloading in Java?",
        choices: ["Defining multiple methods with the same name but different parameters", "Calling a method from within another method", "Renaming a method after its definition", "Creating a method without any parameters"],
        correctAnswer: 0
    },
    {
        question: "How do you call a method 'printMessage' defined in a class 'Message' in Java?",
        choices: ["Message.printMessage()", "printMessage(Message)", "printMessage()", "Message.printMessage"],
        correctAnswer: 3
    },
    {
        question: "Which keyword is used to invoke a superclass method from a subclass method in Java?",
        choices: ["super", "this", "parent", "extends"],
        correctAnswer: 0
    },
    {
        question: "What is method overriding in Java?",
        choices: ["Defining multiple methods with the same name and same parameters", "Calling a method multiple times in a loop", "Replacing a method implementation in a subclass", "Using methods from different classes"],
        correctAnswer: 2
    },
    {
        question: "How do you define a method 'calculate' that returns an integer in Java?",
        choices: ["method calculate(): int", "define int calculate()", "int calculate()", "calculate() int"],
        correctAnswer: 2
    },
    {
        question: "Which keyword is used to prevent a method from being overridden in Java?",
        choices: ["final", "static", "override", "private"],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of the 'return' statement in a method?",
        choices: ["To terminate the method execution", "To define the method's parameters", "To print output to the console", "To declare method visibility"],
        correctAnswer: 0
    },
    {
        question: "How do you define a method 'getName' that returns a String in Java?",
        choices: ["String getName()", "method getName(String): String", "getName() String", "define String getName()"],
        correctAnswer: 0
    },
    {
        question: "Which keyword is used to define a method that belongs to the class rather than to any particular object?",
        choices: ["static", "class", "public", "method"],
        correctAnswer: 0
    },
    {
        question: "What is the difference between a method and a function in Java?",
        choices: ["There is no difference", "A method belongs to a class, while a function does not", "A function is more efficient than a method", "A method cannot have parameters"],
        correctAnswer: 1
    },
    {
        question: "How do you define a method 'calculateArea' that returns a double in Java?",
        choices: ["double calculateArea()", "method calculateArea(double): double", "calculateArea(): double", "define double calculateArea()"],
        correctAnswer: 2
    },
    {
        question: "Which keyword is used to define a method that can be accessed from anywhere in the program?",
        choices: ["public", "private", "protected", "package"],
        correctAnswer: 0
    },
    {
        question: "What is a parameterized method in Java?",
        choices: ["A method with multiple return types", "A method with parameters", "A method that returns a parameter", "A method that does not return anything"],
        correctAnswer: 1
    },
    {
        question: "How do you define a method 'isValid' that returns a boolean in Java?",
        choices: ["boolean isValid()", "method isValid(): boolean", "isValid() boolean", "define boolean isValid()"],
        correctAnswer: 0
    },
    {
        question: "Which keyword is used to define a method that cannot be accessed from outside its own class?",
        choices: ["private", "protected", "public", "static"],
        correctAnswer: 0
    },
    {
        question: "What is a constructor method in Java?",
        choices: ["A method that creates an instance of a class", "A method that is static in nature", "A method that returns a value", "A method that is called automatically"],
        correctAnswer: 0
    },
    {
        question: "How do you define a method 'getAverage' that returns a float in Java?",
        choices: ["float getAverage()", "method getAverage(): float", "getAverage() float", "define float getAverage()"],
        correctAnswer: 0
    },
    {
        question: "Which keyword is used to define a method that belongs to a specific instance of a class?",
        choices: ["this", "instance", "object", "method"],
        correctAnswer: 0
    },
    {
        question: "What is a static method in Java?",
        choices: ["A method that can be accessed without creating an instance of the class", "A method that returns a static value", "A method that is declared as private", "A method that cannot have parameters"],
        correctAnswer: 0
    },
    {
        question: "How do you define a method 'convertToInt' that takes an int parameter and returns an int in Java?",
        choices: ["method convertToInt(int): int", "convertToInt() int", "int convertToInt(int)", "define int convertToInt(int)"],
        correctAnswer: 2
    },
    {
        question: "Which keyword is used to define a method that can be accessed by classes in the same package or subclasses?",
        choices: ["protected", "public", "package", "private"],
        correctAnswer: 2
    },
    {
        question: "What is a non-static method in Java?",
        choices: ["A method that can be accessed without creating an instance of the class", "A method that is declared as private", "A method that belongs to a specific instance of a class", "A method that returns a static value"],
        correctAnswer: 2
    },
    {
        question: "How do you define a method 'printDetails' that does not return any value in Java?",
        choices: ["void printDetails()", "printDetails(): void", "printDetails() void", "define printDetails()"],
        correctAnswer: 0
    },
    {
        question: "Which keyword is used to define a method that cannot be overridden in a subclass?",
        choices: ["final", "override", "static", "private"],
        correctAnswer: 0
    },
    {
        question: "What is a method signature in Java?",
        choices: ["The name and return type of a method", "The first line of code in a method", "The method's visibility", "The parameter names of a method"],
        correctAnswer: 0
    },
    {
        question: "How do you define a method 'sum' that takes two integers as parameters and returns an integer in Java?",
        choices: ["method sum(int, int): int", "sum() int", "int sum(int, int)", "define int sum(int, int)"],
        correctAnswer: 2
    },
    {
        question: "Which keyword is used to define a method that is associated with the class rather than with any instance of the class?",
        choices: ["static", "class", "public", "method"],
        correctAnswer: 0
    }
];

let currentJavaMethodQuestion = 0;
let javaMethodScore = 0;
let javaMethodAttempt = JSON.parse(localStorage.getItem('javaMethodAttemptCount')) || 0;
let javaMethodScores = JSON.parse(localStorage.getItem('javaMethodQuizScores')) || [];

const javaMethodQuestionElement = document.getElementById('question');
const javaMethodChoicesElement = document.getElementById('choices');
const javaMethodResultElement = document.getElementById('result');
const javaMethodNextButton = document.getElementById('next-btn');
const javaMethodProgressElement = document.getElementById('current-question');
const javaMethodScoresList = document.getElementById('scores-list');
const javaMethodReattemptButton = document.getElementById('reattempt-btn');

function loadJavaMethodQuestion() {
    const q = javaMethodsQuizData[currentJavaMethodQuestion];
    javaMethodQuestionElement.textContent = q.question;

    javaMethodChoicesElement.innerHTML = '';
    q.choices.forEach((choice, index) => {
        const li = document.createElement('li');
        li.textContent = choice;
        li.addEventListener('click', () => checkJavaMethodAnswer(index));
        javaMethodChoicesElement.appendChild(li);
    });

    javaMethodProgressElement.textContent = currentJavaMethodQuestion + 1;
}

function checkJavaMethodAnswer(index) {
    const correctAnswerIndex = javaMethodsQuizData[currentJavaMethodQuestion].correctAnswer;
    if (index === correctAnswerIndex) {
        javaMethodScore++;
        javaMethodResultElement.textContent = 'Correct!';
    } else {
        javaMethodResultElement.textContent = `Wrong! The correct answer is: ${javaMethodsQuizData[currentJavaMethodQuestion].choices[correctAnswerIndex]}`;
    }
    disableJavaMethodChoices();
    javaMethodNextButton.disabled = false;
}

function disableJavaMethodChoices() {
    javaMethodChoicesElement.querySelectorAll('li').forEach(choice => {
        choice.style.cursor = 'not-allowed';
        choice.style.backgroundColor = '#ccc';
    });
}

function nextJavaMethodQuestion() {
    currentJavaMethodQuestion++;
    if (currentJavaMethodQuestion < javaMethodsQuizData.length) {
        loadJavaMethodQuestion();
        javaMethodResultElement.textContent = '';
        javaMethodNextButton.disabled = true;
    } else {
        showJavaMethodResults();
    }
}

function showJavaMethodResults() {
    javaMethodQuestionElement.textContent = `Java Methods Quiz completed! You scored ${javaMethodScore} out of ${javaMethodsQuizData.length}.`;
    javaMethodChoicesElement.innerHTML = '';
    javaMethodResultElement.textContent = '';
    javaMethodNextButton.style.display = 'none';
    javaMethodReattemptButton.style.display = 'inline-block';

    // Increment attempt count
    javaMethodAttempt++;
    localStorage.setItem('javaMethodAttemptCount', JSON.stringify(javaMethodAttempt));

    // Save score to scores array
    javaMethodScores.push({
        attempt: javaMethodAttempt,
        score: javaMethodScore
    });
    localStorage.setItem('javaMethodQuizScores', JSON.stringify(javaMethodScores));

    // Display scores
    displayJavaMethodScores();
}

function displayJavaMethodScores() {
    javaMethodScoresList.innerHTML = '';
    javaMethodScores.forEach(scoreItem => {
        const li = document.createElement('li');
        li.textContent = `Attempt ${scoreItem.attempt}: ${scoreItem.score} / ${javaMethodsQuizData.length}`;
        javaMethodScoresList.appendChild(li);
    });
}

function reattemptJavaMethodQuiz() {
    currentJavaMethodQuestion = 0;
    javaMethodScore = 0;
    javaMethodNextButton.style.display = 'inline-block';
    javaMethodReattemptButton.style.display = 'none';
    loadJavaMethodQuestion();
    javaMethodResultElement.textContent = '';
}

javaMethodNextButton.addEventListener('click', nextJavaMethodQuestion);
javaMethodReattemptButton.addEventListener('click', reattemptJavaMethodQuiz);

// Initial load
loadJavaMethodQuestion();
displayJavaMethodScores();
