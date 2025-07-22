async function sendInput(optionalInput) {
    const input = optionalInput ?? document.getElementById("input").value;
    const encodedInput = encodeURIComponent(input);
    console.log("Encoded input:", encodedInput);

    let backend = await getConfigValue("backend");

    try {
        const response = await fetch(`${backend}/api/dom_clobbering/${encodedInput}`, {
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
    try {
        console.log("Evaluating: ", '' + window.test1?.test2);
        eval('' + window.test1?.test2); // This will trigger alert if clobbered
    } catch (e) {
        console.error("Eval failed:", e);
    }
}