// TODO: Change all comments to English

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
      <div class="question-container" id="question${i + 1}">
        <h2 class="text-lg font-semibold my-2">${i + 1}. ${query}</h2>
      </div>
      `

    // Henter elementet alternativene skal skrives i
    let questionEl = document.getElementById(`question${i + 1}`)
    //let questionEl = document.querySelector(`#question${i+1}`)

    // Går gjennom alternativene
    for (let j = 0; j < options.length; j++) {
      // Lager label element
      let labelEl = document.createElement('label')

      // Lager et input element
      let radioEl = document.createElement('input')

      // Setter typen til input elementet til radio
      radioEl.type = "radio"

      // Sørger for at alle alternativene til spørsmålet er i samme gruppe
      radioEl.name = `q${i + 1}`

      // Setter verdi til elementet basert på om alternativet er lik fasiten
      if (options[j] === solution) {
        radioEl.value = "c" // correct
      } else {
        radioEl.value = "w" // wrong
      }

      // Legger input-elementet med type radio i label elementet
      labelEl.appendChild(radioEl)

      // Skriver alternativene til HTML
      labelEl.innerHTML += options[j]

      // Legger label elementet inni question elementet
      questionEl.appendChild(labelEl)
    }
  }
}

getQuestions()

// Checking number of answers correct
checkBtn.addEventListener('click', checkAnswers)

function checkAnswers() {
  checkBtn.classList.add('hidden')
  resultEl.classList.remove('hidden')

  let points = 0

  // Henter alle radio-elementene
  let radioEls = document.querySelectorAll('input[type="radio"]')

  // Traverserer radio-elementene
  for (let i = 0; i < radioEls.length; i++) {
    // Sjekker om alternativet er krysset av
    if (radioEls[i].checked) {
      // Sjekker om alternativet er korrekt
      if (radioEls[i].value === "c") {
        radioEls[i].parentElement.classList.add('correct')
        points++
      }else {
        radioEls[i].parentElement.classList.add('wrong')
      }
    }

    // Gjør slik at man ikke kan trykke på radioknappene lenger
    radioEls[i].disabled = true
  }

  // Skriver til resultat-elementet
  resultEl.innerHTML = `You got ${points}/${questions.length} points`
}