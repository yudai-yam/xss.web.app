/*
simple javascript injection in innerHTML vulnerability

example: <img src="x" onerror="alert('XSS')">
*/
document.getElementById("submit").onclick = function(){
    var username = document.getElementById("input").value;
    document.getElementById("target").innerHTML = username
}

