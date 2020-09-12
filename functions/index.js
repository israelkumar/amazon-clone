const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const { request, response } = require('express');
const stripe = require("stripe")(
'sk_test_51HQMBzLgxkeppLUMseuYQ7ytg8iBLjaTPJ4CYYAwf3Uqyka7Q3Yl1nYXlBKu5gnsvCA4hdRvr4FEr1BUYtNnFSXx00DQMHhsU5');
//API

// App confif
const app = express();
// Middleware
app.use(cors({origin: true}));
app.use(express.json());

//API Routes
app.get('/',(request,response) => response.status(200).send("hello universe"));
app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
  
    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: "usd",
    });
     // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

//Listen Command
exports.api = functions.https.onRequest(app);

