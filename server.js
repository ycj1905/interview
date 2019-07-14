const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
// const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const { MONGO_URL } = require('./secret/index');

require('./models/User'); 

const cors = require('cors')

const port = process.env.PORT || 8080;
mongoose.connect(MONGO_URL, {useNewUrlParser: true});

const app = express();
app.use(cors())
app.use(bodyParser.json());
// app.use(
//   cookieSession({
//     maxAge: 30 * 24 * 60 * 60 * 1000,
//     keys: ['123d4']
//   })
// );
const server = http.createServer(app);

require('./routes/user')(app);

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
