const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'What is 2 + 2?',
        choice1: '2', 
        choice2: '4',
        choice3: '22',
        choice4: '23',
        answer: 2,
    },
    {
        question: 'What is 3 + 3?',
        choice1: '3', 
        choice2: '9',
        choice3: '6',
        choice4: '12',
        answer: 3,
    },
    {
        question: 'What is 4 + 4?',
        choice1: '8', 
        choice2: '18',
        choice3: '16',
        choice4: '24',
        answer: 1,
    },
    {
        question: 'What is 5 + 5?',
        choice1: '5', 
        choice2: '15',
        choice3: '20',
        choice4: '10',
        answer: 4,
    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionsCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    
}