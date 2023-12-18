document.getElementById('textInput').addEventListener('input', function() {
  var text = this.value;
  document.getElementById('displayText').innerText = text;
});

document.getElementById('fontSelect').addEventListener('change', function() {
  var font = this.value;
  document.getElementById('displayText').style.fontFamily = font;
});
