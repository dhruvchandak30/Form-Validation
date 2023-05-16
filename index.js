
let check=0;
function Checker() {
    let text = document.getElementById("email").value;
    console.log(text);
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
        console.log("Email Is Correct");
        console.log(count);
        document.getElementById("email").style.borderWidth = "3px";
        document.getElementById("email").style.borderColor = "lightgreen";
        check++;

    }
    else {
        console.log("Email Is Inorrect");
        console.log(count);
        document.getElementById("email").style.borderColor = "red";
    }
}
function Username() {
    document.getElementById("username").style.borderWidth = "3px";
    document.getElementById("username").style.borderColor = "lightgreen";
    check++;
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
        console.log("Password Is Correct");
        document.getElementById("password").style.borderWidth = "3px";
        document.getElementById("password").style.borderColor = "lightgreen";
        check++;
    }
    else {
        console.log("Password Is Inorrect");
        document.getElementById("password").style.borderColor = "red";
    }
}

function valid() {
    let u = document.getElementById("password").value;
    let g = document.getElementById("Valid").value;
    if (u == g) {
        console.log("Valid");
        document.getElementById("Valid").style.borderWidth = "3px";
        document.getElementById("Valid").style.borderColor = "lightgreen";
        check++;
    }
    else {
        console.log("Invalid");
        document.getElementById("Valid").style.borderColor = "red";
    }
}
function Submit(){
console.log(check);
if (check>=4) {
    console.log("Valid Registration");
    
}


}