async function sendInput() {
    const input = document.getElementById("input").value;
    const encodedInput = encodeURIComponent(input);

    let backend = await getConfigValue("backend")

    try {
        const response = await fetch(`${backend}/api/input_reflection/${encodedInput}`, {
            method: 'GET',
    });

    const data = await response.json();
    const clean_data = DOMPurify.sanitize(data.reflected_input)
        document.getElementById("result").innerText = clean_data;
    } catch (error) {
        document.getElementById("result").innerText = "Error: " + error;
    }
}