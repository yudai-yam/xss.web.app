document.getElementById("switch-version").onclick = function() {
    const url = window.location.href;
    const filename = url.substring(url.lastIndexOf('/') + 1);
    const mode = url.includes("insecure") ? "secure" : "insecure";
    window.location.href = `../${mode}/${filename}`;
}