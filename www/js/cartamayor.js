var state;
var interval;

var stop = function() {
    state = "stopped";
    clearInterval(interval);
    $("#stop_icon").text("play_arrow");
    $("#stop").removeClass("pulse");
  }

var run = function() {

    state = "running";
    $("#stop_icon").text("stop");
    $("#stop").addClass("pulse");
    interval = setInterval(changeCard, 80);

    function changeCard() {

        var card = Math.floor((Math.random() * 53));;
        if (card < 9)
            document.getElementById('card').src = 'img/cards/0'+(card + 1 )+ '.png.webp';
        else document.getElementById('card').src = 'img/cards/'+(card + 1 )+ '.png.webp';     
    }
}

var checkState = function() {
    if (state == "running")
        $(stop);
    else $(run);
}

$(document).ready(function(){
    $(run);
    $("#stop").on("click", checkState);
    $('.sidenav').sidenav();
});