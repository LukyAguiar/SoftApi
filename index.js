const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})



//Localhost:3000
app.listen(3000)