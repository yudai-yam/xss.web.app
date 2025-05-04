var ref = document.location.href.split("?request=")[1];
console.log(ref)
document.getElementById("app").innerHTML = decodeURIComponent(ref);
