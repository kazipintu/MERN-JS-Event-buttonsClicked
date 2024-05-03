
/* Method-2 */
function yellowColor() {
  document.body.style.backgroundColor = 'yellow';
}

/* Method-3 */
const makeBlueButton = document.getElementById('make-blue')
makeBlueButton.onclick = makeBlue();

function makeBlue() {
  document.body.style.backgroundColor = 'blue'
}

/* Method-4 */
const makeRedButton = document.getElementById('make-red');
makeRedButton.onclick = makeRed;

function makeRed() {
  //console.log('red button clicked');
  document.body.style.backgroundColor = 'red';
}

console.log(makeRedButton)