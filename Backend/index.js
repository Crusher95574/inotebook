const connectToMongo=require('./db');
const express = require('express');
const { default: mongoose } = require('mongoose');


mongoose.set('strictQuery',true);
connectToMongo();

const app = express()
const port = 4000

//for using req.body we have to use app.use as a middle ware
app.use(express.json())

//Available Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
 