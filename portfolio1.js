

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('date').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
return i;}




$(document).ready(function(

   // jQuery methods go here...


$(window).scroll(function(){if($(this).scrollTop()>200){$('#scrollTopBtn').stop().fadeIn()}else{$('#scrollTopBtn').stop().fadeOut()}});$('#scrollTopBtn').click(function(){$('html, body').animate({scrollTop:0},600);return!1});
