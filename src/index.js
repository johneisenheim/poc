import socketIO from 'socket.io'
import http from 'http'
import express from 'express'


let app = express();
let server = http.Server(app);
let port = process.env.PORT || 4000;
let io = new socketIO(server)

io.on('connection', (socket) => {
    // io.emit('userJoin', {nick: currentUser.nick});
    // socket.on('ding', () => {
    //     socket.emit('dong');
    // });
})


server.listen(port, () => {
    console.log('[INFO] Listening on *:' + port);
});