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
    console.log(data.reflected_input)
    eval(data.reflected_input)

    } catch (error) {
        document.getElementById("result").innerHTML = "Error: " + error;
    }
}
