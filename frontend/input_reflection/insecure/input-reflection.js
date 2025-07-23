/*
simple javascript injection in innerHTML vulnerability

example: <img src="x" onerror="alert('XSS')">
*/
async function sendInput() {
    const input = document.getElementById("input").value;
    const encodedInput = encodeURIComponent(input);
    console.log(encodedInput)

    let backend = await getConfigValue("backend")
    console.log(backend)

    try {
        const response = await fetch(`${backend}/api/input_reflection/${encodedInput}`, {
            method: 'POST',
    });

    const data = await response.json();
        console.log(data.reflected_input)
        document.getElementById("result").innerHTML = data.reflected_input;
    } catch (error) {
        document.getElementById("result").innerHTML = "Error: " + error;
    }
}