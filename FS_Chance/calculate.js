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
        if (itemT == "armor" && itemL < 5) {
            percentage = 100;
        } else if (itemT == "weapon" && itemL < 7) {
            percentage = 100;
        } else if (itemT == "armor" && (itemG == "white" || itemG == "blue" || itemG == "yellow") && itemL > 4) {
            if (itemL == 5) {
                percentage = 70;
            } else if (itemL == 6) {
                percentage = 25.64;
            } else if (itemL == 7) {
                percentage = 17.24;
            } else if (itemL == 8) {
                percentage = 11.76;
            } else if (itemL == 9) {
                percentage = 7.69;
            } else if (itemL == 10) {
                percentage = 6.25;
            } else if (itemL == 11) {
                percentage = 5;
            } else if (itemL == 12) {
                percentage = 4;
            } else if (itemL == 13) {
                percentage = 2.86;
            } else if (itemL == 14) {
                percentage = 2;
            } else if (itemL == 15) {
                percentage = 11.76;
            } else if (itemL == 16) {
                percentage = 7.69;
            } else if (itemL == 17) {
                percentage = 6.25;
            } else if (itemL == 18) {
                percentage = 2;
            } else if (itemL == 19) {
                percentage = 0.3;
            }
        } else if (itemT == "armor" && itemG == "green" && itemL > 4) {
            if (itemL == 5) {
                percentage = 70;
            } else if (itemL == 6) {
                percentage = 51.28;
            } else if (itemL == 7) {
                percentage = 17.24;
            } else if (itemL == 8) {
                percentage = 11.76;
            } else if (itemL == 9) {
                percentage = 7.69;
            } else if (itemL == 10) {
                percentage = 6.25;
            } else if (itemL == 11) {
                percentage = 5;
            } else if (itemL == 12) {
                percentage = 4;
            } else if (itemL == 13) {
                percentage = 3.75;
            } else if (itemL == 14) {
                percentage = 2;
            } else if (itemL == 15) {
                percentage = 11.76;
            } else if (itemL == 16) {
                percentage = 7.69;
            } else if (itemL == 17) {
                percentage = 6.25;
            } else if (itemL == 18) {
                percentage = 2;
            } else if (itemL == 19) {
                percentage = 0.3;
            }
        } else if (itemT == "weapon" && (itemG == "white" || itemG == "blue" || itemG == "yellow") && itemL > 6) {
            if (itemL == 7) {
                percentage = 70;
            } else if (itemL == 8) {
                percentage = 20.41;
            } else if (itemL == 9) {
                percentage = 14.29;
            } else if (itemL == 10) {
                percentage = 10;
            } else if (itemL == 11) {
                percentage = 6.67;
            } else if (itemL == 12) {
                percentage = 4;
            } else if (itemL == 13) {
                percentage = 2.5;
            } else if (itemL == 14) {
                percentage = 2;
            } else if (itemL == 15) {
                percentage = 11.76;
            } else if (itemL == 16) {
                percentage = 7.69;
            } else if (itemL == 17) {
                percentage = 6.25;
            } else if (itemL == 18) {
                percentage = 2;
            } else if (itemL == 19) {
                percentage = 0.3;
            }
        } else if (itemT == "weapon" && itemG == "green" && itemL > 6) {
            if (itemL == 7) {
                percentage = 70;
            } else if (itemL == 8) {
                percentage = 40.82;
            } else if (itemL == 9) {
                percentage = 14.29;
            } else if (itemL == 10) {
                percentage = 10;
            } else if (itemL == 11) {
                percentage = 6.67;
            } else if (itemL == 12) {
                percentage = 4;
            } else if (itemL == 13) {
                percentage = 3.75;
            } else if (itemL == 14) {
                percentage = 2;
            } else if (itemL == 15) {
                percentage = 11.76;
            } else if (itemL == 16) {
                percentage = 7.69;
            } else if (itemL == 17) {
                percentage = 6.25;
            } else if (itemL == 18) {
                percentage = 2;
            } else if (itemL == 19) {
                percentage = 0.3;
            }
        } else if (itemT == "weapon" && itemG == "orange" && itemL > 6) {
            if (itemL == 7) {
                percentage = 90;
            } else if (itemL == 8) {
                percentage = 20.41;
            } else if (itemL == 9) {
                percentage = 14.29;
            } else if (itemL == 10) {
                percentage = 10;
            } else if (itemL == 11) {
                percentage = 6.67;
            } else if (itemL == 12) {
                percentage = 4;
            } else if (itemL == 13) {
                percentage = 2.5;
            } else if (itemL == 14) {
                percentage = 2;
            } else if (itemL == 15) {
                percentage = 13.08;
            } else if (itemL == 16) {
                percentage = 10.63;
            } else if (itemL == 17) {
                percentage = 3.4;
            } else if (itemL == 18) {
                percentage = 0.51;
            } else if (itemL == 19) {
                percentage = 0.2;
            }
        } else if (itemT == "accessory" && itemG == "green" && itemL > 14) {
            if (itemL == 15) {
                percentage = 30;
            } else if (itemL == 16) {
                percentage = 10;
            } else if (itemL == 17) {
                percentage = 7.5;
            } else if (itemL == 18) {
                percentage = 2.5;
            } else if (itemL == 19) {
                percentage = 0.5;
            }
        } else if (itemT == "accessory" && (itemG == "blue" || itemG == "yellow") && itemL > 14) {
            if (itemL == 15) {
                percentage = 25;
            } else if (itemL == 16) {
                percentage = 10;
            } else if (itemL == 17) {
                percentage = 7.5;
            } else if (itemL == 18) {
                percentage = 2.5;
            } else if (itemL == 19) {
                percentage = 0.5;
            }
        }

        calcChance();
        showPercentage();
    } else {
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
