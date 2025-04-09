// Define the quiz data for Object-Oriented Programming (OOP) in Java
const oopJavaQuizData = [
    {
        question: "What is an object in Java?",
        choices: ["A variable", "A method", "An instance of a class", "A loop"],
        correctAnswer: 2
    },
    {
        question: "Which concept in Java allows you to bundle data and methods that operate on the data?",
        choices: ["Inheritance", "Encapsulation", "Polymorphism", "Abstraction"],
        correctAnswer: 1
    },
    {
        question: "What is inheritance in Java?",
        choices: ["The ability of a class to inherit properties and behaviors from another class", "The ability of a class to hide certain features", "The ability to create multiple forms of a function", "The ability to create objects"],
        correctAnswer: 0
    },
    {
        question: "Which keyword is used to implement inheritance in Java?",
        choices: ["inherits", "extends", "implements", "derives"],
        correctAnswer: 1
    },
    {
        question: "What is encapsulation in Java?",
        choices: ["The ability to bundle data and methods that operate on the data", "The ability to define multiple forms of a function", "The ability to create objects from classes", "The ability to hide certain features"],
        correctAnswer: 0
    },
    {
        question: "Which access modifier restricts access the least in Java?",
        choices: ["private", "protected", "public", "default"],
        correctAnswer: 2
    },
    {
        question: "Which concept in Java allows a subclass to provide a specific implementation of a method that is already provided by its superclass?",
        choices: ["Polymorphism", "Encapsulation", "Inheritance", "Abstraction"],
        correctAnswer: 0
    },
    {
        question: "What is abstraction in Java?",
        choices: ["The ability to bundle data and methods that operate on the data", "The ability to define multiple forms of a function", "The ability to hide certain features", "The ability to create objects"],
        correctAnswer: 2
    },
    {
        question: "Which keyword is used to implement abstraction in Java?",
        choices: ["abstract", "interface", "extends", "implements"],
        correctAnswer: 0
    },
    {
        question: "What is a constructor in Java?",
        choices: ["A method that returns a value", "A special method used to initialize objects", "A method that has no implementation", "A method that is inherited from a superclass"],
        correctAnswer: 1
    },
    {
        question: "Which keyword is used to call a superclass constructor from a subclass constructor?",
        choices: ["super", "this", "extends", "parent"],
        correctAnswer: 0
    },
    {
        question: "What is method overloading in Java?",
        choices: ["The ability to define multiple methods with the same name but different parameters", "The ability to override a method in a superclass", "The ability to define multiple forms of a function", "The ability to create objects from classes"],
        correctAnswer: 0
    },
    {
        question: "Which concept in Java allows a subclass to provide a specific implementation of a method that is already provided by its superclass?",
        choices: ["Polymorphism", "Encapsulation", "Inheritance", "Abstraction"],
        correctAnswer: 0
    },
    {
        question: "What is method overriding in Java?",
        choices: ["The ability to define multiple methods with the same name but different parameters", "The ability to override a method in a superclass", "The ability to define multiple forms of a function", "The ability to create objects from classes"],
        correctAnswer: 1
    },
    {
        question: "Which keyword is used to prevent a method from being overridden in Java?",
        choices: ["final", "static", "abstract", "private"],
        correctAnswer: 0
    },
    {
        question: "What is a static method in Java?",
        choices: ["A method that can be called without creating an instance of the class", "A method that is inherited from a superclass", "A method that has no implementation", "A method that returns a value"],
        correctAnswer: 0
    },
    {
        question: "Which keyword is used to declare a method that is not implemented in Java?",
        choices: ["void", "null", "abstract", "static"],
        correctAnswer: 2
    },
    {
        question: "What is an interface in Java?",
        choices: ["A class that cannot be instantiated", "A blueprint of a class that can be implemented by another class", "A method that has no implementation", "A method that returns a value"],
        correctAnswer: 1
    },
    {
        question: "Which keyword is used to declare an interface in Java?",
        choices: ["interface", "class", "implements", "abstract"],
        correctAnswer: 0
    },
    {
        question: "Can a class implement multiple interfaces in Java?",
        choices: ["Yes", "No"],
        correctAnswer: 0
    },
    {
        question: "What is a package in Java?",
        choices: ["A collection of classes and interfaces", "A method that has no implementation", "A method that returns a value", "A collection of methods"],
        correctAnswer: 0
    },
    {
        question: "Which keyword is used to import classes from another package in Java?",
        choices: ["import", "package", "include", "use"],
        correctAnswer: 0
    },
    {
        question: "What is a superclass in Java?",
        choices: ["A class that inherits properties and behaviors from another class", "A class that is inherited by another class", "A class that is used to create objects", "A class that has no implementation"],
        correctAnswer: 0
    },
    {
        question: "Which keyword is used to refer to the current instance of a class in Java?",
        choices: ["self", "this", "current", "instance"],
        correctAnswer: 1
    },
    {
        question: "What is a subclass in Java?",
        choices: ["A class that inherits properties and behaviors from another class", "A class that is inherited by another class", "A class that is used to create objects", "A class that has no implementation"],
        correctAnswer: 0
    },
    {
        question: "Which concept in Java allows you to access members of a superclass from a subclass?",
        choices: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
        correctAnswer: 1
    },
    {
        question: "What is dynamic binding in Java?",
        choices: ["The process of linking a method call with the method body at runtime", "The process of defining multiple forms of a function", "The process of hiding certain features", "The process of creating objects"],
        correctAnswer: 0
    },
    {
        question: "Which keyword is used to prevent a class from being inherited in Java?",
        choices: ["final", "static", "abstract", "private"],
        correctAnswer: 0
    },
    {
        question: "What is method hiding in Java?",
        choices: ["The process of defining multiple methods with the same name but different parameters", "The process of preventing a method from being overridden", "The process of hiding certain features", "The process of creating objects from classes"],
        correctAnswer: 1
    },
    {
        question: "Which keyword is used to allow a method to be accessed without using an object of the class in Java?",
        choices: ["private", "static", "public", "final"],
        correctAnswer: 1
    }
];
let currentOopJavaQuestion = 0;
let oopJavaScore = 0;
let oopJavaAttempt = JSON.parse(localStorage.getItem('oopJavaAttemptCount')) || 0;
let oopJavaScores = JSON.parse(localStorage.getItem('oopJavaQuizScores')) || [];

