const { request, response } = require('express');
const express = require('express');
const app = express();

app.get('/', (request, response, next) => {
    response.send("首頁");
})

app.get('/about', (request, response ,next) => {
    response.send("關於");
})

app.listen(3000, () => {
    console.log('start server at port 3000');
})