var ref = document.location.href.split("?request=")[1];
console.log("Raw URL:", document.location.href);
console.log("Extracted payload:", ref);
console.log("Decoded payload:", decodeURIComponent(ref));
document.getElementById("app").innerHTML = decodeURIComponent(ref);