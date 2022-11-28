const express = require('express');
const morgan = require('morgan');
const path = require('path');
const session = require("express-session");
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const https = require('https');
const routes = require('./routes');
//const DataRoutes = require("./api/routes");

const key = fs.readFileSync('/etc/letsencrypt/live/inmobitt.tk/privkey.pem');
const cert = fs.readFileSync('/etc/letsencrypt/live/inmobitt.tk/fullchain.pem');
const credentials = {key, cert};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.split('.').pop();
    cb(null, `${Date.now()}.${ext}`);
  },
});

const app = express();

// settings
app.set('port', process.env.PORT || 443);

//middlewares
app.use(multer({ storage }).single('img'));
app.use(cors());
app.use(morgan('short'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    saveUninitialized: true,
    resave: true,
    secret: 'INMOBITT',
  })
);

app.use(routes);

// static files
app.use(express.static(path.join(__dirname, 'public')));
// start the server
https.createServer(credentials, app).listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
