function init() {
    //设置定时器 定时更换图片和背景颜色
    setInterval("changeImg()", 3000);
    // setInterval("changeImg1()", 3000);
    setInterval("changediv()", 3000);
}
var i = 0;
var j = 0;
var color = ["#9AA5FF", "#9AA5FF", '#079887', '#B2EAF7', '#B7221E', '#661BEA']

// 轮播图
function changeImg() {
    i++;
    //获取相应id所对应的元素
    document.getElementById("img1").src = "../image/wu/" + i + ".jpg";
    document.getElementById("body-t-box2-main").style.backgroundColor = color[i];
    if (i == 5) {
        i = 0;
    }
}


// 倒计时方法
function init1(year, month, day, hour, minute, second) {
    var leftTime = (new Date(year, month - 1, day, hour, minute, second)) - (new Date()); //计算剩余的毫秒数 
    var days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10); //计算剩余的天数 
    var hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10); //计算剩余的小时 
    var minutes = parseInt(leftTime / 1000 / 60 % 60, 10); //计算剩余的分钟 
    var seconds = parseInt(leftTime / 1000 % 60, 10); //计算剩余的秒数 
    days = checkTime(days);
    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    setInterval("init1(2019,11,11,20,00,00)", 1000);
    document.getElementById("timer").innerHTML = hours + ":" + minutes + ":" + seconds;
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}


// 改变div
function changediv() {
    j++;
    if (j % 2 == 0) {
        document.getElementById("qiehuan-div1").style.display = 'none';
        document.getElementById("qiehuan-div2").style.display = 'block';
    } else {
        document.getElementById("qiehuan-div2").style.display = 'none';
        document.getElementById("qiehuan-div1").style.display = 'block';
    }
}