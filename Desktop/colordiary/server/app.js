require('dotenv').config();
const fs = require('fs');
const https = require('https');
const express = require('express');
//const path = require('path');
const cookieParser = require('cookie-parser');
const controllers = require('./controllers/index');
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(
  {
    origin: ['https://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
  }
  ) 
);

app.use(cookieParser());
app.get('/', (req,res) => res.send("hello🦋"))
// app.post('/signup', controllers.signup);
// app.post('/login', controllers.login);

// app.get('/user_accesstoken', controllers.user_accesstoken);
// app.get('/user_refreshtoken', controllers.user_refreshtoken);

// app.post('/user_mycolor', controllers.user_mycolor);
// app.get('/user_mycolor', controllers.user_mycolor);
// app.put('/user_mycolor', controllers.user_mycolor);
// app.delete('/user_mycolor', controllers.user_mycolor);

// app.post('/user_logout', controllers.user_logout);
// app.delete('/user_delete', controllers.user_delete);


const HTTPS_PORT = process.env.HTTPS_PORT || 5000;

// 인증서 파일들이 존재하는 경우에만 https 프로토콜을 사용하는 서버를 실행합니다.
// 만약 인증서 파일이 존재하지 않는경우, http 프로토콜을 사용하는 서버를 실행합니다.
// 파일 존재여부를 확인하는 폴더는 서버 폴더의 package.json이 위치한 곳입니다.
let server;
if (fs.existsSync('./key.pem') && fs.existsSync('./cert.pem')) {
  const privateKey = fs.readFileSync(__dirname + '/key.pem', 'utf8');
  const certificate = fs.readFileSync(__dirname + '/cert.pem', 'utf8');
  const credentials = { key: privateKey, cert: certificate };

  server = https.createServer(credentials, app);
  server.listen(HTTPS_PORT, () => console.log('https server runnning'));
} else {
  server = app.listen(HTTPS_PORT, () => {
    console.log('http server runnning😎')
   
  });
}
module.exports = server;
