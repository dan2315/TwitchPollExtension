let socket = new WebSocket('wss://192.168.100.4:8080/')

socket.onopen = function (event) {
  console.log('SRABOTALO' + event)
  socket.send('Ку-ку, ёпта!')
}

socket.onmessage = function (event) {
  let message = event.data
  console.log(message)
}

export default socket;