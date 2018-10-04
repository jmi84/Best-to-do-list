// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
   if (confirm("Are you sure?")) {
      var div = this.parentElement;
    div.style.display = "none";
    } else {
   // Do nothing!
    }
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
 ev.target.classList.toggle('checked');
 if (ev.target.classList === 'checked') {
var confetti = [];
function setup(){
    createCanvas(window.innerWidth, window.innerHeight);

    rectMode(RADIUS);

    colorMode(HSB);

    for(var i = 0; i < 100; i++){
      confetti.push(new Confetti());
    }
}

function draw(){
  background(color(255));

  for(var i = 0; i < confetti.length; i++){
    confetti[i].move();
    confetti[i].display();
  }

}

function Confetti(){
  this.size = random(5);
  this.color = color(random(255),255,255);
  this.speed = 250;


  this.x = -random(width);
  this.y = -random(height);

  this.move = function(){
     this.x += this.size;
     this.y += this.size;

  }

  this.display = function(){
    fill(this.color);
    rect(this.x,this.y,this.size,this.size);

  }
}
}
}
}, false);


// Create a new list item when clicking on the "Add It!" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Please enter a task first!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}


// Animation for "Add It!"" button. See: https://codepen.io/nourabusoud/pen/ypZzMM
var animateButton = function(e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');

  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}
