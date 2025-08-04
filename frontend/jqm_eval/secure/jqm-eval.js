var ref = document.location.href.split("?request=")[1];

document.addEventListener("DOMContentLoaded", async function() { 
    var received = await sendInput(ref);

    if (received) {
        document.getElementById("result").innerHTML = decodeURIComponent(received);
    }

    var expression = document.getElementById("expression").getAttribute("data");

    document.getElementById("result").innerHTML += expression;
});


async function sendInput(userInput) {
    const input = userInput || document.getElementById("input").value;
    const encodedInput = encodeURIComponent(input);

    let backend = await getConfigValue("backend");

    try {
        const response = await fetch(`${backend}/api/input_reflection/${encodedInput}`, {
            method: 'POST',
        });
        const data = await response.json();
        console.log(data.reflected_input);
        const decodedInput = decodeURIComponent(data.reflected_input);
        document.getElementById("result").innerHTML = decodedInput;
        return data.reflected_input;
    } catch (error) {
        document.getElementById("result").innerHTML = "Error: " + error;
    }
}
