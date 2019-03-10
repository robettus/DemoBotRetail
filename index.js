'use strict';
 
const server     = require('express')();
const bodyParser = require('body-parser');
 
const bot = require('./bot');
 
server.use(bodyParser.json());
 
server.get('/', (req, res) => {
  bot.botService.validate(req.query, function(err, challenge) {
    if (err) {
      console.error(err);
      res.send('Error, validation failed');
      return;
    }
    console.log('validation successful');
    res.send(200, challenge);
  });
});
 
server.post('/', (req, res) => {
  bot.botService.receive(req.body);
  res.sendStatus(200);
});
 
server.listen(5000, function() {
  console.log(`Bot server listening on port 5000`);
});
 

var msg = new builder.Message()
.addAttachment({
  contentUrl: "http://www.theoldrobots.com/images62/Bender-18.JPG",
  contentType: "image/jpeg"
});
return session.send(msg);