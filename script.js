/* present questions and start timer when button is clicked

*/
//Selecting all html elements 

let frontPhoto = document.querySelector('#start-photo');
let scores = document.querySelector('#highscore');
let countdown = document.querySelector('#timer');

//create the button click action
let startBtn = document.querySelector('#start-button');
startBtn.addEventListener('click', startQuiz)

//forming a set of 10 questions
var jsQuestions = ["What is the element tag for javascript?",
                   /* {
                    question1: "What is the element tag for javascript?",
                    choices: ["<javascript>", "<script>", "<js>", "<scripting>"],
                    },*/

                    {
                        question: "Is javascript a case-sensitive language?",
                        choices: ["True", "False"],
                    },

                    {
                        question: "how can you get the type of arguments passed to function?",
                        choices: ["using type of operator", "using the type of function", "both of the above"],
                    },

                    {
                        question: "Which of the following type of variable takes the precedence over other if names are same?",
                        choices: ["global variable", "local variable"],
                    },

                    {
                        question: "Which built-in method reverses the order of elements of an array?",
                        choices: ["changeOrder(oder)", "reverse()", "sort(order)", "none of the above"],
                    },

                    {
                        question: "Which of the following function of String object combines the text of two strings and returns a new string?",
                        choices: ["add()", "merge()", "concat()", "append()"],
                    },

                    {
                        question: "How do you call a function named myFunction? ",
                        choices: ["call myFunction(), myFunction()", "call function myFunction()"],
                    },

                    {
                    question: "Which of the following function of String object combines the text of two strings and returns a new string?",
                    choices: ["add()", "merge()", "concat()", "append()"]
                    },

                    {
                    question: "Which of the following function of String object combines the text of two strings and returns a new string?",
                    choices: ["add()", "merge()", "concat()", "append()"]
                    },

                    {
                        question: "How to write an IF statement in JavaScript?",
                        choices: ["if 1==5", "if 1=5", "if (i==5)", "if i=5 then"]
                        }

          ]


    


//setting a value for the timer
countdown.innerHTML= 120;
let startTimer = countdown.innerHTML

//building the quiz function
function startQuiz() {

    // creating the questions paragraph
let secondDiv = document.getElementById("div-2");
let para = document.createElement("p")
let question = secondDiv.appendChild(para);
question.innerHTML = jsQuestions[0];
question = question.innerHTML;
return frontPhoto;
}


function changeWindow () {
    let newWindow = frontPhoto.style.display='none'
    return newWindow
}

frontPhoto.addEventListener('click', changeWindow)