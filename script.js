// Initialize Hammer on the body
var hammerLongPress = new Hammer(document.getElementById('gestureBox'));

// Display alert for long press gesture
alert("Long press the box that appears next to increase its size.");

// Unique gesture interaction for long press
hammerLongPress.on("press pressup", function (event) {
  if (event.type === 'press') {
    increaseSize();
  } else {
    restoreSize();
  }
});

function increaseSize() {
  const gestureBox = document.getElementById('gestureBox');
  gestureBox.style.width = '18rem';
  gestureBox.style.height = '18rem';
}

function restoreSize() {
  const gestureBox = document.getElementById('gestureBox');
  gestureBox.style.width = '15rem';
  gestureBox.style.height = '15rem';
}
