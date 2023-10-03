const venom = require('venom-bot');
const express = require('express')
const app = express()
const port = 80

let client = null

venom.create({
    session: 'session-name' //name of session
  })
  .then((response) => {
    client = response

    start()
  })
  .catch((erro) => {
    console.log(erro);
  });

function start() {
  client.onMessage((message) => {
    if (message.body === 'Hi' && message.isGroupMsg === false) {
      client
        .sendText(message.from, 'Welcome Venom 🕷')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
  });
}

app.get('/', async (req, res) => {
  const response = await client.sendText('55129xxxxxxxx@c.us', 'Welcome Venom 🕷')
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})