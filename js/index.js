
/* Method-2 */
function yellowColor() {
  document.body.style.backgroundColor = 'yellow';
}



/* Method-3 */
const makeBlueButton = document.getElementById('make-blue')
makeBlueButton.onclick = makeBlue(); // on page loading by default blue.

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
//console.log(makeRedButton)



/* Method-5 */
const makeSkyBlueButton = document.getElementById('make-skyBlue');
makeSkyBlueButton.onclick = function () {
  document.body.style.backgroundColor = 'skyBlue';
}



/* Method-6 */
const grayButton = document.getElementById('make-gray');
//console.log(gray);
grayButton.addEventListener('click', function(){
  document.body.style.backgroundColor = 'gray';
})



/* Method-7 */
document.getElementById ('make-black').addEventListener('click', function(){
  //console.log('function clicked');
  document.body.style.backgroundColor = 'black';
})