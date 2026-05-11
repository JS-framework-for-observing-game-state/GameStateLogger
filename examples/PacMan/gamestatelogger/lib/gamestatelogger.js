export class GameStateLogger {
   constructor(flushSize, ID = (Date.now().toString(36) + Math.random().toString(36))) {
      this.eventLog = []; // Array for holding tuples of eventName and eventTime, to send to server
      this.flushSize = flushSize; // Number of events to log before sending to server
      this.ID = ID;
   }


   /**
    * Logs key down presses
    **/
   logKeyDownEvent(key, time, points = "n/a") {
      const Event = {
            ID: this.ID,
            eventName: "keyDown",
            keyPressed: key,
            eventTime: time,
            points: points
      };

      this.eventLog.push(Event); 
      
      // Array is flushed and data sent, every time the array length exceeds flushSize
      if (this.eventLog.length > this.flushSize) {
         this.postData();
      }
   }
   
   
   /**
    * Logs key up releases
    **/
   logKeyUpEvent(key, time, points = "n/a") {
      const Event = {
            ID: this.ID,
            eventName: "keyUp",
            keyPressed: key,
            eventTime: time,
            points: points
      };

      this.eventLog.push(Event);

      // Array is flushed and data sent, every time the array length exceeds flushSize
      if (this.eventLog.length > this.flushSize) {
         this.postData();
      }
   }


   /**
    * Used to log clicks and their placement.
    * Location when logging a button click is the button name.
    * When logging a specific place click, recommended syntax for
    * location is: {x: xcoord, y: ycoord}.
    * Can also be used to log swipe events by logging the direction
    * as the event(Name) and the location as the location of the initiated
    * swipe.
    **/
   logClickEvent(event, location, time, points = "n/a") {
      const Event = {
            ID: this.ID,
            eventName: event,
            location: location,
            eventTime: time,
            points: points
      };

      this.eventLog.push(Event); 
      
      // Array is flushed and data sent, every time the array length exceeds flushSize
      if (this.eventLog.length > this.flushSize) {
         this.postData();
      }
   }


   /**
    * Logs a new level
    **/
   logNewLevel(event, time, points = "n/a") {
      const Event = {
            ID: this.ID,
            eventName: event,
            levelChanged: true,
            eventTime: time,
            points: points
      };

      this.eventLog.push(Event); 
      
      // Array is flushed and data sent, every time the array length exceeds flushSize
      if (this.eventLog.length > this.flushSize) {
         this.postData();
      }
   }

   
   /**
    * Logs the location of any element e.g. {x: coord, y: coord}
    **/
   logLocation(event, location, time) {
      const Event = {
            ID: this.ID,
            eventName: event,  // E.g. "Snake's position"
            location: location, // E.g. an object containing an x and y {x: ..., y: ...}
            eventTime: time
      };

      this.eventLog.push(Event); 
      
      // Array is flushed and data sent, every time the array length exceeds flushSize
      if (this.eventLog.length > this.flushSize) {
         this.postData();
      }
   }
   
   /**
    * Logs a random seed
    **/
   logRandomSeed(event, randomSeed, time) {
      const Event = {
            ID: this.ID,
            eventName: event,  // E.g. "Random seed: Apple x"
            randomSeed: randomSeed,
            eventTime: time
      };

      this.eventLog.push(Event);
      // Array is flushed and data sent, every time the array length exceeds flushSize
      if (this.eventLog.length > this.flushSize) {
         this.postData();
      }
   }


   /**
    * Log a game result, such as tie, game over, X wins. Eventname can be e.g. "Game Over"
    **/
   logGameResult(event, time, points = "n/a") {
      const Event = {
            ID: this.ID,
            gameEnd: true,
            eventName: event,
            eventTime: time,
            points: points
      };

      this.eventLog.push(Event); 
      
      this.postData();
   }


   /**
    * Logs when a user is closing the game window, only used when a
    * window is closed in the middle of a session
    **/
   logWindowClose(event, time, points = "n/a") {
      const Event = {
            ID: this.ID,
            eventName: event,
            eventTime: time,
            points: points
      };

      this.eventLog.push(Event); 
      
      // Array is flushed as player has ended the game
      this.postData();
   }

   changeID(newID = (Date.now().toString(36) + Math.random().toString(36))) {
      this.ID = newID;
   }

   /**
    * Send logged events to the server via. POST request
    **/
   postData () {
      fetch('http://localhost:3000/log-data',
               {  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  mode: 'cors',
                  cache: 'default',
                  body: JSON.stringify(this.eventLog)});
      this.eventLog = [];
   }
}