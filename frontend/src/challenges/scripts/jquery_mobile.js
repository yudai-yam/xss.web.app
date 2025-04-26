var ref = document.location.href.split("?request=")[1];
document.getElementById("app").innerHTML = decodeURIComponent(ref);