'use strict'

import express from 'express';
import bodyparser from 'body-parser';
import request from 'request';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.post('/', (req, res) => {
    let body = '';

    req.on('data', (chunk) => {
        body += chunk.toString();
    });

    req.on('end', () => {
        let payload = JSON.parse(body);
        if (payload.Type === 'SubscriptionConfirmation') {
            let url = payload.SubscribeURL;
            request(url, (err, response) => {
                if (!err && response.statusCode === 200) {
                    res.json({ "success": true });
                } else {
                    res.json({ "success": false });
                }
            });
        }
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));