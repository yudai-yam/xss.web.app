async function sendInput(optionalInput) {
    const input = optionalInput ?? document.getElementById("input").value;
    const encodedInput = encodeURIComponent(input);
    console.log("Encoded input:", encodedInput);

    let backend = await getConfigValue("backend");

    try {
        const response = await fetch(`${backend}/dom_clobbering/${encodedInput}`, {
            method: 'POST',
        });
        
        const data = await response.json();
        console.log(response)
        document.getElementById('output').innerHTML = data.reflected_input;
    } catch (error) {
        console.log(error)
    }
}


function inject() {
    const html = document.getElementById('userInput').value;
    sendInput(html)

    // Simulated vulnerable code using eval
    const data = (window.globalConfig && window.globalConfig.id) || "console.log('No clobbering detected')";
    eval('' + data); // This will trigger alert if clobbered
}