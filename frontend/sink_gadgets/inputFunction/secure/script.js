document.getElementById("submit").onclick = sendInput

async function sendInput() {
    const input = document.getElementById("input").value;
    const encodedInput = encodeURIComponent(input);
    console.log(encodedInput)

    let backend = await getConfigValue("backend")
    console.log(backend)

    try {
        const response = await fetch(`${backend}/api/sink_eval/${encodedInput}`, {
            method: 'POST',
    });

    const data = await response.json();

    // Create a new div element
    var element = document.createElement("div");
    // directly appending user input without sanitization
    element.innerHTML = data.reflected_input;
    // Append the element to the document body
    document.body.appendChild(element);

    } catch (error) {
        document.getElementById("result").innerHTML = "Error: " + error;
    }
}