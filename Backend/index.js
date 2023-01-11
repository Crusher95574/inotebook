const connectToMongo=require('./db');
const express = require('express');

const { default: mongoose } = require('mongoose');
mongoose.set('strictQuery',true);
connectToMongo();

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Divay!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
