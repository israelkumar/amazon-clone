const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
'sk_test_51HQMBzLgxkeppLUMseuYQ7ytg8iBLjaTPJ4CYYAwf3Uqyka7Q3Yl1nYXlBKu5gnsvCA4hdRvr4FEr1BUYtNnFSXx00DQMHhsU5');
//API

// App confif
const app = express();
// Middleware
app.use(cors({origin: true}));
app.use(express.json);

//API Routes
app.get('/',(request,response) => res.status(200).send("hello universe"));


//Listen Command
exports.api = functions.https.onRequest(app);

