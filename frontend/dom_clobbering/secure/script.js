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
        document.getElementById('output').innerHTML = data.reflected_input;
    } catch (error) {
        console.log(error)
    }
}


function inject() {
    const html = document.getElementById('userInput').value;
    sendInput(html)

    try {
        const data = window.test1.test2
        const clean_data = DOMPurify.sanitize(data)
        eval('' + clean_data);
    } catch (e) {
        console.error("Eval failed:", e);
    }
}