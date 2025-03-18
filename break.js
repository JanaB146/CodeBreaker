let zahl1, zahl2, zahl3, zahl4, num1, num2, num3, num4, guessedNum, rightPoint = 0, rightNum = 0;

function codeErstellen() {
    document.getElementById("start").innerText = "Los geht's";
    document.getElementById("anweisung").innerText = "Gib unten eine Nummer zwischen 0000 und 9999 ein.";

    zahl1 = Math.floor(Math.random() * 10);
    zahl2 = Math.floor(Math.random() * 10);
    zahl3 = Math.floor(Math.random() * 10);
    zahl4 = Math.floor(Math.random() * 10);
}

function numberCheck() {
    if (erste == null || zweite == null || dritte == null || vierte == null) {
        return;
    }
    guessedNum = document.getElementById("input").value;
    num1 = myTry.chatAt(0);
    num2= myTry.chatAt(1);
    num3 = myTry.charAt(2);
    num4 = myTry.charAt(3);

    if (num1 === zahl1) {
        document.getElementById("eins").innerText = num1;
        rightPoint++;
    }
    if (num2 === zahl2) {
        document.getElementById("zwei").innerText = num2;
        rightPoint++;
    }
    if (num3 === zahl3) {
        document.getElementById("drei").innerText = num3;
        rightPoint++;
    }
    if (num4 === zahl4) {
        document.getElementById("vier").innerText = num4;
        rightPoint++;
    }
    return false;
}