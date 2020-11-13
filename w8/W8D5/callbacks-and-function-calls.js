//Simple Timeout
window.setTimeout(function(){alert("HAMMERTIME")}, 5000);
//Asynchronous

//Timeout Plus Closure
function hammerTime(time) {
    window.setTimeout(function () { alert(`${time} is hammertime!`) }, 5000);
}
hammerTime();