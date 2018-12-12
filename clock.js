
//Saves the current Date and time to the innerHTML prop of the <output> element every second
setInterval(function() {
  document.getElementById('clock').innerHTML = new Date()
}, 1000)
