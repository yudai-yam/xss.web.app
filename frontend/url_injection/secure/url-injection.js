/*
inject commands on url parameters 

example: 
*/

var request = document.location.href.split("?request=")[1];
document.getElementById("app").innerHTML = decodeURIComponent(request);