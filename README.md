## Using an RGB LED in a web application with Johnny Five

### Step 1: connect your RGB LED.

This diagram is for a four pin RGB LED with a **common cathode** (the longest pin on the LED).

The jumper cables correspond to the LED's colors (R - 6, G - 5, B - 3).

<img src="https://cloud.githubusercontent.com/assets/2447940/26462261/aa20e81e-4145-11e7-9644-7115019a7056.png" width="700" />

### Step 2: connect your Arduino to your computer and upload the _Firmata_ firmware, which is used by Johnny-Five to communicate with the board.

1. Open the Arduino IDE
2. Go to File -> Examples -> Firmata
3. Load **StandardFirmata**
4. Upload it to your board

### Step 3: Clone, install, and run the application.

1. `git clone git@github.com:fahads/johnny-5-rgb-arduino.git`
2. `npm install`
3. `node app.js`

### Step 4: Go to `localhost:3000` in your web browser and try it out!

The client is sending the hexadecimal color values to the server using **Socket.io**, and the server is then setting the color and sending it to the Arduino board.