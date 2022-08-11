const functions = require("firebase-functions");
const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors({ origin: true }));



app.get('/hello', (req, res) => {
    res.end("He recibido una peticion GET");  
  });
  
  app.post('/hello', (req, res) => {
    res.end("He recibido una peticion POST");  
  });
  
  // Expose Express API as a single Cloud Function:
  exports.widgets = functions.https.onRequest(app);