/*
        Authors: Brenden Riley, Dylan Kelley
        Date: 4.3.19
*/

window.addEventListener("load", setup);

function setup() {
        swapPics();
        setInterval("swapPics()", 10000);
}

function randomNumber(size) {
        return Math.ceil(Math.random() * size)
}

function swapPics() {
        var randNum = randomNumber(11);
        document.getElementById("aboutImg").setAttribute("src", "pictures/Medphoto" + (randNum) + ".jpg")
        document.getElementById("ctsoImg").setAttribute("src", "pictures/Medphoto" + (randNum + 1) + ".jpg")
        document.getElementById("contactImg").setAttribute("src", "pictures/Medphoto" + (randNum + 2) + ".jpg")
}