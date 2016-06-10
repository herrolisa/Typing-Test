// create textarea element
var textArea = document.querySelector("textarea");

//create start button
var button = document.querySelector("button");
button.addEventListener("click", function () {
  start(callback);
});

//create "finished" event
var finished = new Event("finished");

//function called when start button clicked
function start(callback) {
  //calculate how much time passed
  var elapsedTime = 0;
  var timer = setInterval(function () {
    console.log("setInterval" + ": " + elapsedTime++);
  }, 1000);

  //listen for "finished" event on document
  document.addEventListener("finished", function () {
    clearInterval(timer); //stop timer
    console.log(elapsedTime);
    var wpm = Math.round(14/(elapsedTime/60));
    callback(null, wpm);
  });

  //add a "keyup" event listener onto the textarea element
  textArea.addEventListener("keyup", function (event) {
    if (this.textLength >= 73){
      document.dispatchEvent(finished);
    }
  });
}

//callback function
function callback(err, wpm) {
  if (err){
    throw new TypeError("Does not compute...");
  }
  alert("Great job! You can type " + wpm + " words per minute!");
}