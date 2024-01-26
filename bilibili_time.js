var time_elements = document.querySelectorAll('.length');

var ans = 0;

var message = "There is things wrong!!\nplease vist https://github.com/colommar/Bilibili_Playlist_Search!!\n";

time_elements.forEach(function(time) {
    var time_string = time.innerText;
    var time_array = time_string.split(':');
    if(time_array.length == 3) {
        var hours = parseInt(time_array[0],10);
        var minutes = parseInt(time_array[1], 10);
        var seconds = parseInt(time_array[2], 10);
        ans += hours * 60 * 60 + minutes * 60 + seconds;
    }
    else if(time_array.length == 2) {
        var minutes = parseInt(time_array[0], 10);
        var seconds = parseInt(time_array[1], 10);
        ans += minutes * 60 + seconds;
    }
    else {
        console.log(message);
    }
});

var hours = Math.floor(ans / 3600);
var minutes = Math.floor((ans % 3600) / 60);
var seconds = ans % 60;


console.log("总时长：" + hours + "小时 " + minutes + "分钟 " + seconds + "秒");
