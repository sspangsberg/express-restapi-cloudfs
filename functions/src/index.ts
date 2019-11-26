import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as bodyParser from 'body-parser';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

//initialize firebase
admin.initializeApp(functions.config().firebase);

//initialize Express servers
const app = express();
const main = express();


main.use('/api/v1', app); //add path used for receiving the request
main.use(bodyParser.json()); //select JSON as the main parser for processing the request body


//export function
export const webApi = functions.https.onRequest(main);

app.get('/warm', (req, res) => {
    res.send('This the warm response and modified :)');
})