const oopJavaQuestionElement = document.getElementById('question');
const oopJavaChoicesElement = document.getElementById('choices');
const oopJavaResultElement = document.getElementById('result');
const oopJavaNextButton = document.getElementById('next-btn');
const oopJavaProgressElement = document.getElementById('current-question');
const oopJavaScoresList = document.getElementById('scores-list');
const oopJavaReattemptButton = document.getElementById('reattempt-btn');

function loadOopJavaQuestion() {
    const q = oopJavaQuizData[currentOopJavaQuestion];
    oopJavaQuestionElement.textContent = q.question;

    oopJavaChoicesElement.innerHTML = '';
    q.choices.forEach((choice, index) => {
        const li = document.createElement('li');
        li.textContent = choice;
        li.addEventListener('click', () => checkOopJavaAnswer(index));
        oopJavaChoicesElement.appendChild(li);
    });

    oopJavaProgressElement.textContent = currentOopJavaQuestion + 1;
}

function checkOopJavaAnswer(index) {
    const correctAnswerIndex = oopJavaQuizData[currentOopJavaQuestion].correctAnswer;
    if (index === correctAnswerIndex) {
        oopJavaScore++;
        oopJavaResultElement.textContent = 'Correct!';
    } else {
        oopJavaResultElement.textContent = `Wrong! The correct answer is: ${oopJavaQuizData[currentOopJavaQuestion].choices[correctAnswerIndex]}`;
    }
    disableOopJavaChoices();
    oopJavaNextButton.disabled = false;
}

function disableOopJavaChoices() {
    oopJavaChoicesElement.querySelectorAll('li').forEach(choice => {
        choice.style.cursor = 'not-allowed';
        choice.style.backgroundColor = '#ccc';
    });
}

function nextOopJavaQuestion() {
    currentOopJavaQuestion++;
    if (currentOopJavaQuestion < oopJavaQuizData.length) {
        loadOopJavaQuestion();
        oopJavaResultElement.textContent = '';
        oopJavaNextButton.disabled = true;
    } else {
        showOopJavaResults();
    }
}

function showOopJavaResults() {
    oopJavaQuestionElement.textContent = `OOP Java Quiz completed! You scored ${oopJavaScore} out of ${oopJavaQuizData.length}.`;
    oopJavaChoicesElement.innerHTML = '';
    oopJavaResultElement.textContent = '';
    oopJavaNextButton.style.display = 'none';
    oopJavaReattemptButton.style.display = 'inline-block';

    // Increment attempt count
    oopJavaAttempt++;
    localStorage.setItem('oopJavaAttemptCount', JSON.stringify(oopJavaAttempt));

    // Save score to scores array
    oopJavaScores.push({
        attempt: oopJavaAttempt,
        score: oopJavaScore
    });
    localStorage.setItem('oopJavaQuizScores', JSON.stringify(oopJavaScores));

    // Display scores
    displayOopJavaScores();
}

function displayOopJavaScores() {
    oopJavaScoresList.innerHTML = '';
    oopJavaScores.forEach(scoreItem => {
        const li = document.createElement('li');
        li.textContent = `Attempt ${scoreItem.attempt}: ${scoreItem.score} / ${oopJavaQuizData.length}`;
        oopJavaScoresList.appendChild(li);
    });
}

function reattemptOopJavaQuiz() {
    currentOopJavaQuestion = 0;
    oopJavaScore = 0;
    oopJavaNextButton.style.display = 'inline-block';
    oopJavaReattemptButton.style.display = 'none';
    loadOopJavaQuestion();
    oopJavaResultElement.textContent = '';
}

oopJavaNextButton.addEventListener('click', nextOopJavaQuestion);
oopJavaReattemptButton.addEventListener('click', reattemptOopJavaQuiz);

// Initial load
loadOopJavaQuestion();
displayOopJavaScores();
