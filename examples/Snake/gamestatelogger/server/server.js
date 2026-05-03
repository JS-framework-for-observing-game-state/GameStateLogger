import express from 'express';
import fs from 'fs';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());

app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});

app.use(express.json());

const dir = "./JSONfiles";

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

/* Receive post data. */
try {
   app.post('/log-data', (req, res) => {
      // Iterate over every event from the received array 
      req.body.forEach(function(v) {
         // Create string filepath associated with the event.
         var filePath = dir + "/" + v.ID + ".json";
         var filePath1 = dir + "/" + (v.ID + 1) + ".json";
         var filePath2 = dir + "/" + (v.ID + 2) + ".json";
         var filePath3 = dir + "/" + (v.ID + 3) + ".json";
         var filePath4 = dir + "/" + (v.ID + 4) + ".json";
         var filePath5 = dir + "/" + (v.ID + 5) + ".json";
         var filePath6 = dir + "/" + (v.ID + 6) + ".json";
         var filePath7 = dir + "/" + (v.ID + 7) + ".json";
         var filePath8 = dir + "/" + (v.ID + 8) + ".json";
         var filePath9 = dir + "/" + (v.ID + 9) + ".json";
         var filePath10 = dir + "/" + v.ID + 10 + ".json";
         var filePath11 = dir + "/" + (v.ID + 11) + ".json";
         var filePath12 = dir + "/" + (v.ID + 12) + ".json";
         var filePath13 = dir + "/" + (v.ID + 13) + ".json";
         var filePath14 = dir + "/" + (v.ID + 14) + ".json";
         var filePath15 = dir + "/" + (v.ID + 15) + ".json";
         var filePath16 = dir + "/" + (v.ID + 16) + ".json";
         var filePath17 = dir + "/" + (v.ID + 17) + ".json";
         var filePath18 = dir + "/" + (v.ID + 18) + ".json";
         var filePath19 = dir + "/" + (v.ID + 19) + ".json";
         var filePath20 = dir + "/" + (v.ID + 20) + ".json";
         var filePath21 = dir + "/" + (v.ID + 21) + ".json";
         var filePath22 = dir + "/" + (v.ID + 22) + ".json";
         var filePath23 = dir + "/" + (v.ID + 23) + ".json";
         var filePath24 = dir + "/" + (v.ID + 24) + ".json";
         var filePath25 = dir + "/" + (v.ID + 25) + ".json";
         var filePath26 = dir + "/" + (v.ID + 26) + ".json";
         var filePath27 = dir + "/" + (v.ID + 27) + ".json";
         var filePath28 = dir + "/" + (v.ID + 28) + ".json";
         var filePath29 = dir + "/" + (v.ID + 29) + ".json";
         var filePath30 = dir + "/" + (v.ID + 30) + ".json";
         var filePath31 = dir + "/" + (v.ID + 31) + ".json";
         var filePath32 = dir + "/" + (v.ID + 32) + ".json";
         var filePath33 = dir + "/" + (v.ID + 33) + ".json";
         var filePath34 = dir + "/" + (v.ID + 34) + ".json";
         var filePath35 = dir + "/" + (v.ID + 35) + ".json";
         var filePath36 = dir + "/" + (v.ID + 36) + ".json";
         var filePath37 = dir + "/" + (v.ID + 37) + ".json";
         var filePath38 = dir + "/" + (v.ID + 38) + ".json";
         var filePath39 = dir + "/" + (v.ID + 39) + ".json";
         var filePath40 = dir + "/" + (v.ID + 40) + ".json";
         var filePath41 = dir + "/" + (v.ID + 41) + ".json";
         var filePath42 = dir + "/" + (v.ID + 42) + ".json";
         var filePath43 = dir + "/" + (v.ID + 43) + ".json";
         var filePath44 = dir + "/" + (v.ID + 44) + ".json";
         var filePath45 = dir + "/" + (v.ID + 45) + ".json";
         var filePath46 = dir + "/" + (v.ID + 46) + ".json";
         var filePath47 = dir + "/" + (v.ID + 47) + ".json";
         var filePath48 = dir + "/" + (v.ID + 48) + ".json";
         var filePath49 = dir + "/" + (v.ID + 49) + ".json";
         var filePath50 = dir + "/" + (v.ID + 50) + ".json";
         var filePath51 = dir + "/" + (v.ID + 51) + ".json";
         var filePath52 = dir + "/" + (v.ID + 52) + ".json";
         var filePath53 = dir + "/" + (v.ID + 53) + ".json";
         var filePath54 = dir + "/" + (v.ID + 54) + ".json";
         var filePath55 = dir + "/" + (v.ID + 55) + ".json";
         var filePath56 = dir + "/" + (v.ID + 56) + ".json";
         var filePath57 = dir + "/" + (v.ID + 57) + ".json";
         var filePath58 = dir + "/" + (v.ID + 58) + ".json";
         var filePath59 = dir + "/" + (v.ID + 59) + ".json";
         
         
         var fileArray = [filePath, filePath1, filePath2, filePath3, filePath4, filePath5, filePath6, filePath7, filePath8, filePath9,
            filePath10, filePath11, filePath12, filePath13, filePath14, filePath15, filePath16, filePath17, filePath18, filePath19,
            filePath20, filePath21, filePath22, filePath23, filePath24, filePath25, filePath26, filePath27, filePath28, filePath29,
            filePath30, filePath31, filePath32, filePath33, filePath34, filePath35, filePath36, filePath37, filePath38, filePath39,
            filePath40, filePath41, filePath42, filePath43, filePath44, filePath45, filePath46, filePath47, filePath48, filePath49,
            filePath50, filePath51, filePath52, filePath53, filePath54, filePath55, filePath56, filePath57, filePath58, filePath59
         ];
         // If file does not exist, create it with the start bracket for containing objects
         fileArray.forEach(e => {
            if (!fs.existsSync(e)) {
               fs.writeFileSync(e, "", { flag: 'w' });
            }
         });

         // If event ends a session, write the final data and '}' to the file and close it.
         if (v.gameEnd || v.eventName === "Session ended") {
            try {
               

               fileArray.forEach(e => {
                  v.ID = e;
                  let data = JSON.stringify(v);
                  fs.writeFileSync(e, data, {flag: "a+"});
               });
            } catch (e) {
               console.log(`Could not write to file, with error: ${e}`);
            }
         }
         else {
            try {
               

               fileArray.forEach(e => {
                  v.ID = e;
                  let data = JSON.stringify(v);
                  fs.writeFileSync(e, data, {flag: "a+"});
               });
            } catch (e) {
               console.log(`Could not write to file, with error: ${e}`);
            }
         }   
      });
      
      res.json({ status : "ok"});
   });
} catch (e) {
   console.log("Post error: " + e);
}
