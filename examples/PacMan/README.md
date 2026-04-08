# JS Framework for Observing Game State implemented in Pac-Man
In this example, [Brent Ward's JavaScript Pac-Man implementation](https://github.com/bward2/pacman-js) has been used as a base for the GameStateLogger.   
   
**Set-up instructions:**  
To install required dependencies, in your terminal run `npm i`.   
   
   
**Run instructions:**   
To start the Pac-Man game in a browser, in your terminal, run:   
```code
  npm run serve
```

To run the server-side of GameStateLogger, to receiving data from the game and create JSON files:   
From `/gamestatelogger/server` run:
```code
  node server.js
```
   
Game can now be accessed at `http://127.0.0.1:8080/`, and logged events can be seen in the browser terminal, as well as the JSON file(s) logged in `gamestatelogger/server`.
