const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const fetch = require('node-fetch');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


const route = express.Router();

const port = process.env.PORT || 5000;

const baseUrl = 'https://api.deezer.com';

app.use('/v1', route);



route.get('/artists/:userId', async (req, res) => {
    const { userId } = req.params;
    const response = await fetch(baseUrl + `/user/${userId}/artists`);

    try {
        checkStatus(response);
        res.json(await response.json());
    } catch (error) {
        const errorBody = await error.response.text();
        res.json({ errorMessage: errorBody });
    }
});

route.get('/search/artists/:name', async (req, res) => {
    const { name } = req.params;
    const response = await fetch(baseUrl + `/search/artist?q=${name}`);

    try {
        checkStatus(response);
        res.json(await response.json());
    } catch (error) {
        const errorBody = await error.response.text();
        res.json({ errorMessage: errorBody });
    }
});

route.get('/artist/:id', async (req, res) => {
    const { id } = req.params;
    const response = await fetch(baseUrl + `/artist/${id}`);

    try {
        checkStatus(response);
        res.json(await response.json());
    } catch (error) {
        const errorBody = await error.response.text();
        res.json({ errorMessage: errorBody });
    }
});

route.get('/artist/:id/top', async (req, res) => {
    const { id } = req.params;
    const response = await fetch(baseUrl + `/artist/${id}/top?limit=5`);

    try {
        checkStatus(response);
        res.json(await response.json());
    } catch (error) {
        const errorBody = await error.response.text();
        res.json({ errorMessage: errorBody });
    }
});

route.get('/artist/:id/albums', async (req, res) => {
    const { id } = req.params;
    const response = await fetch(baseUrl + `/artist/${id}/albums`);
    try {
        checkStatus(response);
        res.json(await response.json());
    } catch (error) {
        const errorBody = await error.response.text();
        res.json({ errorMessage: errorBody });
    }
})



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});


// Error handling methods

class HTTPResponseError extends Error {
    constructor(response) {
        super(`HTTP Error Response: ${response.status} ${response.statusText}`);
        this.response = response;
    }
}

const checkStatus = response => {
    if (response.ok) {
        return response;
    } else {
        throw new HTTPResponseError(response);
    }
}