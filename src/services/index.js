import { log } from 'winston';

const changeBackgroundColor = () =>{
    log('I\'m trying to change background color...')
}

const onConnection = (socket) => {
    log('Connected', socket)
    socket.on('changebgcolor', changeBackgroundColor )
}

const initializeServices = (io) => {
    io.on('connection', onConnection)
}

export {
    initializeServices
}