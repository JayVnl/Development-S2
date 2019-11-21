var itemT;
var itemG;
var itemL;
var itemF;
var percentage;

function itemType(element) {
    itemT = element.getAttribute('name');
    var types = document.getElementsByClassName('user-selected-type');

    while (types.length > 0) {
        types[0].classList.remove('user-selected-type');
        console.log('item types cleared')
    };
    element.classList.add('user-selected-type');
    document.getElementById('item-type').innerHTML = "item type: " + itemT;
    console.log('clicked type selected');
};

function itemGrade(element) {
    itemG = element.getAttribute('name');
    var grades = document.getElementsByClassName('user-selected-grade');

    while (grades.length > 0) {
        grades[0].classList.remove('user-selected-grade');
        console.log('item grades cleared')
    };
    element.classList.add('user-selected-grade');
    document.getElementById('item-grade').innerHTML = "item grade: " + itemG;
    console.log('clicked grade selected');
};

function itemLevel(element) {
    itemL = element.getAttribute('name');
    var level = document.getElementsByClassName('user-selected-level');

    while (level.length > 0) {
        level[0].classList.remove('user-selected-level');
        console.log('item level cleared');
    };
    element.classList.add('user-selected-level');
    if (itemL > 15) {
        if (itemL == 16) {
            document.getElementById('item-level').innerHTML = "item level: pri";
        } else if (itemL == 17) {
            document.getElementById('item-level').innerHTML = "item level: duo";
        } else if (itemL == 18) {
            document.getElementById('item-level').innerHTML = "item level: tri";
        } else if (itemL == 19) {
            document.getElementById('item-level').innerHTML = "item level: tet";
        }
    } else {
        document.getElementById('item-level').innerHTML = "item level: +" + itemL;
    }
    console.log('clicked level selected');
};

function failstacks(element) {
    itemF = element.value;
    document.getElementById('failstacks').innerHTML = "failstacks: " + itemF;
};

function calc() {
    if (itemT != undefined && itemG != undefined && itemL != undefined && itemF != undefined) {
        percentage = 0;
    if (itemT == "armor" && itemL < 6) {
        percentage = 90;
    } else if (itemT == "weapon" && itemL < 8) {
        percentage = 100;
    } else if (ItemT == "weapon") {

    }

    calcChance();
    showPercentage();
    }
    else {
        alert("Please fill in all the fields");
    }
}

function showPercentage() {
    document.getElementById('myBar').style.width = percentage + "%";
    document.getElementById('percentage').innerHTML = percentage + "%";
}

function calcChance() {
    if (percentage != 100) {
        percentage = percentage + itemF * 0.5;
    }
}
