import express from 'express';
import cors from 'cors';
import router from './routes/index.js';
var server = express();
server.use(cors());
server.use(express.json());
server.use(router);
server.get('/palpite', function (req, res) {
    res.send('ok');
});
server.listen(4000, function () {
    console.log('Listening on port 4000');
});
