var time_elements = document.querySelectorAll('.length');

var ans = 0;

time_elements.forEach(function(time) {
    var time_string = time.innerText;
    var time_array = time_string.split(':');
    var minutes = parseInt(time_array[0], 10);
    var seconds = parseInt(time_array[1], 10);
    ans += minutes * 60 + seconds;
});


var hours = Math.floor(ans / 3600);
var minutes = Math.floor((ans % 3600) / 60);
var seconds = ans % 60;


console.log("总时长：" + hours + "小时 " + minutes + "分钟 " + seconds + "秒");
