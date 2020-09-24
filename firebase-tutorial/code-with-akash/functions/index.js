const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

// const express = require('express');
// const app = express();

// app.get("/",(req, res)=> {
//     res.send("<h1>hello World<h1/>");
// });

// const port = process.env.PORT || 3000;
// app.listen(port,()=> console.log(`Listning on port ${port}..`));

exports.randomNumber = functions.https.onRequest((request, response) => {
    const number = Math.round(Math.random()*100);
    response.send(number.toString());
});

exports.helloworld = functions.https.onRequest((request, response)=>
{
        functions.logger.info("Hello logs!", {structuredData: true});
        response.send("Hello from Firebase!");
});


// app.get("/",(req, res)=> {
//         res.send("<h1>hello World<h1/>");
//     });

// const getName = functions.https.onRequest((request, response) => {
//   response.send('Jim');

// });

// exports.getName = getName;

exports.toTheDojo = functions.https.onRequest((req,res) => {
  res.redirect('https://www.google.com');
});

function abc(req,response)
{
  response.send('Jim');
}

const getName = functions.https.onRequest( (request, response) =>{
  abc(request,response);
});

exports.getName = getName;

//callback function

exports.sayHello = functions.https.onCall((data, context)=>{
  const name = data.name;
  return `hello, ${name}`;
});