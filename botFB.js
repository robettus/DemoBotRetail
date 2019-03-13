'use strict'
 
const FacebookBot = require('botbuilder-facebook');
 
const bot = new FacebookBot({
  pageToken: 'YOUR_FB_PAGE_TOKEN',
  validationToken: 'APP_VERIFICATION_TOKEN'
});
 
bot.add('/', session => {
  session.send('Hello!');
});