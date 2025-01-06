const truthQuestions = [
    "What's the most embarrassing song you secretly love?",
    "What's the most embarrassing thing you've ever done?",
    "What's your biggest secret?",
    "What's the biggest lie you've ever told",
    "What's your biggest fear?",
    "Who blesses you the most?",
    "What's the most childish thing you still do?",
    "Pretend to be your favorite animal for 10 seconds.",
    "What's your most awkward eating experience?",
    "What's the goodie-2-shoes thing you've ever done?",
    "Make the funniest face you can",
    "What's the worst gift you've ever received?",
    "What's the most expensive thing you've broken?",
    "What's the most embarrassing thing you've ever done at school/work?",
    "What's the worst place you've ever been on?",
    "What's the most embarrassing thing in your room?",
    "What's your biggest pet peeve?",
    "Sing your favorite song in a funny voice.",
    "What's the most embarrassing nickname you've had?",
    "What's your most embarrassing childhood memory?"
];

const dareQuestions = [
    "Dance without music for 30 seconds",
    "Call a friend and sing them a song",
    "Do your best animal impression",
    "Speak in an accent for the next three rounds",
    "Do 10 push-ups right now",
    "Let someone style your hair however they want",
    "Show the last photo on your phone",
    "Do the 'Macarena' dance",
    "Eat a spoonful of hot sauce",
    "Do your best celebrity impression",
    "What is the silliest fear you’ve ever had?",
    "Call a random contact and speak in a different language",
    "What’s the funniest thing that has ever happened to you?",
    "Do your best dance moves",
    "Tell a joke in the most serious way possible",
    "Do 10 push-ups",
    "Dance like nobody's watching for 30 seconds.",
    "Send a funny selfie to your family",
    "Speak in rhymes for the next two rounds",
    "Do your best robot impression"
];

function getQuestion(type) {
    const questionElement = document.getElementById('question');
    const questions = type === 'truth' ? truthQuestions : dareQuestions;
    const randomIndex = Math.floor(Math.random() * questions.length);
    
    questionElement.classList.remove('animate');
    void questionElement.offsetWidth; // Trigger reflow
    questionElement.classList.add('animate');
    
    questionElement.textContent = questions[randomIndex];
}