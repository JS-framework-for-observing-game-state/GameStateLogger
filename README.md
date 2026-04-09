# GameStateLogger
GameStateLogger is proof of concept for an API that can be used to log events for JavaScript browser games. The framework includes an example of a server that can receive the logged events and log them in a JSON file.  
The structure of the JSON file is created such that it is compatible with databases such as Snowflake. This allows for the file to be easily uploaded into the database to analyse the data. Databases such as Snowflake that support JS UDF (user defined functions) allows one to make replay scripts for JS games that can run in the database. These functions can be used to check certain aspects of a game run. The example provided in `examples/TicTacToe/gamestatelogger/replayscripts/replayerudf.js` checks if the result of a game run is correct by replaying all moves.   
         

In `/src` you can find the gamestatelogger API in `/lib` as well as the example server code in `/server`.    
   
In `/examples` you can find examples of the games PacMan [coded by Brent Ward](https://github.com/bward2/pacman-js) and TicTacToe [coded by Canan Korkut](https://github.com/canankorkut/TicTacToe) with our API implemented. You will also find run instructions here. 

