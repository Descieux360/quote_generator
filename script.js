// Varaibles

let btn = document.querySelector('#new-quote');
let quote =document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: "The best Way to fond your self is to lose yourself in in the service of the others.",
        person: ' Mahatma Gandhi'
    },
    {
      quote:"If you want to live a happy life, tie it to a goal, not to peopleoe or thing",
      person:"Albert Eintein"
    },
    {
       quote:"Mathematics as an expression of the human mind reflects the active will, the contemplative reason, and the desire for aesthetic perfection. Its basic elements are logic and intuition, analysis and construction, generality and individuality.", 
       person:"Katherine Johnson"
    },
    {
        quote:"Mathematics is a place where you can do things which you can’t do in the real world",
        person:"Andrew Wiles",
    },
    {
        quote:"As far as the laws of mathematics refer to reality, they are not certain, and as far as they are certain, they do not refer to reality.",
        person:"Richard Courant",
    },
    {
        quote:"There should be no such thing as boring mathematics",
        person:"David Hilbert",
    },
    {
        quote:"A mathematician who is not also something of a poet will never be a complete mathematician",
        person:"Sofia Kovalevskaya",
    },
    {
        quote:"Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.",
        person:"Joseph Fourier",
    },
    {
        quote:"Pure mathematicians just love to try unsolved problems — they love a challenge.",
        person:"Galileo Galilei",
    },{
        quote:"If people do not believe that mathematics is simple, it is only because they do not realize how complicated life is.",
        person:"Neil deGrass Tyson",
    },
    {
        quote:"Mathematics is a game played according to certain simple rules with meaningless marks on paper.",
        person:"John von Neumann",
    }
];

btn.addEventListener('click',function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;
    person.innerHTML = quotes[random].person;
})