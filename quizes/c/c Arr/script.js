// Define the quiz data for Arrays and Pointers in C
const arraysPointersQuizData = [
    {
        question: "Which symbol is used to access elements of an array in C?",
        choices: ["&", "*", ".", "[]"],
        correctAnswer: 3
    },
    {
        question: "What is the default value of an uninitialized array element in C?",
        choices: ["0", "null", "undefined", "1"],
        correctAnswer: 0
    },
    {
        question: "How do you declare an array 'numbers' of size 10 in C?",
        choices: ["array numbers[10]", "int numbers[10]", "numbers = int[10]", "var numbers[10]"],
        correctAnswer: 1
    },
    {
        question: "Which data type in C is used to store a memory address?",
        choices: ["int", "pointer", "address", "memaddr"],
        correctAnswer: 1
    },
    {
        question: "What is the correct way to declare a pointer variable 'ptr' in C?",
        choices: ["ptr = int", "pointer ptr", "int *ptr", "declare ptr as pointer"],
        correctAnswer: 2
    },
    {
        question: "How do you access the value pointed to by a pointer 'ptr' in C?",
        choices: ["*ptr", "&ptr", "ptr.value", "value(ptr)"],
        correctAnswer: 0
    },
    {
        question: "What does 'sizeof(int)' return in C?",
        choices: ["Size of an int variable", "Memory address of an int variable", "Number of elements in an int array", "Size in bytes of an int"],
        correctAnswer: 3
    },
    {
        question: "Which operator is used to get the address of a variable in C?",
        choices: ["&", "*", "#", "->"],
        correctAnswer: 0
    },
    {
        question: "How do you declare a pointer 'ptr' to an array of integers in C?",
        choices: ["int *ptr[10]", "int ptr[10]", "ptr = &int[10]", "pointer ptr[10]"],
        correctAnswer: 0
    },
    {
        question: "What is the result of 'ptr++' when 'ptr' is a pointer to an int in C?",
        choices: ["Increments ptr by the size of int", "Decrements ptr by the size of int", "Moves ptr to the next int element", "Error, invalid operation"],
        correctAnswer: 2
    },
    {
        question: "Which statement is used to dynamically allocate memory in C?",
        choices: ["malloc", "alloc", "new", "allocate"],
        correctAnswer: 0
    },
    {
        question: "What does 'free(ptr)' do in C?",
        choices: ["Frees the memory allocated to ptr", "Sets ptr to NULL", "Frees all memory in the program", "Resets ptr to its initial value"],
        correctAnswer: 0
    },
    {
        question: "How do you initialize an array 'arr' with values {1, 2, 3} in C?",
        choices: ["int arr = {1, 2, 3}", "arr = int[3] {1, 2, 3}", "int arr[] = {1, 2, 3}", "declare arr = {1, 2, 3}"],
        correctAnswer: 2
    },
    {
        question: "What is the size of 'char *ptr' in C?",
        choices: ["Size of a char pointer", "Memory address of a char pointer", "Number of elements in a char array", "Size in bytes of a char pointer"],
        correctAnswer: 3
    },
    {
        question: "Which statement correctly declares a 2D array 'matrix' in C with 3 rows and 4 columns?",
        choices: ["int matrix[3][4]", "matrix = int[3][4]", "matrix = int[4][3]", "int matrix[][] = {3, 4}"],
        correctAnswer: 0
    },
    {
        question: "How do you access the element in the second row and third column of a 2D array 'matrix' in C?",
        choices: ["matrix[2][3]", "matrix(2, 3)", "matrix[1, 2]", "matrix(1)(2)"],
        correctAnswer: 0
    },
    {
        question: "Which operator is used to access the value at the address stored in a pointer in C?",
        choices: ["&", "*", "#", "->"],
        correctAnswer: 1
    },
    {
        question: "How do you declare a pointer 'ptr' to a function that takes an int parameter and returns void in C?",
        choices: ["int *ptr(void)", "void *ptr(int)", "ptr = &void(int)", "void (*ptr)(int)"],
        correctAnswer: 3
    },
    {
        question: "What is the correct way to pass an array 'arr' to a function 'func' in C?",
        choices: ["func(arr)", "func(int arr[])", "func(&arr)", "func(*arr)"],
        correctAnswer: 1
    },
    {
        question: "Which statement correctly declares an array 'nums' with 5 elements in C?",
        choices: ["int nums[5]", "nums = int[5]", "nums = int{5}", "int *nums[5]"],
        correctAnswer: 0
    },
    {
        question: "How do you assign the value 42 to the first element of an array 'arr' in C?",
        choices: ["arr[0] = 42", "arr = {42}", "assign arr[0] = 42", "arr.first = 42"],
        correctAnswer: 0
    },
    {
        question: "What is the result of 'sizeof(arr)' in C, where 'arr' is an array of 10 integers?",
        choices: ["10", "40", "4", "Error, sizeof cannot be used on arrays"],
        correctAnswer: 1
    },
    {
        question: "Which operator is used to access members of a struct through a pointer in C?",
        choices: ["&", "*", "->", "."],
        correctAnswer: 2
    },
    {
        question: "How do you declare a pointer 'ptr' to a struct 'person' in C?",
        choices: ["ptr = struct person", "person *ptr", "pointer ptr(person)", "declare ptr as struct person"],
        correctAnswer: 1
    },
    {
        question: "What does 'malloc(sizeof(int))' do in C?",
        choices: ["Allocates memory for an int", "Frees memory allocated for an int", "Resets memory allocated for an int", "Returns the size of memory allocated for an int"],
        correctAnswer: 0
    },
    {
        question: "How do you access the value at address 'addr' using a pointer in C?",
        choices: ["*addr", "&addr", "addr.value", "value(addr)"],
        correctAnswer: 0
    },
    {
        question: "Which statement correctly declares a pointer 'ptr' to an array of 5 pointers in C?",
        choices: ["int **ptr[5]", "int *ptr[5]", "ptr = int **[5]", "pointer ptr[5]"],
        correctAnswer: 0
    },
    {
        question: "What is the size of 'float *ptr' in C?",
        choices: ["Size of a float pointer", "Memory address of a float pointer", "Number of elements in a float array", "Size in bytes of a float pointer"],
        correctAnswer: 3
    },
    {
        question: "Which statement is used to deallocate memory allocated by 'malloc' in C?",
        choices: ["free", "dealloc", "dispose", "remove"],
        correctAnswer: 0
    },
    {
        question: "How do you initialize a pointer 'ptr' to NULL in C?",
        choices: ["ptr = null", "init ptr = NULL", "ptr = nullptr", "ptr = NULL"],
        correctAnswer: 3
    },
    {
        question: "What is the size of 'char **ptr' in C?",
        choices: ["Size of a char pointer", "Memory address of a char pointer", "Number of elements in a char array", "Size in bytes of a char pointer"],
        correctAnswer: 3
    }
];

