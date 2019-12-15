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

// Play sound according to what block is clicked on
function play(element) {
  switch (element.id) {
    case "block0":
      element.classList.add('animation');
      setTimeout(removeAnimation, 500);
      var audio = new Audio('sounds/drum-kicks.wav');
      audio.play();
      break;
    case "block1":
      element.classList.add('animation');
      setTimeout(removeAnimation, 500);
      var audio = new Audio('sounds/snare-drum.wav');
      audio.play();
      break;
    case "block2":
      element.classList.add('animation');
      setTimeout(removeAnimation, 500);
      var audio = new Audio('sounds/drum-sticks.wav');
      audio.play();
      break;
    case "block3":
      element.classList.add('animation');
      setTimeout(removeAnimation, 500);
      var audio = new Audio('sounds/drum-3.wav');
      audio.play();
      break;
    case "block4":
      element.classList.add('animation');
      setTimeout(removeAnimation, 500);
      var audio = new Audio('sounds/bass-drum.wav');
      audio.play();
      break;
    case "block5":
      element.classList.add('animation');
      setTimeout(removeAnimation, 500);
      var audio = new Audio('sounds/peep.wav');
      audio.play();
      break;
    case "block6":
      element.classList.add('animation');
      setTimeout(removeAnimation, 500);
      var audio = new Audio('sounds/claves-4.wav');
      audio.play();
      break;
    case "block7":
      element.classList.add('animation');
      setTimeout(removeAnimation, 500);
      var audio = new Audio('sounds/blip.wav');
      audio.play();
      break;
    case "block8":
      element.classList.add('animation');
      setTimeout(removeAnimation, 500);
      var audio = new Audio('sounds/tick.wav');
      audio.play();
      break;
    case "block9":
      element.classList.add('animation');
      setTimeout(removeAnimation, 500);
      var audio = new Audio('sounds/rim.wav');
      audio.play();
      break;
    case "block10":
      element.classList.add('animation');
      setTimeout(removeAnimation, 500);
      var audio = new Audio('sounds/beep-2.wav');
      audio.play();
      break;
    case "block11":
      element.classList.add('animation');
      setTimeout(removeAnimation, 500);
      var audio = new Audio('sounds/bass-1.wav');
      audio.play();
      break;
    case "block12":
      element.classList.add('animation');
      setTimeout(removeAnimation, 500);
      var audio = new Audio('sounds/drums-1.wav');
      audio.play();
      break;
    case "block13":
      element.classList.add('animation');
      setTimeout(removeAnimation, 500);
      var audio = new Audio('sounds/metal-1.wav');
      audio.play();
      break;
    case "block14":
      element.classList.add('animation');
      setTimeout(removeAnimation, 500);
      var audio = new Audio('sounds/beep-3.wav');
      audio.play();
      break;
    case "block15":
      element.classList.add('animation');
      setTimeout(removeAnimation, 500);
      var audio = new Audio('sounds/random-1.wav');
      audio.play();
      break;
    case "block16":
      element.classList.add('animation');
      setTimeout(removeAnimation, 500);
      var audio = new Audio('sounds/snare-1.wav');
      audio.play();
      break;
    case "block17":
      element.classList.add('animation');
      setTimeout(removeAnimation, 500);
      var audio = new Audio('sounds/kick-low.wav');
      audio.play();
      break;
    case "block18":
      element.classList.add('animation');
      setTimeout(removeAnimation, 500);
      var audio = new Audio('sounds/snare-w.wav');
      audio.play();
      break;
    case "block19":
      element.classList.add('animation');
      setTimeout(removeAnimation, 500);
      var audio = new Audio('sounds/kick-chip.wav');
      audio.play();
      break;
    case "block20":
      element.classList.add('animation');
      setTimeout(removeAnimation, 500);
      var audio = new Audio('sounds/blip-4.wav');
      audio.play();
      break;
    case "block21":
      element.classList.add('animation');
      setTimeout(removeAnimation, 500);
      var audio = new Audio('sounds/wow.mp3');
      audio.play();
      break;
    case "block22":
      element.classList.add('animation');
      setTimeout(removeAnimation, 500);
      var audio = new Audio('sounds/scratch.wav');
      audio.play();
      break;
    case "block23":
      element.classList.add('animation');
      setTimeout(removeAnimation, 500);
      var audio = new Audio('sounds/warning.wav');
      audio.play();
      break;
    case "block24":
      element.classList.add('animation');
      setTimeout(removeAnimation, 500);
      var audio = new Audio('sounds/slash.wav');
      audio.play();
      break;
  }
}

document.onkeyup = function(e) {
  var e = e || window.event;
  if (e.which == 81) {
    var id = document.getElementById('block0');
    var audio = new Audio('sounds/drum-kicks.wav');
    audio.play();
    id.classList.add('animation');
    setTimeout(removeAnimation, 500);
  } else if (e.which == 87) {
    var id = document.getElementById('block1');
    var audio = new Audio('sounds/snare-drum.wav');
    audio.play();
    id.classList.add('animation');
    setTimeout(removeAnimation, 500);
  }
}

function removeAnimation() {
  var blocks = ["block0", "block1", "block2", "block3", "block4", "block5", "block6", "block7", "block8", "block9", "block10", "block11", "block12", "block13", "block14", "block15", "block16", "block17", "block18", "block19", "block20", "block21", "block22", "block23", "block24"]
  for (i = 0; i < blocks.length; i++) {
    document.getElementById(blocks[i]).classList.remove('animation');
  }
}
