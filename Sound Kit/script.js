function generateBoard() {
  // Generating the divs that make the blocks for the soundboard
  var container = document.getElementById("container");
  for (var i = 0; i < 25; i++) {
    var box = "box";
    container.innerHTML += '<div class="box"><div onclick="play(this)" class="inner-box"</div></div>';
  }

  // Assigning a unique ID to each block
  var id = "block";
  var items = document.getElementsByClassName("inner-box");
  for (i = 0; i < items.length; i++) {
    items[i].id = id + i;
  }
};

function play(element) {
  switch (element.id) {
    case "block0":
      console.log("You just pressed block 0");
      break;
    case "block1":
      console.log("You just pressed block 1");
      break;
    case "block2":
      console.log("You just pressed block 2");
      break;
    case "block3":
      console.log("You just pressed block 3");
      break;
    case "block4":
      console.log("You just pressed block 4");
      break;
    case "block5":
      console.log("You just pressed block 5");
      break;
    case "block6":
      console.log("You just pressed block 6");
      break;
    case "block7":
      console.log("You just pressed block 7");
      break;
    case "block8":
      console.log("You just pressed block 8");
      break;
    case "block9":
      console.log("You just pressed block 9");
      break;
    case "block10":
      console.log("You just pressed block 10");
      break;
    case "block11":
      console.log("You just pressed block 11");
      break;
    case "block12":
      console.log("You just pressed block 12");
      break;
    case "block13":
      console.log("You just pressed block 13");
      break;
    case "block14":
      console.log("You just pressed block 14");
      break;
    case "block15":
      console.log("You just pressed block 15");
      break;
    case "block16":
      console.log("You just pressed block 16");
      break;
    case "block17":
      console.log("You just pressed block 17");
      break;
    case "block18":
      console.log("You just pressed block 18");
      break;
    case "block19":
      console.log("You just pressed block 19");
      break;
    case "block20":
      console.log("You just pressed block 20");
      break;
    case "block21":
      console.log("You just pressed block 21");
      break;
    case "block22":
      console.log("You just pressed block 22");
      break;
    case "block23":
      console.log("You just pressed block 23");
      break;
    case "block24":
      console.log("You just pressed block 24");
      break;
  }
}
