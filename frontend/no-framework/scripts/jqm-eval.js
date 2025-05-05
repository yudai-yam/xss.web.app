var ref = document.location.href.split("?request=")[1];
console.log(ref)
document.getElementById("app").innerHTML = decodeURIComponent(ref);

document.addEventListener("DOMContentLoaded", function() { 
    var expression = document.getElementById("expression").getAttribute("data");
    var parsed = eval(expression);
    document.getElementById("result").innerHTML = '<p>'+parsed+'</p>';
});
