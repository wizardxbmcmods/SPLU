function myFunction() {
var url = window.location.href;
var arr = url.split("/");
var result = arr[2];

    var person = prompt("Please enter your name", result );
    
    if (person != null) {
        document.getElementById("demo").innerHTML =
        "Hello " + person + "! How are you today?";
    }
}