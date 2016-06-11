//call body element
var body = document.querySelector("body");

//create start button
var button = document.createElement("button");
button.innerHTML = "Ready. Set. Start!";
button.addEventListener("click", function () {
  start(callback);
});
body.appendChild(button);

//create "finished" event
var finished = new Event("finished");

//function called when start button clicked
function start(callback) {
  // create elements that will appear when button clicked
  var div = document.createElement("div");
  var pTag = document.createElement("p");
  pTag.id = "type-this";
  pTag.innerHTML = "You should type this into the box below after you press the start button.";
  var textArea = document.createElement("textarea");
  textArea.setAttribute("cols", "75");
  div.appendChild(pTag);
  body.appendChild(div);
  body.appendChild(textArea);

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
    if (this.value === pTag.innerHTML){
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