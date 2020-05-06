
function myFunction() {
    var w = window.innerWidth;
var h = window.innerHeight;
  if(w<768){
    $('#video-holder').html('<img src=./content/images/head-bckg-mobile.jpg>');

  }if(w>768){
    $('#video-holder').html('<video autoplay muted loop id="myVideo">\
    <source src="./content/images/head-back-desktop.mp4" type="video/mp4">\
    Your browser does not support HTML5 video.\
  </video>');

  }
  }
  
  var x = [window.matchMedia("(max-width: 400px)"),window.matchMedia("(max-width: 768px)"),window.matchMedia("(max-width: 400px)")]
   // Call listener function at run time
  window.addEventListener('resize',myFunction);

  