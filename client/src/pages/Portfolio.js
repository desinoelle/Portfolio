import React from "react";

function Portfolio() {
  return (
    <div className="container mt-5">
      <div className="jumbotron text-center bg-dark text-white">
        <h1 id="fadetext">My Portfolio</h1>
        <p className="lead" id="fadetext">
          This is a collection of projects that display my web design and coding abilities.
        </p>
      </div>
      <div className="jumbotron bg-dark text-white">
        <ul className="list-unstyled">
          <li className="media">
            <img src="./assets/images/smite.jpg" className="rounded mr-3" alt="..." />
            <div className="media-body">
              <h5 className="mt-0 mb-1">Smite Word Guess Game</h5>
              <p>This project is a word guess game where the user can use their keyboard to guess letters in the random word that is selected. This game is inspired by my favorite video game, Smite, and each word generated is a Smite character. I do NOT own any of the images in this web app. It was created for my own educational and recreational purposes. It really helped me understand how javascript functions within an html file. This project has been my favorite to work on so far in my web development journey. I hope you enjoy it as well!</p>
              <a className="btn btn-light mr-3" href="https://desinoelle.github.io/Word-Guess-Game/" role="button" target="_blank" rel="noopener noreferrer">View</a>
              <a className="btn btn-light" href="https://github.com/desinoelle/Word-Guess-Game" role="button" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
          </li>
          <li className="media my-4">
            <img src="./assets/images/crystal.jpg" className="rounded mr-3" alt="..." />
            <div className="media-body">
              <h5 className="mt-0 mb-1">Crystal Collector Game</h5>
              <p>At the start of the Crystal Collector game, the user is given a random number (19-120) and each of the four crystals are also assigned a random number (1-12). The goal of the game is to match your score to the given random number by clicking on the four crystals. Each time a crystal is clicked, the value of that crystal is added to the user's score. You lose the game if your score goes over the random number, and you win the game if your score exactly matches the random number.</p>
              <a className="btn btn-light mr-3" href="https://desinoelle.github.io/unit-4-game/" role="button" target="_blank" rel="noopener noreferrer">View</a>
              <a className="btn btn-light" href="https://github.com/desinoelle/unit-4-game" role="button" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
          </li>
          <li className="media my-4">
            <img src="./assets/images/strangerthings.jpg" className="rounded mr-3" alt="..." />
            <div className="media-body">
              <h5 className="mt-0 mb-1">Stranger Things Trivia</h5>
              <p>This project is a Stranger Things themed trivia game. The game starts as soon as the browser opens and the timer starts counting down from 10. If the question is answered incorrectly, or if it is not answered within the time frame, the user does not get any points and the game automatically moves on to the next question. If the answer is correct, the user's score increases by a point. At the end of the game, the score is displayed for the user and a restart button appears, which allows the user to restart the game completely.</p>
              <a className="btn btn-light mr-3" href="https://desinoelle.github.io/TriviaGame/" role="button" target="_blank" rel="noopener noreferrer">View</a>
              <a className="btn btn-light" href="https://github.com/desinoelle/TriviaGame" role="button" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
          </li>
          <li className="media my-4">
            <img src="./assets/images/giphyapi.gif" className="rounded mr-3" alt="..." />
            <div className="media-body">
              <h5 className="mt-0 mb-1">Giphy API Search</h5>
              <p>This project uses AJAX to search through Giphy's Api, and displays 10 animal gifs for the user on screen. Upon page load, there are automatically a few different buttons with categories to search for. However, there is also a form on the page that allows the user to add their own category button. When a button is pressed, 10 gifs appear on screen that are still and not yet animated. When the image is clicked on, the url of the image changes to the animated version. When the image is clicked again, the url of the image changes to the still version.</p>
              <a className="btn btn-light mr-3" href="https://desinoelle.github.io/GiphyApi" role="button" target="_blank" rel="noopener noreferrer">View</a>
              <a className="btn btn-light" href="https://github.com/desinoelle/GiphyApi" role="button" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
          </li>
          <li className="media my-4">
            <img src="./assets/images/train.png" className="rounded mr-3" alt="..." />
            <div className="media-body">
              <h5 className="mt-0 mb-1">Train Time Scheduler</h5>
              <p>This is a Train Scheduler app where the user may enter the train's name, destination, first arrival time of the day, and frequency of arrivals. All of this information is then stored in a database using Firebase and a new row is created in the Train Schedules table. The new row displays the train's name, destination, frequency of arrival, next train arrival, and minutes until the next train. I used moment.js to take the first arrival time and frequency, and then calculate the next train arrival and minutes until the next train with that information provided.</p>
              <a className="btn btn-light mr-3" href="https://desinoelle.github.io/TrainScheduler/" role="button" target="_blank" rel="noopener noreferrer">View</a>
              <a className="btn btn-light" href="https://github.com/desinoelle/TrainScheduler" role="button" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
          </li>
          <li className="media my-4">
            <img src="./assets/images/liri.jpg" className="rounded mr-3" alt="..." />
            <div className="media-body">
              <h5 className="mt-0 mb-1">Liri (Command line application)</h5>
              <p>The name of this app sounds awfully similar to something else, right? Command line application inspired by (you guessed it) Siri, using node js. This app searches spotify, omdb, and bands in town apis and spits out information on a specfic song, movie, or band that is entered by the user. Also reads random.txt file and can create a search based on the information provided in that file.</p>
              <a className="btn btn-light" href="https://github.com/desinoelle/liri-node-app" role="button" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
          </li>
          <li className="media my-4">
            <img src="./assets/images/angelhare.jpg" className="rounded mr-3" alt="..." />
            <div className="media-body">
              <h5 className="mt-0 mb-1">Angelhare Forest</h5>
              <p>Angelhare Forest is a Christmas Tree business owned by my family. I am the designer and upkeeper of this website.</p>
              <a className="btn btn-light" href="angelhareforest.com" role="button" target="_blank" rel="noopener noreferrer">View</a>
            </div>
          </li>
          <li className="media my-4">
            <img src="./assets/images/bamazon.png" className="rounded mr-3" alt="..." />
            <div className="media-body">
              <h5 className="mt-0 mb-1">Bamazon (Command line application)</h5>
              <p>Yet another app that sounds oddly familiar. Command line application which lists out products from a mySQL database which contains information on the product's ID, name, price, and stock quantity. The user is then able to purchase a specfic product by entering the product ID and the number of units they would like to buy. The application checks to see if the product id entered is valid and also checks to see if the item is in stock. The stock quantities from the database are updated accordingly.</p>
              <a className="btn btn-light" href="https://github.com/desinoelle/bamazon" role="button" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
          </li>
          <li className="media my-4">
            <img src="./assets/images/googlebooks.png" className="rounded mr-3" alt="..." />
            <div className="media-body">
              <h5 className="mt-0 mb-1">Google Books Search</h5>
              <p>This is an app that allows the user to search through Google's API of books. When the user searches for a book, ten books are displayed along with the title, authors, picture, and description of the book. There are also two buttons below each book that allow the user to either view the book for purchase or save the book for another time. When the books is saved, it is moved over to the "Saved" tab on the website.</p>
              <a className="btn btn-light mr-3" href="https://nytgb.herokuapp.com/" role="button" target="_blank" rel="noopener noreferrer">View</a>
              <a className="btn btn-light" href="https://github.com/desinoelle/nytgb" role="button" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
          </li>
          <li className="media my-4">
            <img src="https://c1.staticflickr.com/9/8143/7564361612_058949c8c8_m.jpg" className="rounded mr-3" alt="..." />
            <div className="media-body">
              <h5 className="mt-0 mb-1">Kitty Cat Clicky Game</h5>
              <p>This fun react application is a memory game with cute kitty cats! The game keeps track of the user's current score and top score. Win the game by clicking all of the cats that haven't been previously clicked. You lose the game if you click on a kitty that's already been clicked on. Play the game and test your memory skills!</p>
              <a className="btn btn-light mr-3" href="https://desinoelle.github.io/clickygame/" role="button" target="_blank" rel="noopener noreferrer">View</a>
              <a className="btn btn-light" href="https://github.com/desinoelle/clickygame" role="button" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;