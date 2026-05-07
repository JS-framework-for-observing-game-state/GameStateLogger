# Documentation for GameStateLogger
GameStateLogger is a library that allows users to log events in their JavaScript games, to enable analyzing, debugging, and in limited capacity, replay a run of a game to ensure that it is not fraudulent or to observe where bugs in the gameplay might have arisen.

GameStateLogger is a lightweight framework that lets the user determine how many and which events to log without causing a large performance overhead.  

**Content Overview:**  
[Importing GameStateLogger to your game](#importing-gamestatelogger-to-your-game)  
- [Requirements to use the API](#requirementstousethe-api)  
- [Importing](#importing)
  
[Initializing the GameStateLogger](#initializingthegamestatelogger)  
[Available functions](#available-functions)  
- [logKeyDownEvent(key, time, points = "n/a")](#logkeydowneventkey-time-points--na)
- [logKeyUpEvent(key, time, points = "n/a")](#logkeyupeventkey-time-points--na)
- [logClickEvent(event, location, time, points = "n/a")](#logclickeventevent-location-time-points--na)  
- [logNewLevel(event, time, points = "n/a")](#lognewlevelevent-time-points--na)  
- [logLocation(event, location, time)](#loglocationevent-location-time)  
- [logRandomSeed(event, randomSeed, time)](#lograndomseedevent-randomseed-time)  
- [logGameResult(event, time, points = "n/a")](#loggameresultevent-time-points--na)
- [logWindowClose(event, time, points = "n/a")](#logwindowcloseevent-time-points--na)  
  
## Importing GameStateLogger to your game

### Requirements to use the API 
Every logging function requires the framework user to log a "time".
This requirement is to enable precise analysis of when logged events have happened in relation to each other.
It is also a crucial requirement for allowing to utilize replay scripts of the logged data.
It is recommended to implement a logical time system in the game, and re-use this logical time system in any replay script. [Read more about logical time here.](https://www.geeksforgeeks.org/distributed-systems/logical-clock-in-distributed-system/)
Choosing a logical time or real time is up to the user of the framework, however logical time is encouraged for precise logging.
The recommended approach is a timestep based system, wherein each operation in your game that alters game state increments the total timestep by one.

> [!NOTE]  
> JavaScript requires that any file that uses a module is also a module itself.
> There are two options you might try to ensure your game file is a module type file:
> 
> **In the HTML file, where you import your JavaScript game file:**
> Add `type="module"` to your import, as such:
> `<script type="module" src="game.js"></script>`
> 
> **In your package.json:**
>Add   `"type": "module"` to your package.json file, as such:
>```
>{
>  "name": "my-game",
>  "type": "module",
>  "author": "Jane Doe, John Doe",
>}
>```

### Importing
In order to use the framework, you need to import the source code for GameStateLogger in your directory.

Then, in the top of your game JavaScript file, import the GameStateLogger using ES Module syntax:
```
import { GameStateLogger } from 'your/path/to/gamestatelogger.js';
```
  

## Initializing the GameStateLogger 
To create an instance of the GameStateLogger for use in your game file, create a new object of the GameStateLogger with auto-generated ID:
`var gameStateLogger = new GameStateLogger(flushSize)`


To create an instance of the GameStateLogger for use in your game file, create a new object of the GameStateLogger with self-defined ID:
`var gameStateLogger = new GameStateLogger(flushSize, YOUR_ID)`

>**flushSize \[Type: Number\]:** A Number that lets the user define how often the eventLog should be sent to the server and flushed.

> [!NOTE]
> GameStateLogger has an in-built function for [auto generating near random IDs](https://stackoverflow.com/questions/3231459/how-can-i-create-unique-ids-with-javascript). The function utilizes UNIX time and a random Number to generate a random ID string:
> `Date.now().toString(36) + Math.random().toString(36))`  
> If no ID argument is given when instantiating the GameStateLogger, such a random ID will be generated.

## Available functions
### logKeyDownEvent(key, time, points = "n/a")

>**key \[Type: String or Number\]:** A String with the name of the key pressed or a Number of the key code corresponding to the key pressed. Example: "ArrowDown", "w" or 37.  
>**time \[Type: Number\]:** The time at which an event has occurred. Consistency in time counting should be kept across all logs.  
>_OPTIONAL:_ **points \[Type: Number\]:** A number representing the current number of points the player has.  

`logKeyDownEvent(...)` is used to log when a user presses a key. Note that the logged event automatically comes with a field `ID: your_id_or_random_id` as well as `eventName: "keyDown"`.  

`points` default to a value of “n/a” if no parameter is given.   
  
Example logging: `{"ID":"mopt0t2u0.zmgudk1bgkl16", "eventName":"keyDown", "keyPressed":40, "eventTime":171, "points":4}`


### logKeyUpEvent(key, time, points = "n/a")

>**key \[Type: String or Number\]:** A String with the name of the key pressed or a Number of the key code corresponding to the key pressed. Example: "ArrowDown", "w" or 37.  
>**time \[Type: Number\]:** The time at which an event has occurred. Consistency in time counting should be kept across all logs.  
>_OPTIONAL:_ **points \[Type: Number\]:** A number representing the current number of points the player has.  

`logKeyUpEvent(...)` is used to log when a user releases a key. Note that the logged event automatically comes with a field `ID: your_id_or_random_id` as well as `eventName: "keyUp"`.  

`points` default to a value of “n/a” if no parameter is given.   
  
Example logging: `{"ID":"mopt0t2u0.zmgudk1bgkl16", "eventName":"keyUp", "keyPressed":40, "eventTime":171, "points":4}`   


### logClickEvent(event, location, time, points = "n/a")

>**event \[Type: String\]:** A string with a description of the event, such as "Click" or "Button click".  
>**location \[Type: Object, String or Number\]:** The location of the click. Recommended formats:  
>Object of the form: {x : xcoord, y: ycoord}.  
>A String containing the ID of an HTML element that was clicked.  
>A String or Number identifier of a clickable element in your game.  
>**time \[Type: Number\]:** The time at which an event has occurred. Consistency in time counting should be kept across all logs.  
>_OPTIONAL:_ **points \[Type: Number\]:** A number representing the current number of points the player has.  

`logClickEvent(...)` is used to log when a user clicks with their mouse. Note that the logged event automatically comes with a field `ID: your_id_or_random_id`.  

`points` default to a value of “n/a” if no parameter is given.   
  
Example logging: `{"ID":"mopt0t2u0.zmgudk1bgkl16", "eventName":"Click", "location":"game-start", "eventTime":3, "points":0}`   


### logNewLevel(event, time, points = "n/a") 

>**event \[Type: String or Number\]:** A String or Number representing the change in level, such as 2 or "New level: 2".  
>**time \[Type: Number\]:** The time at which an event has occurred. Consistency in time counting should be kept across all logs.  
>_OPTIONAL:_ **points \[Type: Number\]:** A number representing the current number of points the player has.  

`logNewLevel(...)` is used to logging when a user changes levels, if your game has a level system. Note that the logged event automatically comes with a field `ID: your_id_or_random_id` and `levelChanged:true`.  
This lets you keep track of at which level following logged events happened.

`points` default to a value of “n/a” if no parameter is given.   
  
Example logging: `{"ID":"mopt0t2u0.zmgudk1bgkl16", "eventName":"Level increased to 2", "levelChanged":true, "eventTime":320, "points":5}`


### logLocation(event, location, time)

>**event \[Type: String\]:** A descriptor of the element of which you are logging a location. I.e.: "Position of Snake's head".  
>**location \[Object, String or Number\]:** An Object, String or Number that describes a location. If using Object, notation could i.e. be: {x: ..., y: ...}.  
>**time \[Type: Number\]:** The time at which an event has occurred. Consistency in time counting should be kept across all logs.  

`logLocation(...)` is used to log the location of any game elements the user wishes, at the point of time in game they wish. Note that the logged event automatically comes with a field `ID: your_id_or_random_id`.        
  
Example logging: `{"ID":"mopt0t2u0.zmgudk1bgkl16", "eventName":"Position of Snake's head", location:{x:160, y:140}, "eventTime":320}`


### logRandomSeed(event, randomSeed, time)

>**event \[Type: String\]:** A descriptor of the element for which you are logging a random seed, i.e. "Apple x-value".   
>**randomSeed \[Number\]:** The random seed generated.  
>**time \[Type: Number\]:** The time at which an event has occurred. Consistency in time counting should be kept across all logs.  

`logRandomSeed(...)` is used to log any random seeds that may be present in the game, when they are generated. Note that the logged event automatically comes with a field `ID: your_id_or_random_id`.   
  
Example logging: `{"ID":"mopt0t2u0.zmgudk1bgkl16", "eventName":"Apple x-value", randomSeed:85, "eventTime":320}`


### logGameResult(event, time, points = "n/a")

>**event \[Type: String\]:** A string representing the game result. Examples: "Game Over", "Tie", "Player won". The specific content of the string is up to user of the framework, however we recommend to keep it consistent across all logs.  
>**time \[Type: Number\]:** The time at which an event has occurred. Consistency in time counting should be kept across all logs.  
>_OPTIONAL:_ **points \[Type: Number\]:** A number representing the current number of points the player has.  

`logGameResult(...)` is used to log intermediate game results, such as game overs, ties, or wins of a specific round. Note that the logged event automatically comes with a field `ID: your_id_or_random_id` and `gameEnd: true`.  

Note that a separate function exists for logging when a user closes their window, [logWindowClose(event, time, points = "n/a")](#logwindowcloseevent-time-points--na)  

`points` default to a value of “n/a” if no parameter is given.   
  
Example logging: `{"ID":"mopt0t2u0.zmgudk1bgkl16", "gameEnd":true, "eventName":"Game over!", "eventTime":890, "points":7}`


### logWindowClose(event, time, points = "n/a")

>**event \[Type: String\]:** A string representing that the window has been close. Examples: "Window closed". The specific content of the string is up to user of the framework, however we recommend to keep it consistent across all logs.  
>**time \[Type: Number\]:** The time at which an event has occurred. Consistency in time counting should be kept across all logs.  
>_OPTIONAL:_ **points \[Type: Number\]:** A number representing the current number of points the player has.  

`logWindowClose(...)` is used to log that the window has been closed. This function is intended to be used when a game session is completely ended. Note that the logged event automatically comes with a field `ID: your_id_or_random_id`.   
A separate function exists for logging events such as Game Overs, see [logGameResult(event, time, points = "n/a")](#loggameresultevent-time-points--na).  

`points` default to a value of “n/a” if no parameter is given.   
  
Example logging: `{"ID":"mopt0t2u0.zmgudk1bgkl16", "eventName":"Window closed", "eventTime":890, "points":7}`
