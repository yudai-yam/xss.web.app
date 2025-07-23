/*
simple javascript injection in innerHTML vulnerability

example: <img src="x" onerror="alert('XSS')">
*/
document.getElementById("submit").onclick = function(){
    var username = document.getElementById("input").value;
    var clean_username = DOMPurify.sanitize(username)
    document.getElementById("target").innerHTML = clean_username
}