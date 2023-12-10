var btn = document.getElementById("btn");
var quote = document.getElementById("quote");
var quoteAuthor = document.getElementById("quote-author");

var quotes = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    author: "-- Oscar Wilde",
  },
  {
    quote:
      "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    author: "-- Marilyn Monroe",
  },
  {
    quote:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: "--  Albert Einstein",
  },
  {
    quote: "“So many books, so little time.”",
    author: "-- Frank Zappa",
  },
  {
    quote: "“So many books, so little time.”",
    author: "-- Frank Zappa",
  },
];

btn.addEventListener( "click", function ()
{
  var randomNumber = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[randomNumber].quote;
  quoteAuthor.innerText = quotes[randomNumber].author;
});
