function simulateJQueryMobileProcessing(input) {
    const el = document.createElement("div");
    document.body.appendChild(el);
    id = getPopupIdFromString(input)
    console.log(id)
    el.insertAdjacentHTML('beforebegin', `<!--${id}-->`);
}


function getPopupIdFromString(html) {
    const temp = document.createElement("div");
    temp.innerHTML = html.trim();
    const el = temp.firstChild;
    if (el.getAttribute("data-role") === "popup") {
        return el.id;
    }
    return null;
}


async function sendInput() {
    const input = document.getElementById("input").value;
    const encodedInput = encodeURIComponent(input);

    let backend = await getConfigValue("backend")

    try {
        const response = await fetch(`${backend}/api/jqm_popup/${encodedInput}`, {
            method: 'GET',
    });

    const data = await response.json();
        received_data = data.reflected_input
        simulateJQueryMobileProcessing(received_data)
    } catch (error) {
        document.getElementById("result").innerHTML = "Error: " + error;
    }
}