let currentArraysPointersQuestion = 0;
let arraysPointersScore = 0;
let arraysPointersAttempt = JSON.parse(localStorage.getItem('arraysPointersAttemptCount')) || 0;
let arraysPointersScores = JSON.parse(localStorage.getItem('arraysPointersQuizScores')) || [];

const arraysPointersQuestionElement = document.getElementById('question');
const arraysPointersChoicesElement = document.getElementById('choices');
const arraysPointersResultElement = document.getElementById('result');
const arraysPointersNextButton = document.getElementById('next-btn');
const arraysPointersProgressElement = document.getElementById('current-question');
const arraysPointersScoresList = document.getElementById('scores-list');
const arraysPointersReattemptButton = document.getElementById('reattempt-btn');

function loadArraysPointersQuestion() {
    const q = arraysPointersQuizData[currentArraysPointersQuestion];
    arraysPointersQuestionElement.textContent = q.question;

    arraysPointersChoicesElement.innerHTML = '';
    q.choices.forEach((choice, index) => {
        const li = document.createElement('li');
        li.textContent = choice;
        li.addEventListener('click', () => checkArraysPointersAnswer(index));
        arraysPointersChoicesElement.appendChild(li);
    });

    arraysPointersProgressElement.textContent = currentArraysPointersQuestion + 1;
}

function checkArraysPointersAnswer(index) {
    const correctAnswerIndex = arraysPointersQuizData[currentArraysPointersQuestion].correctAnswer;
    if (index === correctAnswerIndex) {
        arraysPointersScore++;
        arraysPointersResultElement.textContent = 'Correct!';
    } else {
        arraysPointersResultElement.textContent = `Wrong! The correct answer is: ${arraysPointersQuizData[currentArraysPointersQuestion].choices[correctAnswerIndex]}`;
    }
    disableArraysPointersChoices();
    arraysPointersNextButton.disabled = false;
}

function disableArraysPointersChoices() {
    arraysPointersChoicesElement.querySelectorAll('li').forEach(choice => {
        choice.style.cursor = 'not-allowed';
        choice.style.backgroundColor = '#ccc';
    });
}

function nextArraysPointersQuestion() {
    currentArraysPointersQuestion++;
    if (currentArraysPointersQuestion < arraysPointersQuizData.length) {
        loadArraysPointersQuestion();
        arraysPointersResultElement.textContent = '';
        arraysPointersNextButton.disabled = true;
    } else {
        showArraysPointersResults();
    }
}

function showArraysPointersResults() {
    arraysPointersQuestionElement.textContent = `Arrays and Pointers Quiz completed! You scored ${arraysPointersScore} out of ${arraysPointersQuizData.length}.`;
    arraysPointersChoicesElement.innerHTML = '';
    arraysPointersResultElement.textContent = '';
    arraysPointersNextButton.style.display = 'none';
    arraysPointersReattemptButton.style.display = 'inline-block';

    // Increment attempt count
    arraysPointersAttempt++;
    localStorage.setItem('arraysPointersAttemptCount', JSON.stringify(arraysPointersAttempt));

    // Save score to scores array
    arraysPointersScores.push({
        attempt: arraysPointersAttempt,
        score: arraysPointersScore
    });
    localStorage.setItem('arraysPointersQuizScores', JSON.stringify(arraysPointersScores));

    // Display scores
    displayArraysPointersScores();
}

function displayArraysPointersScores() {
    arraysPointersScoresList.innerHTML = '';
    arraysPointersScores.forEach(scoreItem => {
        const li = document.createElement('li');
        li.textContent = `Attempt ${scoreItem.attempt}: ${scoreItem.score} / ${arraysPointersQuizData.length}`;
        arraysPointersScoresList.appendChild(li);
    });
}

function reattemptArraysPointersQuiz() {
    currentArraysPointersQuestion = 0;
    arraysPointersScore = 0;
    arraysPointersNextButton.style.display = 'inline-block';
    arraysPointersReattemptButton.style.display = 'none';
    loadArraysPointersQuestion();
    arraysPointersResultElement.textContent = '';
}

arraysPointersNextButton.addEventListener('click', nextArraysPointersQuestion);
arraysPointersReattemptButton.addEventListener('click', reattemptArraysPointersQuiz);

// Initial load
loadArraysPointersQuestion();
displayArraysPointersScores();
