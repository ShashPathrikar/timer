var ip = document.getElementById("input");
let valueEntered = false;
let isRunning = false;
var timer = null;
function enter() {
  ip = document.getElementById("input");
  if (ip.value == "") {
    alert("enter some value");
  } else {
    document.getElementById("OutputField").innerHTML = "";
    let IHTML =
      "<span id = 'sec' onclick='repeat()'>" + ip.value + "</span>sec";
    document.getElementById("start").style.backgroundColor = "#E2F1E7";
    document.getElementById("start").style.color = "#243642";
    document.getElementById("OutputField").innerHTML = IHTML;
    valueEntered = true;
  }
}

function start() {
  if (valueEntered != true || isRunning != false) {
  } else if (valueEntered == true && isRunning == false) {
    document.getElementById("reset").style.backgroundColor = "#E2F1E7";
    document.getElementById("reset").style.color = "#243642";
    timer = setInterval(() => {
      if (ip.value >= 0) {
        document.getElementById("sec").innerHTML = ip.value;
        ip.value = ip.value - 1;
      }
      document.getElementById("start").style.backgroundColor = "#243642";
      document.getElementById("start").style.color = "#629584";
      isRunning = true;
      valueEntered = true;
    }, 1000);

    isRunning = false;
  }
}
function reset() {
  if (valueEntered === true && isRunning === true) {
    document.getElementById("reset").style.backgroundColor = "#243642";
    document.getElementById("reset").style.color = "#629584";
    document.getElementById("start").style.backgroundColor = "#243642";
    document.getElementById("start").style.color = "#629584";
    document.getElementById("sec").innerHTML = "00";
    clearInterval(timer);
    isRunning = false;
    valueEntered = false;
  }
}

function repeat() {
  valueEntered = true;
  isRunning = true;
  reset();
  let rHTML =
    "<div id='InputJar'><input type='number' id='input'>sec<button id='enter'onclick='enter()'>enter</button></div>";
  document.getElementById("OutputField").innerHTML = rHTML;
  document.getElementById("reset").style.backgroundColor = "#243642";
  document.getElementById("reset").style.color = "#629584";
}
