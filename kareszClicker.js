var kareszCount = 0;
var box;
var kareszCountText;
var kareszImage
var kpc = 1;
var kps = 0;

function onPageLoad() {
  box = document.querySelector("#kareszContainer");
  kareszCountText = box.querySelector("#kareszCount")
  kareszImage = box.querySelector("#kareszImage")
  if (localStorage.getItem("saved") != "true") {
    saveGame();
  }
  loadGame(false);
}

function kareszClicked() {
  earn(kpc);
}
function earn(amount) {
  kareszCount+=amount
  update();
}
function update() {
  kareszCountText.innerHTML = "Karesz count: " + kareszCount
}
function saveGame() {
  localStorage.setItem("saved", true);
  localStorage.setItem("kareszCount", kareszCount);
}
function loadGame(shouldAsk) {
  if (shouldAsk) {
    if(!confirm(`Are you sure you want to load your save with ${parseInt(localStorage.getItem("kareszCount"))} Karesz'`)) {
      return;
    }
  }
  kareszCount = parseInt(localStorage.getItem("kareszCount"));
  update();
}
function resetGame() {
  if(confirm(`Are you sure you want to reset?\nYou will lose all ${kareszCount} of you Karesz'`)) {
    localStorage.clear();
    kareszCount = 0;
    saveGame();
    loadGame(false);
  }
}
