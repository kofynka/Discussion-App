//server

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const Pusher = require('pusher');
const Sentiment = require('sentiment');
const sentiment = new Sentiment();

const pusher = new Pusher({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.PUSHER_KEY,
    secret: process.env.PUSHER_SECRET,
    cluster: 'eu',
    encrypted: true,
});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

app.post('/messages', (req, res) => {
    const { body } = req;
    const { text, name } = body;
    const result = sentiment.analyze(text);
    const comparative = result.comparative;
    //analyzing the message sent by the user to determine the context of the message

    const data = {
        text,
        name,
        timeStamp: new Date(),
};

    try {
        pusher.trigger(['chat', 'rate'], 'message', data);
    } catch (e) {}
    res.json(data);
});