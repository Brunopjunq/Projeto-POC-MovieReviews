import express from 'express';
import cors from 'cors';
import router from './routes/index.js';

const server = express();

server.use(cors());
server.use(express.json());

server.use(router);

server.get('/palpite', (req,res) => {
    res.send('ok')
});


server.listen(4000, () => {
    console.log('Listening on port 4000')
});