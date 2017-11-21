import io from 'socket.io'
import http from 'http'
import express from 'express'


let app = express();
let server = http.Server(app);
let port = process.env.PORT || 4000;


server.listen(port, () => {
    console.log('[INFO] Listening on *:' + port);
});