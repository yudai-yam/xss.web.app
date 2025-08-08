var ref = document.location.href.split("?request=")[1];
console.log("Raw URL:", document.location.href);
console.log("Extracted payload:", ref);
console.log("Decoded payload:", decodeURIComponent(ref));
document.getElementById("result").innerHTML = decodeURIComponent(ref);

function simulateJQueryMobileProcessing() {
    const popups = document.querySelectorAll('[data-role="popup"]');
    popups.forEach(el => {
        el.insertAdjacentHTML('beforebegin', `<!--${encodeURIComponent(el.id)}-->`);
    });
}

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
        console.log(received_data)
        document.getElementById("result").innerHTML = received_data;
        simulateJQueryMobileProcessing()
    } catch (error) {
        document.getElementById("result").innerHTML = "Error: " + error;
    }
}
