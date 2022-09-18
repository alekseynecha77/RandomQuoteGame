/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var colors = ['red', 'green', 'blue', 'moon', 'orange', 'purple', 'peach', 'pink', 'gray', 'teal'];
var quotes = [
  {
    quote:'Sometimes a legend that endures for centuries...endures for a reason.',
    source: "- Dan Brown.",
    citation: "― Dan Brown, The Lost Symbol",
    year: "2010"
  },
  {

    quote:'Legend remains victorious in spite of history.', 
    source:"- Sarah Bernhardt.",
    citation: "French - Actress October 22, 1845 - March 26, 1923"

  },
  {
    quote:'Heroes get remembered, but legends never die.', 
    source:"- Max Holloway.",
    citation: "Taken from the movie The Sandlot"


  },
  {
    quote:'If you want to be a legend you have to fight with legends.',
    source:"- Aleksei Oleinik.",
    citation: "Russian - Athlete Born: June 25, 1977"
  },
  {
    quote:'Legends are all to do with the past and nothing to do with the present',
     source:"-Lauren Bacall.",
     citation: "Profession Actress, 16 September 1924"
  }

];


/***
 * `getRandomQuote` function
***/

function getRandomQuote(){
// In the function body, create a variable to store a random number ranging from zero to the index of the last item in the quotes array. 

var qoutedIndex = Math.floor(Math.random() * quotes.length);
// array.length rather than the actual quotes variable makes this function a little bit more flexible

for(let i = 0; i< quotes.length; i++){
  // Random quote variable with the index set to your random number variable 

var randQoutes = quotes[qoutedIndex];

}
return randQoutes;


}
var result = getRandomQuote(quotes);
console.log(result);

/***
 * `printQuote` function
***/

function printQuote(){
  // / 1. Create a variable that calls the getRandomQuote() 
  // function
var printResult = getRandomQuote();
document.body.style.backgroundColor = getRandomColor();

  // 2. Create a variable that initiates your HTML string with 
  // the first two <p></p> elements, their classNames, 
  // and the quote and source properties, but leave off 
  // the second closing `</p>` tag for now
var html = 
 
 "<p class='quote'>"+ printResult.quote+"</p>"
  + "<p class='source'>" +printResult.source




  // 3. Use an if statement to check if the citation property 
  // exists, and if it does, concatenate a <span></span> 
  // element, appropriate className, and citation property 
  // to the HTML string
  if (printResult.citation) {
    html += `<span class="citation"> ${printResult.citation}</span>`;
  }

  if (printResult.year) {
    html += `<span class="year">${printResult.year}</span>`;
  }

  if (printResult.tag) {
    html += `<span class = "tag">, ${printResult.tag}</span>`;
   }

  // if(printResult.citation){
  //   html += "<span class='citation'>"+quotes.citation+"</span>";
  // }
  // 4. Use an if statement to check of the year property exists, 
  // and if it does, concatenate a <span></span> element, 
  // appropriate className, and year property to the HTML 
  //string
  // if(printResult.year){
  //   html += "<span class='year'>"+quotes.year+"</span>"
  // }

  // 5. After the two if statements, concatenate the closing </p> 
  // tag to the HTML string
html +='</p>';
  // 6. set the innerHTML of the quote-box div to equal the 
  // complete HTML string
  document.getElementById('quote-box').innerHTML = html; 

}

function getRandomColor(){

return colors[Math.floor(Math.random() * 9)];



}
setInterval(printQuote, 3000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
