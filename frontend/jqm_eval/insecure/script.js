var ref = document.location.href.split("?request=")[1];

document.addEventListener("DOMContentLoaded", async function() { 
    var received = await sendInput(ref);

    if (received) {
        document.getElementById("result").innerHTML = decodeURIComponent(received);
    }

    var expression = document.getElementById("expression").getAttribute("data");
    var parsed = eval(expression);
    document.getElementById("result").innerHTML += '<p>' + parsed + '</p>';
});

async function sendInput(userInput) {
    const input = userInput || document.getElementById("input").value;
    const encodedInput = encodeURIComponent(input);

    let backend = await getConfigValue("backend");

    try {
        const response = await fetch(`${backend}/api/jqm_eval/insecure/${encodedInput}`, {
            method: 'POST',
        });
        const data = await response.json();
        document.getElementById("result").innerHTML = decodeURIComponent(data.reflected_input);
        return data.reflected_input;
    } catch (error) {
        document.getElementById("result").innerHTML = "Error: " + error;
    }
}
