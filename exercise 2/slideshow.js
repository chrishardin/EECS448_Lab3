count = 0;
function prev(){
count--;
if(count == 0)
  count = 5;
var img = document.getElementById(('img'));
img.src = "img/image" + count + ".png"
};

function next(){
count++;
if(count == 6)
  count = 1;
var img = document.getElementById(('img'));
img.src = "img/image" + count + ".png"
};
