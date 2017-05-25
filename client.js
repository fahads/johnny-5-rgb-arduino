(function() {
  var socket = io.connect(window.location.hostname + ':' + 3000);
  var body = document.getElementById('body');
  var rgbArray = [];
  
  // Generate RGB color arrays and pass them to hex convertor
  for (var r = 0; r < 256; r += 64) {
    rgbArray[0] = r;
    for (var g = 0; g < 256; g += 64) {
      rgbArray[1] = g;
      for (var b = 0; b < 256; b += 64) {
        rgbArray[2] = b;
        genHexFromRGB(rgbArray);
      }
    }
  }

  // Convert the RGB values to hex and pass to the HTML generator
  function genHexFromRGB(rgbArray) {
    let color = ((1 << 24) + (rgbArray[0] << 16) + (rgbArray[1] << 8) + rgbArray[2]).toString(16).slice(1);
    buildElement(color);
  }

  // Write the divs with the colors
  function buildElement(hexColor) {
    let div = '<div style="background-color:#' + hexColor + ';">#' + hexColor + '</div>';
    body.innerHTML += div;
  }

  // Send the hex values to the server
  function emitColorValue(e) {
    socket.emit('color', {
      value: e.target.innerHTML
    });
  }

  var els = document.getElementsByTagName('div');
  for (let i = 0; i < els.length; i++) {
    // Create listener for every color element
    els[i].addEventListener('click', emitColorValue, false);
  }
}());