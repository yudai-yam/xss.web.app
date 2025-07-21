/*
simple javascript injection in innerHTML vulnerability

example: <img src="x" onerror="alert('XSS')">
*/
// document.getElementById("submit").onclick = function(){
//     var username = document.getElementById("input").value;
//     var cleanUsername = DOMPurify.sanitize(username)
//     document.getElementById("target").innerHTML = cleanUsername
// }
async function sendInput() {
    const input = document.getElementById("inputBox").value;
    const encodedInput = encodeURIComponent(input);

    try {
        const response = await fetch(`http://localhost:8000/challenges/input_reflection/${encodedInput}`, {
            method: 'POST',
    });

    const data = await response.json();
        document.getElementById("result").innerText = "Reflected: " + data.reflected_input;
    } catch (error) {
        document.getElementById("result").innerText = "Error: " + error;
    }
}