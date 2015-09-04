// function welcome() {
// 	window.location = "omoss.html"
// }


function blink() {
   var f = document.getElementById('dash');
   setInterval(function() {
      f.style.display = (f.style.display == 'none' ? '' : 'none');
   }, 700);
}
