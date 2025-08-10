var ref = document.location.href.split("?request=")[1];
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

    let backend = await getConfigValue("backend")

    try {
        const response = await fetch(`${backend}/api/jqm_popup/${encodedInput}`, {
            method: 'POST',
    });

    const data = await response.json();
        received_data = data.reflected_input
        document.getElementById("result").innerHTML = received_data;
        simulateJQueryMobileProcessing()
    } catch (error) {
        document.getElementById("result").innerHTML = "Error: " + error;
    }
}
