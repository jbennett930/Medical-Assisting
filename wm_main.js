/*
        Authors: Brenden Riley, Dylan Kelley
        Date: 4.3.19
*/


window.addEventListener("load", setup);

window.onload = setForm;

function setForm() {
        document.forms[0].onsubmit = function () {
                if (this.checkValidity()) alert("Thank you for your feedback");
                return false;
        }
}

function setup() {
        swapPics();
        setInterval("swapPics()", 10000);
        document.getElementById("NWbutton").addEventListener("click", changeContactInfo)
        document.getElementById("NEbutton").addEventListener("click", changeContactInfo)
        document.getElementById("SWbutton").addEventListener("click", changeContactInfo)
        window.onresize = function () {
                document.getElementById("map1").style.display = "none";
                document.getElementById("map2").style.display = "none";
                document.getElementById("map3").style.display = "none";
        }
}

function randomNumber(size) {
        return Math.ceil(Math.random() * size)
}

function swapPics() {
        var randNum = randomNumber(9);
        document.getElementById("aboutImg").setAttribute("src", "pictures/Medphoto" + (randNum) + ".jpg")
        document.getElementById("ctsoImg").setAttribute("src", "pictures/Medphoto" + (randNum + 1) + ".jpg")
        document.getElementById("contactImg").setAttribute("src", "pictures/Medphoto" + (randNum + 2) + ".jpg")
}

function changeContactInfo() {

        var contactInfo = document.getElementById("contactArticle")
        contactInfo.innerHTML = "";
        document.getElementById("map1").style.display = "none";
        document.getElementById("map2").style.display = "none";
        document.getElementById("map3").style.display = "none";
        if (event.target.value == 1) {
                var newContactElement1 = document.createElement("p");
                var newContactElement2 = document.createElement("p");
                var newPhone = document.createElement("p");
                newContactElement1.appendChild(document.createTextNode("13201 W. Grand Avenue"));
                newContactElement2.appendChild(document.createTextNode("Surprise, AZ 85374"));
                newPhone.appendChild(document.createTextNode("623.877.6914"));
                contactInfo.appendChild(newContactElement1);
                contactInfo.appendChild(newContactElement2);
                contactInfo.appendChild(newPhone);
                if (document.documentElement.offsetWidth > 1000) {
                        document.getElementById("map1").style.display = "block";
                }
        } else if (event.target.value == 2) {
                var newContactElement1 = document.createElement("p");
                var newContactElement2 = document.createElement("p");
                var newPhone = document.createElement("p");
                newContactElement1.appendChild(document.createTextNode("1617 W. Williams Dr."));
                newContactElement2.appendChild(document.createTextNode("Phoenix, AZ 85027"));
                newPhone.appendChild(document.createTextNode("623.435.4920"));
                contactInfo.appendChild(newContactElement1);
                contactInfo.appendChild(newContactElement2);
                contactInfo.appendChild(newPhone);
                if (document.documentElement.offsetWidth > 1000) {
                        document.getElementById("map2").style.display = "block";
                }
        } else if (event.target.value == 3) {
                var newContactElement1 = document.createElement("p");
                var newContactElement2 = document.createElement("p");
                var newPhone = document.createElement("p");
                newContactElement1.appendChild(document.createTextNode("500 N. Verrado Way"));
                newContactElement2.appendChild(document.createTextNode("Buckeye, AZ 85326"));
                newPhone.appendChild(document.createTextNode("623.872.6260"));
                contactInfo.appendChild(newContactElement1);
                contactInfo.appendChild(newContactElement2);
                contactInfo.appendChild(newPhone);
                if (document.documentElement.offsetWidth > 1000) {
                        document.getElementById("map3").style.display = "block";
                }
        }
}

var firstNames = ["Issac", "Jospeh", "James", "Matthew", "Trisha", "Alexis", "Michael", "Connor", "Spencer", "Mary"];
var lastNames = ["Jones", "White", "Williams", "Brown", "Davis", "Miller", "Wilson", "Smith", "Johnson", "Anderson"];

document.getElementById("fname").setAttribute("placeholder", firstNames[randomNumber(10) - 1]);
document.getElementById("lname").setAttribute("placeholder", lastNames[randomNumber(10) - 1]);

function wordCountCheck() {
        var feedbackCount = document.getElementById("cFeedback").textLength;
        document.getElementById("feedWordCount").innerText = "" + feedbackCount + "/1000"
}
document.getElementById("cFeedback").onkeydown = wordCountCheck;
document.getElementById("cFeedback").onkeyup = wordCountCheck;

document.getElementById("submit").onclick = validation;

function validation() {
        var fname = document.getElementById("fname");
        if (fname.validity.valueMissing) {
                fname.setCustomValidity("Please enter your first name");
        } else {
                fname.setCustomValidity("");
        }
        var lname = document.getElementById("lname");
        if (lname.validity.valueMissing) {
                lname.setCustomValidity("Please enter your last name")
        } else {
                lname.setCustomValidity("")
        }
        var email = document.getElementById("email");
        if (email.validity.valueMissing) {
                email.setCustomValidity("Please enter your email");
        } else {
                email.setCustomValidity("")
        }
}