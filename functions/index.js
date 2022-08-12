const functions = require("firebase-functions");
const cors = require('cors');
const express = require('express');
const app = express();
const bodyparser =require('body-parser')
app.use(bodyparser.urlencoded({ extended: true })); 

app.use(cors({ origin: true }));
const { initializeApp, cert } = require('firebase-admin/app');

const { getFirestore} = require('firebase-admin/firestore');
const privateKey = require('./private-key.json');

initializeApp({
    credential: cert(privateKey)
});

const db = getFirestore();

app.get('/api', (req, res) => {
    res.end("He recibido una peticion GET");
});

app.post('/api', (req, res) => {
    db.collection('testing').add( req.body ).then(ref => {
        res.end("Se han almacenado los datos")
    }).catch(err => {
        res.end(err)
    });
});

app.post('/api/test', (req,res)=>{
    res.end(req.body);
});


exports.widgets = functions.https.onRequest(app);