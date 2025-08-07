var ref = document.location.href.split("?request=")[1];
console.log("Raw URL:", document.location.href);
console.log("Extracted payload:", ref);
console.log("Decoded payload:", decodeURIComponent(ref));
document.getElementById("result").innerHTML = decodeURIComponent(ref);

async function sendInput() {
    const input = document.getElementById("input").value;
    const encodedInput = encodeURIComponent(input);
    console.log(encodedInput)

    let backend = await getConfigValue("backend")
    console.log(backend)

    try {
        const response = await fetch(`${backend}/api/jqm_popup/${encodedInput}`, {
            method: 'POST',
    });

    const data = await response.json();
        received_data = data.reflected_input
        document.getElementById("result").innerHTML = decodeURIComponent(received_data);
    } catch (error) {
        document.getElementById("result").innerHTML = "Error: " + error;
    }
}
