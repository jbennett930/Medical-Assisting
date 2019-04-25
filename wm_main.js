/*
        Authors: Brenden Riley, Dylan Kelley
        Date: 4.3.19
*/

window.addEventListener("load", setup);

function setup() {
        setInterval("swapPics()", 1000);
}

function randomNumber(size) {
        return Math.ceil(Math.random() * size)
}

function swapPics() {
        document.getElementById("aboutImg").setAttribute("src", "pictures/Medphoto" + randomNumber(13) + ".jpg")
        document.getElementById("ctsoImg").setAttribute("src", "pictures/Medphoto" + randomNumber(13) + ".jpg")
        document.getElementById("contactImg").setAttribute("src", "pictures/Medphoto" + randomNumber(13) + ".jpg")
}