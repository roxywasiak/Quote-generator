
function changeEverything(){
    let currentColor = getRandomColor();
      setBackgroundColor(currentColor, '#new-quote');
      setBackgroundColor(currentColor, '#facebook-quote');
      setBackgroundColor(currentColor, 'body');
      changeQuote();
  }
  
  let previousColorIndex;
  function getRandomColor(){
    const colors = ["#E6B0AA", "#D7BDE2", "#A9CCE3", "#A2D9CE", "#ABEBC6", "#F9E79F", "#F5CBA7", "#EDBB99"];
    let randomIndex = Math.floor(Math.random() * colors.length);
      
      while(randomIndex === previousColorIndex){
          randomIndex = Math.floor(Math.random() * colors.length);
      }
    
      previousColorIndex = randomIndex;
      return colors[randomIndex];
  }
  
  function setBackgroundColor(currentColor, selector){
      let element = document.querySelector(selector);
    element.style.backgroundColor = currentColor;
  
  }
  
  
      


 let previousQuoteIndex;
 function changeQuote() {
const quotes =[
    ["Whatever the mind of man can conceive and believe, it can achieved.", "Napoleon Hill"],
    ["Strive not to be a success, but rather to be of value.", "Albert Einstein"],
    ["Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference. ", "Robert Frost"],
    ["I attribute my success to this: I never gave or took any excuse.", "Florence Nightingale"],
    ["The most difficult thing is the decision to act, the rest is merely tenacity.", "Amelia Earhart"],
    ["Every strike brings me closer to the next home run.", "Babe Ruth"],
    ["Life is what happens to you while you’re busy making other plans.", "John Lennon"],
    ["We become what we think about.","Earl Nightingale"],
    ["The mind is everything. What you think you become.","Buddha"],
     ["Your time is limited, so don’t waste it living someone else’s life.","Steve Jobs"]

];
let randomQuoteIndex = Math.floor(Math.random() * quotes.length);

while(randomQuoteIndex === previousQuoteIndex){
    randomQuoteIndex = Math.floor(Math.random() * quotes.length);

}

previousQuoteIndex = randomQuoteIndex;

let quoteBundle = quotes[randomQuoteIndex];
let quoteText = quoteBundle[0];
let authorText = quoteBundle[1];

let newQuoteText = document.querySelector('#text');
newQuoteText.innerHTML= quoteText;

let newAuthorText = document.querySelector('#author');
newAuthorText.innerHTML= authorText;

 }


