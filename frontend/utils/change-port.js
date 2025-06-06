/**
 * Utility function to change the port 
 * No package - 8000
 * Polymer - 8001
 * 
 * @param {string} newPort - The new port number to change to
 */
export function changePort(newPort) {

    const url = new URL(window.location.href)

    // validate the port
    if (typeof newPort !== 'number' || newPort <= 0 || newPort >= 65535) {
        console.error("new port is invalid: "+ newPort)
        return
    }
    if (url.port.toString() == newPort) {
        console.error("The port has already been changed. Port: " + newPort)
        return
    }

    console.log("Changing the port to " + newPort)
    url.port = newPort
    window.location.href = url.toString()
}