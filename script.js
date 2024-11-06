//to display a new quote each time the button is clicked. For simplicity, we’ll use an array of quotes.
const quotes=[
    "The best way to predict the future is to create it.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Don't watch the clock; do what it does. Keep going.",
    "You miss 100% of the shots you don't take.",
    "The journey of a thousand miles begins with one step."
];

//Function to display a radom quote
function displayQuote(){
    const quoteElement = document.getElementById('quote');
    const randomIndex = Math.floor(Math.random() * quotes.length);

    
//Update the quote element's text with a random quote
    quoteElement.innerText = quotes[randomIndex];
}

//Event listener for the button
document.getElementById('new-quote').addEventListener('click', displayQuote);
//'new-quote' ka button id 
