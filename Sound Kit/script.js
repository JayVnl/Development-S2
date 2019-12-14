function generateBoard() {
  var container = document.getElementById("container");
  var amount = 1;
  for (var i = 0; i < 25; i++) {
    var box = "box";
    container.innerHTML += '<div class="box"><div class="inner-box"</div></div>';
    amount++;
  }
};
