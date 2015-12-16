
//autosearch BGG
var url = window.location.href
var arr = url.split("/");
var result = arr[0] + "//" + arr[2]

window.prompt("Testing",result);