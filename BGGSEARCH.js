var url = window.location.href;
var arr = url.split("/");
var result = arr[5];
window.prompt("Please enter your name", result);

window.open("https://boardgamegeek.com/geeksearch.php?action=search&objecttype=boardgame&q=test&B1=Go", '_parent');

var delay=4000;

setTimeout(function(){
	
var script = document.createElement('script');
   script.src = 'https://rawgit.com/dazeysan/SPLU/master/Source Code/SPLU-Current.js';
   script.type = 'text/javascript';
   var head = document.getElementsByTagName("head")[0];
   head.appendChild(script);
   
}, delay); 