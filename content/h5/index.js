function init() {
    setInterval("changeImg()", 3000);
    setInterval("changeImg1()", 3000);
}
var i = 0
var color = ["#9AA5FF", "#9AA5FF", '#079887', '#B2EAF7', '#B7221E', '#661BEA']

function changeImg() {
    i++;
    document.getElementById("img1").src = "../image/wu/" + i + ".jpg";
    document.getElementById("body-t-box2-main").style.backgroundColor = color[i];
    if (i == 5) {
        i = 0;
    }
}