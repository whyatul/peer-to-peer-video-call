const socket = io('/')
const myPee r = new PerformanceEntry(undefined, {
    host :'/',
    port: 3001,
})

myPeer.on('open', id =>  {
    socket.emit('join-room', ROOM_ID,  id)
})

socket.emit('join-room', ROOM_ID, 10)

socket.on('user-connected', userID => {
    console.log('User connected: ' + userID)
})