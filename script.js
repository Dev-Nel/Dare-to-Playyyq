const truthQuestions = [
"What's your favorite color, and why?",
"What's the silliest thing you've ever done in the bathtub?",
"If you could have any superpower, what would it be, and why?",
"What's the funniest thing your pet has ever done?",
"What's your favorite thing to do outside on a sunny day?",
"What's your favorite thing to do with your friends?",
"What's the funniest joke you know?",
"If you could be any animal for a day, what would you be, and why?",
"What's the most delicious thing you've ever eaten?",
"What's the silliest song you like to sing?",
"What's your favorite thing to draw?",
"What's the silliest thing you've ever said to your teacher?",
"What's the most exciting thing you've ever done on a playground?",
"What's your favorite thing to do with your family?",
"If you could have a magic wand, what would you wish for?",
"What's the funniest thing you've ever seen on TV?",
"What's your favorite thing to do when it's raining outside?",
"What's your favorite thing to do before you go to bed?",
"What's the silliest thing you've ever done at school?",
"What's your favorite thing to do on a birthday?"
];

const dareQuestions = [
"Make a funny face and hold it for 5 seconds!",
"Do a silly dance and make everyone laugh!",
"Sing your favorite song in a funny voice!",
"Say 'Hello' to everyone in a funny voice!",
"Do 5 jumping jacks and clap your hands!",
"Make a funny animal sound and show us what it looks like!",
"Draw a picture of your favorite animal and tell us about it!",
"Tell us a story about your favorite toy and make it funny!",
"Pretend to be a superhero and save the day!",
"Do a cartwheel and try not to fall!",
"Say the alphabet backwards and see if you can do it!",
"Make a funny noise with your mouth and see if you can make someone laugh!",
"Do a silly walk and make everyone smile!",
"Say 'I'm a little teapot' and do the motions!",
"Pretend to be a different animal and make the sounds!",
"Tell us a joke you made up and see if we laugh!",
"Do a funny impression of someone you know and see if we guess who it is!",
"Make up a silly song and sing it to us!",
"Try to touch your toes and see if you can reach!",
"Do a funny dance and make us laugh!"
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
