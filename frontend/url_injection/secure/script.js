async function sendInput(input) {
    const encodedInput = encodeURIComponent(input);

    let backend = await getConfigValue("backend")

    try {
        const response = await fetch(`${backend}/api/url_injection/${encodedInput}`, {
            method: 'GET',
    });

    const data = await response.json();
        document.getElementById("result").innerHTML = data.reflected_input;
    } catch (error) {
        document.getElementById("result").innerHTML = "Error: " + error;
    }
}