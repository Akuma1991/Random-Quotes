var quoteContent = document.getElementById('quoteContent');
var quoteAuthor = document.getElementById('quoteAuthor');
var containerElement = document.getElementById('container');
var divElement = document.getElementById('demo');
var btnElement = document.getElementById('btn');


// var quotes = [
//     ["Stay Hungry. Stay Foolish.", "Steve Jobs"],
//     ["Good Artists Copy, Great Artists Steal.", "Pablo Picasso"],
//     ["Argue with idiots, and you become an idiot.", "Paul Graham"],
//     ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
//     ["Simplicity is the ultimate sophistication.", "Leonardo Da Vinci"],
//     ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
//     ["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "Albert Einstein"],
//     ["So many books, so little time.", "Frank Zappa"],
//     ["A room without books is like a body without a soul.", "Marcus Tullius Cicero"],
//     ["Be the change that you wish to see in the world.", "Mahatma Gandhi"],
//     ["You know you're in love when you can't fall asleep because reality is finally better than your dreams.", "Dr. Seuss"],
//     ["Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.","Martin Luther King "]
// ];

/* Arrary of Objects */
var quotes = [
    { quoteContent: "Stay Hungry. Stay Foolish.", quoteAuthor: "Steve Jobs" },
    { quoteContent: "Good Artists Copy, Great Artists Steal.", quoteAuthor: "Pablo Picasso" },
    { quoteContent: "Argue with idiots, and you become an idiot.", quoteAuthor: "Paul Graham" },
    { quoteContent: "Be yourself; everyone else is already taken.", quoteAuthor: "Oscar Wilde" },
    { quoteContent: "Simplicity is the ultimate sophistication.", quoteAuthor: "Leonardo Da Vinci" },
    { quoteContent: "Be yourself; everyone else is already taken.", quoteAuthor: "Oscar Wilde" },
    { quoteContent: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", quoteAuthor: "Albert Einstein" },
    { quoteContent: "So many books, so little time.", quoteAuthor: "Frank Zappa" },
    { quoteContent: "A room without books is like a body without a soul.", quoteAuthor: "Marcus Tullius Cicero" },
    { quoteContent: "Be the change that you wish to see in the world.", quoteAuthor: "Mahatma Gandhi" },
    { quoteContent: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", quoteAuthor: "Dr. Seuss" },
    { quoteContent: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.", quoteAuthor: "Martin Luther King " }
];

var color = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];


let newQuote = '';
let newColor = '';
const quotesLength = quotes.length;
const colorLength = color.length;

function newQuotes() {
    newQuote = quotes[Math.floor(Math.random() * quotesLength)];
    newColor = color[Math.floor(Math.random() * colorLength)];

    divElement.style.backgroundColor = newColor;
    containerElement.style.boxShadow = " 10px 10px 40px " + newColor;
    btnElement.style.backgroundColor = newColor;
    
    quoteContent.innerHTML = '&#8246; ';
    // quoteContent.innerHTML += newQuote[0];
    quoteContent.innerHTML += newQuote.quoteContent;
    quoteContent.innerHTML += '&#8246; ';
    quoteAuthor.innerHTML = '<i class="fas fa-microphone text-dark"></i>   ';
    // quoteAuthor.innerHTML += newQuote[1];
    quoteAuthor.innerHTML += newQuote.quoteAuthor;


}



 


