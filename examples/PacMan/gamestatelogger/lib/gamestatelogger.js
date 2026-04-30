export class GameStateLogger {
   constructor(flushSize, ID = (Date.now().toString(36) + Math.random().toString(36))) {
      this.EventLog = []; // Array for holding tuples of eventName and eventTime, to send to server
      this.flushSize = flushSize; // Number of events to log before sending to server
      this.ID = ID;
   }


   /**
    * Called by user of the library. Logs key down presses.
    **/
   logKeyDownEvent(key, time, points) {
      const Event = {
            ID: this.ID,
            eventName: "keyDown",
            keyPressed: key,
            eventTime: time,
            points: points,
      };

      this.EventLog.push(Event); 
      console.log(`Logged ${Event.eventName} action. Logged at ${Event.eventTime} and has ${Event.points} points`); // Only for testing
      
      // Array is flushed and data sent, every time the array hits over 10 elements.
      // Interval can be changed later
      if (this.EventLog.length > this.flushSize) {
         this.postData();
      }
   }
   
   
   /**
    * Called by user of the library. Logs key up releases.
    **/
   logKeyUpEvent(key, time, points = "n/a") {
      const Event = {
            ID: this.ID,
            eventName: "keyUp",
            keyPressed: key,
            eventTime: time,
            points: points,
      };

      this.EventLog.push(Event);
      console.log(`Logged ${Event.eventName} event. Logged at time: ${Event.eventTime} and has ${Event.points} points`); // Only for testing
   }


   /**
    * Used to log clicks on buttons, and clicks and their placement.
    * Location when logging a button click is the button name.
    * When logging a specific place click, recommended syntax for
    * location is: {x: xcoord, y: ycoord}.
    * Can also be used to log swipe events by logging the direction
    * as the event(Name) and the location as the location of the initiated
    * swipe (if nescessary).
    **/
   logClickEvent(event, location, time, points) {
      const Event = {
            ID: this.ID,
            eventName: event,
            location: location,
            eventTime: time,
            points: points,
      };

      this.EventLog.push(Event); 
      console.log(`Logged ${JSON.stringify(Event.eventName)} action, clicked at ${Event.location}. Logged at ${Event.eventTime} and has ${Event.points} points`); // Only for testing
      
      // Array is flushed and data sent, every time the array hits over 10 elements.
      // Interval can be changed later
      if (this.EventLog.length > this.flushSize) {
         this.postData();
      }
   }


   /**
    * Log new level.
    **/
   logNewLevel(newlevel, time, points) {
      const Event = {
            ID: this.ID,
            level: newlevel,
            eventTime: time,
            points: points,
      };

      this.EventLog.push(Event); 
      console.log(`Level changed to ${Event.level}. Logged at ${Event.eventTime} time and has ${Event.points} points`); // Only for testing
      
      // Array is flushed and data sent, every time the array hits over 10 elements.
      // Interval can be changed later
      if (this.EventLog.length > this.flushSize) {
         this.postData();
      }
   }

   /**
    * Log a game result, such as tie, game over, X wins. Eventname can be e.g. "Game Over"
    **/
   logGameResult(event, time, points = "n/a", highscore = "n/a") {
      const Event = {
            ID: this.ID,
            gameEnd: true,
            eventName: event,
            eventTime: time,
            points: points,
            highscore: highscore,
      };

      this.EventLog.push(Event); 
      console.log(`Logged ${Event.eventName} event. Logged at time: ${Event.eventTime} 
        and has ${Event.points} points, with ${Event.highscore} highscore`); // Only for testing
      
      this.postData();
   }
   
   /**
    * Log a game result, such as tie, game over, X wins. Eventname can be e.g. "Game Over"
    **/
   logLocation(event, location, time) {
      const Event = {
            ID: this.ID,
            eventName: event,  // E.g. "Snake's position"
            location: location, // E.g. an object containing an x and y {x: ..., y: ...}
            eventTime: time
      };

      this.EventLog.push(Event); 
      console.log(`Logged ${Event.eventName} event. Logged at time: ${Event.eventTime} 
        and has ${Event.location} position.`); // Only for testing
      
      if (this.EventLog.length > this.flushSize) {
         this.postData();
      }
   }
   
   /**
    * Log a game result, such as tie, game over, X wins. Eventname can be e.g. "Game Over"
    **/
   logRandomSeed(event, randomSeed, time) {
      const Event = {
            ID: this.ID,
            eventName: event,  // E.g. "Random seed: Apple x"
            randomSeed: randomSeed,
            eventTime: time
      };

      this.EventLog.push(Event); 
      console.log(`Logged ${Event.eventName} event. Logged at time: ${Event.eventTime} 
        and has ${Event.randomSeed} seed.`); // Only for testing
      
      if (this.EventLog.length > this.flushSize) {
         this.postData();
      }
   }

   /**
    * Log when a user is closing the game window, only used when a
    * window is closed in the middle of a session (logGameResult is not the final event.)
    **/
   logWindowClose(event, time, points = "n/a", highscore = "n/a") {
      const Event = {
            ID: this.ID,
            eventName: event,
            eventTime: time,
            points: points,
            highscore: highscore,
      };

      this.EventLog.push(Event); 
      console.log(`Logged ${Event.eventName} event. Logged at time: ${Event.eventTime} and has ${Event.points} points,
        with ${Event.highscore} highscore`); // Only for testing
      
      // Array is flushed as player has ended the game.
      this.postData();
   }


   /**
    * Send logged events to the server via. POST request. 
    **/
   postData () {
      fetch('http://localhost:3000/log-data',
               {  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  mode: 'cors',
                  cache: 'default',
                  body: JSON.stringify(this.EventLog)})
                  .then(response => console.log(response))
                  .catch(error => console.error('Error:', error));
         
      this.EventLog = [];
   }
}