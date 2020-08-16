window.onload = aktualTime; 
function aktualTime() {
  var d = new Date();
  var H = d.getHours();
  var M = d.getMinutes();
  var S = d.getSeconds();
  if (H < 10) {
    H = "0" + H;
  }
  if (M < 10) {
    M = "0" + M;
  }
  if (S < 10) {
    S = "0" + S;
  }
  document.getElementById('time').innerHTML = H + ":" + M + ":" + S;
  setTimeout(function(){aktualTime()}, 1000);
  var colorBg = "#" + H + M + S;
  document.body.style.backgroundColor = colorBg;
  var colorTxt = "#" + S + S + S;
  document.getElementById('time').style.color = colorTxt;
}
aktualTime();



