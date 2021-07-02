// Check the browser to make sure it supports service workers
if('serviceWorker' in navigator) {
  navigator.serviceWorker
    // Register the path to the service worker file
    .register('onbase-sw.js')
    .then(function() { console.log("Service Worker Registered"); });
}





function die1() {
  var dice = {
    sides: 10,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }

  // result roll: determine strike or ball
  die1Result = dice.roll();
  console.log('Die 1 result: ' + die1Result);
  
}

function die2() {
  var dice = {
    sides: 10,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }

  // result roll: determine strike or ball
  die2Result = dice.roll();
  console.log('Die 2 result: ' + die2Result);
  
}


$('#roll').on('click', function() {
  // roll all the dice
  die1();
  die2();
  
  // output the results to the dice on the screen
  
  $('.die1 > span').css('display', 'none').text(die1Result).fadeIn();
  $('.die2 > span').css('display', 'none').text(die2Result).fadeIn();
});