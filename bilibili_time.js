var time_elements = document.querySelectorAll('.length');
//如有问题，请访问https://github.com/colommar/Bilibili_Playlist_Search
var totalTime = 0;
var timesArray = []; 

var message = "There is something wrong!!\nplease visit https://github.com/colommar/Bilibili_Playlist_Search!!\n";

time_elements.forEach(function(time) {
    var time_string = time.innerText;
    var time_array = time_string.split(':');
    var hours = 0, minutes = 0, seconds = 0;

    if(time_array.length == 3) {
        hours = parseInt(time_array[0], 10);
        minutes = parseInt(time_array[1], 10);
        seconds = parseInt(time_array[2], 10);
    }
    else if(time_array.length == 2) {
        minutes = parseInt(time_array[0], 10);
        seconds = parseInt(time_array[1], 10);
    }
    else {
        console.log(message);
        return;
    }

    timesArray.push([hours, minutes, seconds]);

    totalTime += hours * 3600 + minutes * 60 + seconds;
});


var total_sum = timesArray.length;

console.log("总共有" + total_sum + "个视频。\n");

var totalHours = Math.floor(totalTime / 3600);
var totalMinutes = Math.floor((totalTime % 3600) / 60);
var totalSeconds = totalTime % 60;
console.log("总时长：" + totalHours + "小时 " + totalMinutes + "分钟 " + totalSeconds + "秒");

var first = 0, last = 12; 
// 从0开始计算下标，计算您想要计算时间的范围。如示例所计算的视频为 1 - 13 集的时长。

if(last > total_sum) {
    console.log("超出视频选集总范围\n");
    console.log(message);
}
var selectedTotalTime = 0;
for(var i = first; i <= last; i++) {
    if(i < timesArray.length) {
        var time = timesArray[i];
        selectedTotalTime += time[0] * 3600 + time[1] * 60 + time[2];
    }
}

var selectedHours = Math.floor(selectedTotalTime / 3600);
var selectedMinutes = Math.floor((selectedTotalTime % 3600) / 60);
var selectedSeconds = selectedTotalTime % 60;
console.log("第" + (first + 1) + "个到第" + (last + 1) + "个视频的总时长：" + selectedHours + "小时 " + selectedMinutes + "分钟 " + selectedSeconds + "秒");