const express = require('express');
const bodyParser = require('body-parser');
const data = require("./data")

let app = express();
app.use(bodyParser.json());

app.get('/api/data', function(req, res, next){
    res.status(200).json({
      statusCode: "ok",
      data: data
    })
  })

  app.post('/api/data', function(req, res, next){
    let people = req.body
    data.push(people)
    res.status(200).send("ok");
  })



app.listen(3000, () => {
    console.log("listening on port 3000")
})