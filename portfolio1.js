

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





   // jQuery methods go here...

$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 200) {
        $('#scrollTopBtn').fadeIn();
    } else {
        $('#scrollTopBtn').fadeOut();
    }
});
$(document).ready(function() {
    $("#scrollTopBtn").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});

$(document).ready(function(){
  var owl = $('.owl-carousel');
owl.owlCarousel({
    items:3,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true
	
	
	
});
});