function enter()
{
let borderRed = document.getElementById('r').value;
let borderGreen = document.getElementById('g').value;
let borderBlue = document.getElementById('b').value;

let backRed = document.getElementById('backr').value;
let backGreen = document.getElementById('backg').value;
let backBlue = document.getElementById('backb').value;

let width = document.getElementById('w').value;

temp = document.getElementById(('dummy'));

temp.style.borderColor = "rgb(" + borderRed + "," + borderGreen + "," + borderBlue + ")";
temp.style.backgroundColor = "rgb(" + backRed + "," + backGreen + "," + backBlue + ")";
temp.style.borderWidth = width;


}
