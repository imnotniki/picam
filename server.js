require('dotenv').config()
const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const port = process.env.HOST_PORT;
const stream_url = process.env.STREAM_URL;

app.use(express.static(path.join(__dirname, 'public')));


app.get('/stream', async (req, res) => {
    try {
        const response = await axios({
            method: 'get',
            url: 'http://192.168.0.2:8081/',
            responseType: 'stream'
        });

        res.setHeader('Content-Type', response.headers['content-type']);
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Connection', 'keep-alive');
        res.setHeader('Accept-Ranges', 'bytes');
        response.data.pipe(res);
    } catch (error) {
        res.status(500).send('Error retrieving the stream');
    }
});


app.listen(port, () => {
    console.log(`Express server running at http://localhost:${port}`);
});