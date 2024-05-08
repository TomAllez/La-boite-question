import zmq from 'zeromq'

// Socket to talk to server
const socket = new zmq.Request

socket.connect('tcp://127.0.0.1:5555') // Use the same IP and port as in Python

export function sendCommand(command: string) {
    socket.send(command)
    console.log(socket.receive())
    return socket.receive()
}

