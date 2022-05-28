const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
app.use(cors());
const mysql = require('mysql2');
require('dotenv').config();

let pool = mysql
  .createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
        connectionLimit: 10,
  })
  .promise();




app.get('/stocks', async (req, res, next) => {
  console.log('我是股票列表');
  let [data, fields] = await pool.execute('SELECT * FROM stocks');
  res.json(data);
});

app.get('/stocks/:stockId', async (req, res, next) => {
  console.log('get stocks by id', req.params);
  let [data, fields] = await pool.execute('SELECT * FROM stocks WHERE id = ' + req.params.stockId);
  console.log('query stock by id:', data);
 
  if (data.length === 0) {
    res.status(404).json(data);
  } else {
    res.json(data);
  }
});

app.listen(3001, () => {
  console.log('Server start at 3001');
});