const five = require('johnny-five');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const board = new five.Board();

// Default to port 3000 if env variable not set
const port = process.env.PORT || 3000;
server.listen(port);
console.log(`Server listening on port ${port}`);

// Basic express server init
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

board.on('ready', () => {
  // Initialize the RGB LED
  var led = new five.Led.RGB({
    pins: { red: 6, green: 5, blue: 3}
  });

  io.on('connection', (socket) => {
    socket.on('color', (data) => {
      // Set the LED's color
      led.color(data.value);
    });
    // Turn on the LED
    led.on();
  });
});