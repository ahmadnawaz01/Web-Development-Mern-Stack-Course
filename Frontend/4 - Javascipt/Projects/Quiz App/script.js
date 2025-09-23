const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyperlinks and Text Markup Language", correct: false },
            { text: "Hyper Text Markup Language", correct: true },
            { text: "Home Tool Markup Language", correct: false },
            { text: "Hyper Transfer Markup Language", correct: false },
        ]
    },
    {
        question: "What does CSS stand for?",
        answers: [
            { text: "Cascading Style Sheets", correct: true },
            { text: "Colorful Style Sheets", correct: false },
            { text: "Creative Styling System", correct: false },
            { text: "Computer Style Syntax", correct: false },
        ]
    },
    {
        question: "What does JS stand for?",
        answers: [
            { text: "Java Syntax", correct: false },
            { text: "JavaScript", correct: true },
            { text: "JQuery Standard", correct: false },
            { text: "JSON Script", correct: false },
        ]
    }
];






const questionheading = document.getElementById("question");
const answerbtn = document.getElementById("answer");
const nextbtn = document.getElementById("next");

let currentquestionindex = 0;
let score = 0;


function startquiz() {
    currentquestionindex = 0;
    score = 0;
    nextbtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetstate();
    let currentq = questions[currentquestionindex];
    let questionno = currentquestionindex + 1;
    questionheading.innerHTML = questionno + ". " + currentq.question;
    currentq.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbtn.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectans);
    });
}

function resetstate() {
    nextbtn.style.display = "none";
    while (answerbtn.firstChild) {
        answerbtn.removeChild(answerbtn.firstChild);
    }
};


function selectans(e) {
    const selectbtn = e.target;
    const iscorrect = selectbtn.dataset.correct === "true";
    if (iscorrect) {
        selectbtn.classList.add("correct");
        score++;
    }
    else {
        selectbtn.classList.add("incorrect");
    }
    Array.from(answerbtn.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextbtn.style.display = "block";
}





function handlenextbtn() {
currentquestionindex++;
if(currentquestionindex<questions.length)
{
    showQuestion();
}
else{
    showsscore();
}
}


function showsscore()
{
    resetstate();
    questionheading.innerHTML=`You Scored ${score} out of ${questions.length}!`
    nextbtn.innerHTML="Play Again";
    nextbtn.style.display="block";
}


nextbtn.addEventListener("click", () => {
    if (currentquestionindex < questions.length) {
        handlenextbtn();
    }
    else {
        startquiz();
    }
})

startquiz();

















































