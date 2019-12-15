function generateBoard() {
  // Generating the divs that make the blocks for the soundboard
  var container = document.getElementById("container");
  for (var i = 0; i < 25; i++) {
    var box = "box";
    container.innerHTML += '<div class="box"><div class="inner-box"</div></div>';
  }

  // Assigning a unique ID to each block
  var id = "block";
  var items = document.getElementsByClassName("inner-box");
  for (i = 0; i < items.length; i++) {
    items[i].id = id + i;
  }
};
