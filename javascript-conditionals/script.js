//let age = 11;
//
//if (age >= 18) {
//    alert("You are an adult!");
//} else if (age >= 13) {
//    alert("You are a teenager :|");
//} else {
//    alert("You are a child :(");
//}

//let score = 97;
//
//if (score >= 90) {
//    alert("You got an A!!!!");
//} else if (score >= 80) {
//    alert("You got a B.");
//} else if (score >= 70) {
//    alert("You got a C. :|");
//} else {
//    alert("You need to study more. :(");
//}

//let temp = 75;
//let condition = "cloudy";
//
//if (temp >= 70 && condition == "sunny") {
//    alert("Wear a t-shirt.");
//} else if (temp >= 40 && (condition == "rainy" || condition == "stormy")) {
//    alert("Wear a raincoat.");
//} else if (temp <= 30 || condition == "snowy") {
//    alert("Wear a winter coat.");
//} else if (30 < temp && temp < 50) {
//    alert("Wear a coat.");
//} else if (50 <= temp && temp < 70) {
//    alert("Wear a hoodie");
//} else {
//    alert("uhhhhh idk");
//}
const myusername = "samgee";
const mypassword = "password";

function check() {
    if (document.getElementById("username").value == myusername) {
        if (document.getElementById("password").value == mypassword) {
            document.getElementById("usermessage").innerHTML = "Login accepted!";
            document.getElementById("usermessage").style.color = "green";
        } else {
            document.getElementById("usermessage").innerHTML = "Username correct, password incorrect";
            document.getElementById("usermessage").style.color = "red";
        }
    } else if (document.getElementById("password").value == mypassword) {
        document.getElementById("usermessage").innerHTML = "Password correct, username incorrect";
        document.getElementById("usermessage").style.color = "red";
    } else {
        document.getElementById("usermessage").innerHTML = "Username incorrect and password incorrect";
        document.getElementById("usermessage").style.color = "red";
    }
}
