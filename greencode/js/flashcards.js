const cardsContainer = document.getElementById('cards-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const currentEl = document.getElementById('current');
const showBtn = document.getElementById('show');
const hideBtn = document.getElementById('hide');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');


// Keep track of current card
let currentActiveCard = 0;

// Store DOM cards
const cardsEl = [];


// Flashcard content was made using OpenAI's GTP-4 large language model
const cardsData = [
    {
        question: "What is environmental coding?",
        answer: "Environmental coding focuses on developing software that minimizes environmental impact by reducing energy consumption and resource usage, contributing to sustainability efforts."
    },
    {
        question: 'Why is efficient code important in sustainability?',
        answer: 'Efficient code reduces the resources needed for execution, such as CPU and memory, thereby lowering energy consumption and environmental impact.'
    },
    {
        question: 'What are green coding tools?',
        answer: 'Green coding tools help track and reduce the carbon footprint of software, such as energy profiling tools, eco-mode monitors, and carbon emissions calculators for cloud services.'
    },
    {
        question: 'How can developers minimize redundant code?',
        answer: `By adhering to DRY (Don't Repeat Yourself) principles, using modular programming, and leveraging libraries or frameworks instead of duplicating functionality.`
    },
    {
        question: "What role do data centers play in sustainable coding?",
        answer: "Data centers that use renewable energy, efficient cooling systems, and proper resource scaling help reduce the environmental impact of hosting and running applications."
    }
];

// Flashcard content was made using InnSpill
/* const cardsData = [
    {
        question: "What does green software mean?",
        answer: "Green software refers to applications that have been designed with energy efficiency and sustainability in mind. It includes considerations such as reducing energy consumption during the software's run-time and optimizing code for efficiency."
    },
    {
        question: "What are some strategies used in green coding?",
        answer: "Green coding strategies can include reduce idle time, efficient use of data structures and algorithms, reduction of memory usage, limiting network traffic, and conducting regular code reviews to find inefficient code."
    },
    {
        question: "How does green coding affect the life-cycle of software?",
        answer: "Green coding considers the entire life-cycle of software, from design, implementation, testing, to deployment and maintenance. It involves reducing the energy consumption and environmental impact in all stages of this life-cycle, eventually leading to a more sustainable software product."
    },
    {
        question: "Why is green coding important?",
        answer: "Green coding is crucial because the Information and Communication Technology (ICT) sector is a significant consumer of electricity. By optimizing software for energy efficiency, developers can reduce the carbon footprint of their applications, contributing to overall sustainability efforts."
    }
]; */

// Create all cards
function createCards() {
    cardsData.forEach((data, index) => createCard(data, index));
}

// Create a single card in DOM
function createCard(data, index) {
    const card = document.createElement('div');
    card.classList.add('card');

    if (index === 0) {
        card.classList.add('active');
    }

    card.innerHTML = `
  <div class="inner-card">
      <div class="inner-card-front">
          <p>
              ${data.question}
          </p>
      </div>

      <div class="inner-card-back">
          <p>
              ${data.answer}
          </p>
      </div>
  </div>
  `;

    card.addEventListener('click', () => card.classList.toggle('show-answer'));

    // Add  to DOM cards
    cardsEl.push(card);

    cardsContainer.appendChild(card);

    updateCurrentText();
}

// Show number of cards
function updateCurrentText() {
    currentEl.innerText = `${currentActiveCard + 1} / ${cardsEl.length}`;
}

createCards();


// Event listeners

// Next button
nextBtn.addEventListener('click', getNextCard)

function getNextCard() {
    cardsEl[currentActiveCard].className = 'card left';

    //currentActiveCard = currentActiveCard + 1;
    currentActiveCard += 1;

    if (currentActiveCard > cardsEl.length - 1) {
        currentActiveCard = cardsEl.length - 1;
    }

    cardsEl[currentActiveCard].className = 'card active'

    updateCurrentText();
}

// Previous button
prevBtn.addEventListener('click', getPrevCard)

function getPrevCard() {
    cardsEl[currentActiveCard].className = 'card right';

    currentActiveCard -= 1;

    if (currentActiveCard < 0) {
        currentActiveCard = 0;
    }

    cardsEl[currentActiveCard].className = 'card active'

    updateCurrentText();
}

// Interact with flashcard using keyboard buttons
document.addEventListener('keydown', (e) => {
    console.log(e.key)
    // Left arrow key
    if (e.key == 'ArrowLeft') {
        getPrevCard()
    }
    // Right arrow key
    if (e.key == 'ArrowRight') {
        getNextCard()
    }
    // f key
    if (e.key == 'f') {
        cardsEl[currentActiveCard].classList.toggle('show-answer')
    }
})