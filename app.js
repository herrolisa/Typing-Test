// create textarea element
var textArea = document.querySelector("textarea");

//create start button
var button = document.querySelector("button");
button.addEventListener("click", function () {
  start(callback);
});

//create "finished" event
var finished = new Event("finished");
document.addEventListener("finished", function () {
  alert("You're done!!!!!!!!");
});

var elapsedTime = 0;
//function called when start button clicked
function start(callback) {
  setInterval(function () {
    console.log("setInterval" + ": " + elapsedTime++);
  }, 1000);
  callback(err, wpm);
}


function callback(err, wpm) {
  //do something
}

//add a "keyup" event listener onto the textarea element
textArea.addEventListener("keyup", function (event) {
  if (this.textLength >= 73){
    document.dispatchEvent(finished);
  }
});