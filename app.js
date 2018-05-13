const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Index Route
app.get('/', (req, res) => {
  res.send('INDEX test');
});

app.use(bodyParser.urlencoded({extended: false}));


app.post('/message', (req,res) => {
  console.log(req.body);
  var msgFrom = req.body.From;
  var msgBody = req.body.Body;

  res.send(`
    <Response>
      <Message>
        Hello ${msgFrom}. You said: ${msgBody}
    `)
})


// About Route
app.get('/about', (req,res) => {
  res.send('About stuff here');
})

const port = 5000;

app.listen(port, () =>{
  console.log(`Hey Dawg! Server started on port ${port}`);
});
