async function sendInput() {
    const input = document.getElementById("userInput").value;
    const encodedInput = encodeURIComponent(input);
    console.log(encodedInput)

    let backend = await getConfigValue("backend")
    console.log(backend)

    try {
        const response = await fetch(`${backend}/api/mxss/${encodedInput}`, {
            method: 'POST',
    });

    const data = await response.json();
        const cleanUserInput = DOMPurify.sanitize(data.reflected_input)
        document.getElementById("output").innerHTML = cleanUserInput;
    } catch (error) {
        document.getElementById("result").innerHTML = "Error: " + error;
    }
}