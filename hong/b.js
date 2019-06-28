function init() {
    setInterval("changeImg()", 3000)
}
var i = 0;


function changeImg() {

    i++
    document.getElementById("img1").src = "./img/" + i + ".jpg";
    if (i == 6) {
        i = 0;
    }
}