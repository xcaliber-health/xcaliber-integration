const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.post('/' , (req,res) => {
  console.log("Request Headers "+ JSON.stringify(req.headers)); // you will find your source id here
  console.log(req.body) // this is your event payload
  res.send() // this will acknowledge publisher that you have processed the event
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
