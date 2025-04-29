// The multiple choice quiz content was made using OpenAI's GTP-4 large language model
let question1 = {
  query: "What is the primary goal of sustainable programming?",
  options: ["To minimize environmental impact", "To maximize speed", "To reduce programming errors"],
  solution: "To minimize environmental impact"
};

let question2 = {
  query: "Which of the following helps reduce energy consumption in coding?",
  options: ["Using outdated hardware", "Optimizing code for performance", "Writing inefficient algorithms"],
  solution: "Optimizing code for performance"
};

let question3 = {
  query: "How can cloud computing contribute to sustainability?",
  options: ["By reducing the need for physical hardware", "By requiring more data centers", "By increasing resource wastage"],
  solution: "By reducing the need for physical hardware"
};

let question4 = {
  query: "What practice promotes sustainable coding?",
  options: ["Increasing code complexity", "Rewriting code unnecessarily", "Reusing and recycling code"],
  solution: "Reusing and recycling code"
};

let question5 = {
  query: "What type of data centers supports environmental coding practices?",
  options: ["Centers with excessive energy usage", "Centers using non-renewable energy", "Centers with efficient cooling systems"],
  solution: "Centers with efficient cooling systems"
};

// Array with questions
let questions = [question1, question2, question3, question4, question5];

// Get elements from DOM
let quizContainerEl = document.querySelector('.quiz-container')
let checkBtn = document.querySelector('#btn-check')
let resultEl = document.querySelector('#result')

function getQuestions() {
  checkBtn.classList.remove('hidden')

  // Empty HTML for quiz container
  quizContainerEl.innerHTML = ''

  // Traverse array with questions
  for (let i = 0; i < questions.length; i++) {
    // Retrieve question
    let question = questions[i]
    let query = question.query
    let options = question.options
    let solution = question.solution

    // Fill quiz container with question
    quizContainerEl.innerHTML += `
      <fieldset class="question-container" id="question${i + 1}">
        <legend class="text-lg font-semibold my-2">${i + 1}. ${query}</legend>
      </fieldset>
      `

    let questionEl = document.getElementById(`question${i + 1}`)

    for (let j = 0; j < options.length; j++) {
      let labelEl = document.createElement('label')
      let radioEl = document.createElement('input')
      radioEl.type = "radio"

      radioEl.name = `q${i + 1}`

      if (options[j] === solution) {
        radioEl.value = "c" // correct
      } else {
        radioEl.value = "w" // wrong
      }

      labelEl.appendChild(radioEl)

      labelEl.innerHTML += options[j]

      questionEl.appendChild(labelEl)
    }
  }
}

getQuestions()

// Checking which answers are correct
checkBtn.addEventListener('click', checkAnswers)

function checkAnswers() {
  checkBtn.classList.add('hidden')
  resultEl.classList.remove('hidden')

  let points = 0

  // Get all radio-elements
  let radioEls = document.querySelectorAll('input[type="radio"]')

  // Traverse radio-elements
  for (let i = 0; i < radioEls.length; i++) {
    if (radioEls[i].checked) {
      // Checking if the alternative is correct
      if (radioEls[i].value === "c") {
        radioEls[i].parentElement.classList.add('correct')
        points++
      }else {
        radioEls[i].parentElement.classList.add('wrong')
      }
    }

    radioEls[i].disabled = true
  }

  // Show the results
  resultEl.innerHTML = `You got ${points}/${questions.length} points`
}