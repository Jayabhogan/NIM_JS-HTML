function setidElement1() {
    document.getElementById("img10").innerHTML = "<img width='50' src='Images/P1-Ball.png'/>";
}

function setidElement2() {
    document.getElementById("img9").innerHTML = "<img width='50' src='Images/P1-Ball.png'/>";
}

function setidElement3() {
    document.getElementById("img8").innerHTML = "<img width='50' src='Images/P1-Ball.png'/>";
}

function setidElement4() {
    document.getElementById("img7").innerHTML = "<img width='50' src='Images/P1-Ball.png'/>";
}

function setidElement5() {
    document.getElementById("img6").innerHTML = "<img width='50' src='Images/P1-Ball.png'/>";
}

function setidElement6() {
    document.getElementById("img5").innerHTML = "<img width='50' src='Images/P1-Ball.png'/>";
}

function setidElement7() {
    document.getElementById("img4").innerHTML = "<img width='50' src='Images/P2-Ball.png'/>"
}

function setidElement8() {
    document.getElementById("img3").innerHTML = "<img width='50' src='Images/P2-Ball.png'/>"
}

function setidElement9() {
    document.getElementById("img2").innerHTML = "<img width='50' src='Images/P2-Ball.png'/>"
}

function setidElement10() {
    document.getElementById("img1").innerHTML = "<img width='50' src='Images/P2-Ball.png'/>"
}

function setidElement11() {
    document.getElementById("img11").innerHTML = "<img width='50' src='Images/P2-Ball.png'/>"
}

function setidElement12() {
    document.getElementById("img12").innerHTML = "<img width='50' src='Images/P2-Ball.png'/>"
}

function setidElement14() {
    document.getElementById("b15").disabled = true;
}

function setidElement15() {
    document.getElementById("b14").disabled = true;
}

function setidElement16() {
    document.getElementById("b15").disabled = false;
}

function setidElement17() {
    document.getElementById("b14").disabled = false;
}

var playerName1 = prompt("Veuillez entrer le nom du joueur un", "");
if (playerName1 != null) {
    document.getElementById("welcomeplayer1").innerHTML =
        "Bonjour <b>" + playerName1 + " ! </b><br>Jouez selon l'instruction !";
}
var playerName2 = prompt("Veuillez saisir le nom du deuxième joueur", "");
if (playerName2 != null) {
    document.getElementById("welcomeplayer2").innerHTML =
        "Bonjour <b>" + playerName2 + " ! </b><br>Jouez selon l'instruction !";
}