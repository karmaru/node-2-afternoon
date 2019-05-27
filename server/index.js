const express = require('express')
const mc = require('./controllers/messages_controller.js')
const app = express()
const port = 3001

app.use(express.json()) //top level middleware.  Invoked on every request that comes in
app.use(express.static('/Users/toddhipps/devMountain/node-2-afternoon' + '/public/build'))

const messagesBaseUrl = "/api/messages";
app.post(messagesBaseUrl, mc.create);
app.get(messagesBaseUrl, mc.read);
app.put(`${messagesBaseUrl}/:id`, mc.update);
app.delete(`${messagesBaseUrl}/:id`, mc.delete);


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})