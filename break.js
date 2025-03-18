let zahl1, zahl2, zahl3, zahl4, num1, num2, num3, num4, guessedNum, rightPoint = 0, rightNum = 0;

function codeErstellen() {
    document.getElementById("start").innerText = "Los geht's";
    document.getElementById("anweisung").innerText = "Gib unten eine Nummer zwischen 0000 und 9999 ein.";

    zahl1 = Math.floor(Math.random() * 9);
    zahl2 = Math.floor(Math.random() * 9);
    zahl3 = Math.floor(Math.random() * 9);
    zahl4 = Math.floor(Math.random() * 9);
}

function numberCheck() {
    if (zahl1 == null || zahl2 == null || zahl3 == null || zahl4 == null) {
        return;
    }
    while (rightPoint < 4) {
        guessedNum = document.getElementById("input").value;
        if (guessedNum.length !== 4) {
            document.getElementById("try").innerText = "Bitte gib einen vierstelligen Code ein.";
        }
        num1 = guessedNum.charAt(0);
        num2= guessedNum.charAt(1);
        num3 = guessedNum.charAt(2);
        num4 = guessedNum.charAt(3);

        if (num1 == zahl1) {
            document.getElementById("eins").innerText = num1;
            rightPoint = rightPoint + 1;
        } 
        if (num2 == zahl2) {
            document.getElementById("zwei").innerText = num2;
            rightPoint = rightPoint + 1;
        } 
        if (num3 == zahl3) {
            document.getElementById("drei").innerText = num3;
            rightPoint = rightPoint + 1;
        } 
        if (num4 == zahl4) {
            document.getElementById("vier").innerText = num4;
            rightPoint = rightPoint + 1;
        }
        
        if (rightPoint == 0) {
            document.getElementById("result").innerText = "Zerroo";
        }
        if (rightPoint == 1) {
            document.getElementById("result").innerText = "Erste Zahl";
        }
        if (rightPoint == 2) {
            document.getElementById("result").innerText = "Zweite Zahl";
        }
        if (rightPoint == 3) {
            document.getElementById("result").innerText = "Dritte Zahl";
        }
        if (rightPoint == 4) {
            document.getElementById("result").innerText = "Herzlichen Glückwunsch, du hast den Code geknackt!";
        }
        rightPoint = 0;
        return false;
    }

}