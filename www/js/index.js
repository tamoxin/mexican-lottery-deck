var cards = [
  {
    name:'El gallo',
    number: '1'
  },
  {
    name: 'El diablito',
    number: '2'
  },
  {
    name: 'La dama',
    number: '3'
  },
  {
    name: 'El catrín',
    number: '4'
  },
  {
    name: 'El paraguas',
    number: '5'
  },
  {
    name: 'La sirena',
    number: '6'
  }, 
  {
    name: 'La escalera',
    number: '7'
  }
];

var interval;
var currentCard;
var state = "stopped";

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


var stop = function() {
  state = "stopped";
  clearInterval(interval);
  document.getElementById('card').src = 'img/cards/01.png.webp';
}

var run = function() {

  if (state == "running") {
    state = "paused";
    clearInterval(interval);
    $("#play_icon").text("play_arrow");
  } else {
    $("#play_icon").text("pause");
    state = "running";
    interval = setInterval(changeCard, 1000);

    function changeCard() {
      var card = Math.floor((Math.random() * 53));;
      if (card < 9)
        document.getElementById('card').src = 'img/cards/0'+(card + 1 )+ '.png.webp';
      else document.getElementById('card').src = 'img/cards/'+(card + 1 )+ '.png.webp';     
    }
  }
      
}

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);

        //initialize jquery methods
        $(document).ready(function(){
            $("#run").on("click", run);
            $("#stop").on("click", stop);
            // $(".button-collapse").sideNav();
            $('.sidenav').sidenav();
        });
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
      if (cordova.platformId == 'android') {
        StatusBar.backgroundColorByHexString("#007ac1");
      }
    
      this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();