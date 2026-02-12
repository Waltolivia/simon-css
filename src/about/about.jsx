import React from 'react';
import './about.css';

const cannedQuotes = [
  {
    quote: "Talk is cheap. Show me the code!",
    author: "Wan",
  },
  {
    quote: "Hello, I am here",
    author: "Pie",
  },
  {
    quote: "Hi",
    author: "Hello",
  }
]


export function About() {
  const [currentQuote, setCurrentQuote] = React.useState(cannedQuotes[0]);

  function changeQuote() {
    const newQuote = cannedQuotes(Math.floor(Math.random() * cannedQuotes.length));
    setCurrentQuote(newQuote);
  }

  React.useEffect(changeQuote, []);


  return (
    <main className="container-fluid bg-secondary text-center">
      <div>
        <div id="picture" className="picture-box"><img src="placeholder.jpg" alt="random" /></div>

        <p>
          Simon is a repetitive memory game where you follow the demonstrated color sequence until you make a mistake.
          The longer the sequence you repeat, the greater your score.
        </p>

        <p>
          The name Simon is a registered trademark of Milton-Bradley. Our use of the name and the game is for non-profit
          educational use only. No part of this code or program should be used outside of that definition.
        </p>

        <div id="quote" className="quote-box bg-light text-dark" onClick={changeQuote}>
          <p className="quote">(currentQuote.quote)</p>
          <p className="author">(currentQuote.authoir)</p>
        </div>
      </div>
    </main>
  );
}