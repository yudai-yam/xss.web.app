async function sendInput(input) {
    const encodedInput = encodeURIComponent(input);
    console.log(encodedInput)

    let backend = await getConfigValue("backend")
    console.log(backend)

    try {
        const response = await fetch(`${backend}/api/url_injection/${encodedInput}`, {
            method: 'GET',
    });

    const data = await response.json();
        console.log(data.reflected_input)
        document.getElementById("result").innerHTML = data.reflected_input;
    } catch (error) {
        document.getElementById("result").innerHTML = "Error: " + error;
    }
}
