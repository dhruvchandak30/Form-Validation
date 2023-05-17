function Checker() {
    let text = document.getElementById("email").value;
    let count = 0;
    for (let i = 0; i < text.length - 3; i++) {
        if (text[i] == '@') {
            count++;
        }
        if (text[i] == '.' && text[i + 1] == 'c' && text[i + 2] == 'o' && text[i + 3] == 'm') {
            count++;
            break;
        }


    }
    if (count == 2) {
        document.getElementById("email").style.borderWidth = "3px";
        document.getElementById("email").style.borderColor = "lightgreen";
        return 1;

    }
    else {
        document.getElementById("email").style.borderColor = "red";
    }
}
function Username() {
    let text = document.getElementById("username").value;
    localStorage.setItem("Username", text);
    document.getElementById("username").style.borderWidth = "3px";
    document.getElementById("username").style.borderColor = "lightgreen";
    return 1;
}

function pass() {
    let p = document.getElementById("password").value;
    valid();

    let a = 0, b = 0, c = 0;
    for (let i = 0; i < p.length; i++) {
        let d = p[i];
        let e = d.charCodeAt();
        if (e > 64 && e < 91) {
            c++;
        }
        if (e > 96 && e < 123) {
            a++;
        }
        if (p[i] == 0 || p[i] == 1 || p[i] == 2 || p[i] == 3 || p[i] == 4 || p[i] == 5 || p[i] == 6 || p[i] == 7 || p[i] == 8 || p[i] == 9) {
            b++;
        }
    }
    if (a > 0 && b > 0 && c > 0) {
        document.getElementById("password").style.borderWidth = "3px";
        document.getElementById("password").style.borderColor = "lightgreen";
        return 1;
    }
    else {
        document.getElementById("password").style.borderColor = "red";
    }
}

function valid() {
    let u = document.getElementById("password").value;
    let g = document.getElementById("Valid").value;
    if (u == g) {
        document.getElementById("Valid").style.borderWidth = "3px";
        document.getElementById("Valid").style.borderColor = "lightgreen";
    }
    else {
        document.getElementById("Valid").style.borderColor = "red";
    }
    return 1;
}
function Generate() {
    //For number
    let str = "";
    for (let i = 1; i < 5; i++) {
        let x = (Math.floor((Math.random() * 10) + 1)) % 5;
        switch (i) {
            case 1: str = str + Math.floor((Math.random() * 10) + 1);
                break;
            case 2://Small
                let c = (Math.floor(Math.random() * 100) % 26 + 97);
                str = str + String.fromCharCode(c);
                break;
            case 3://Capital
                let d = (Math.floor(Math.random() * 100) % 26 + 65);
                str = str + String.fromCharCode(d);
                break;
            case 4://Symbol
                let q = (Math.floor((Math.random() * 10) + 1)) % 6;
                if (q == 1) {
                    str = str + "!";
                }
                if (q == 2) {
                    str = str + "@";
                }
                if (q == 3) {
                    str = str + "#";
                }
                if (q == 4) {
                    str = str + "$";
                }
                if (q == 5) {
                    str = str + "%";
                }
                if (q == 6) {
                    str = str + "&";
                }
                break;
        }
    }
    document.getElementById("generate").innerHTML = str;
    var text = str;
    navigator.clipboard.writeText(text).then(function () {
        console.log('Async: Copying to clipboard was successful!');
    }, function (err) {
        console.error('Async: Could not copy text: ', err);
    });

    document.getElementById("Clipboard").style.display = "block";
}


function welcome() {
    let us = localStorage.getItem("Username");
    document.getElementById("Welcome").innerHTML = `Welcome ${us} `;
}

function Submit() {

    let output = Username()
    output += Checker();
    output += pass();
    output += valid();

    if (output >= 4) {
        console.log("Valid Registration");
        window.open("/Successful.html", '_self');
    }

}

