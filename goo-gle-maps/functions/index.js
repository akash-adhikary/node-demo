const functions = require('firebase-functions');
const express = require('express');
const engines = require('consolidate');
var hbs = require('handlebars');
const admin = require('firebase-admin');

const app = express();
app.engine('hbs',engines.handlebars);
app.set('views','./views');
app.set('view engine','hbs');

var serviceAccount = require("./goo-gle-maps-firebase-adminsdk-bkcz6-801a927f20.json");
admin.initializeApp({
credential: admin.credential.cert(serviceAccount),
databaseURL: "firebase-adminsdk-bkcz6@goo-gle-maps.iam.gserviceaccount.com"
});

async function getFirestore(){
const firestore_con  = await admin.firestore();

const writeResult = firestore_con.collection('sample').doc('sample_id').get().then(doc => {
    if (!doc.exists) { console.log('No such document!'); }
    else {return doc.data();}})
    .catch(err => { console.log('Error getting document', err);});
    return writeResult
    }

app.get('/',async (request,response) =>{
    var db_result = await getFirestore();
    response.render('index',{db_result});
    });


exports.app = functions.https.onRequest(app);

async function insertFormData(request){
    const writeResult = await admin.firestore().collection('form_data').add({
        firstname: request.body.firstname,
        lastname: request.body.lastname
    })
    .then(function() {console.log("Document successfully written!");})
    .catch(function(error) {console.error("Error writing document: ", error);});
}


app.post('/insert_data1',async (request,response) =>{
    var insert = await insertFormData(request);
    //response.sendStatus(200);
    var db_result = await getFirestore();
    response.render('index',{db_result});
    });

app.post('/insert_data',async (request,response) =>{
    var insert = await insertFormData(request);
    //response.sendStatus(200);
    response.redirect('https://goo.gl/maps/jNW3gSUsSxKWg2C27');
    });



app.get('/preeti',async (request,response) =>{
    var db_result = await getFirestore();
    response.render('index',{db_result});
    });

app.get('/nuzha',async (request,response) =>{
    var db_result = await getFirestore();
    response.render('index',{db_result});
    });








    
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
