document.getElementById("switch-version").onclick = function() {
    const url = window.location.href;
    const filename = url.substring(url.lastIndexOf('/') + 1);
    const mode = url.includes("insecure") ? "secure" : "insecure";
    if (filename.includes("mxss")) {
        if (mode === "secure") {        
            window.location.href = `../${mode}/mxss.php`;
        } else {
            window.location.href = `../${mode}/mxss.html`;
        }
        return;
    }
    window.location.href = `../${mode}/${filename}`;
}