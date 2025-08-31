var origin = null;

origin = getParameterByName("origin");

function getParameterByName(name, url) {
	if (!url) {
		url = window.location.href;
	}
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}


function receiveMessage(e) {
	if (e.origin != CLIENT_DOMAIN) {
		return;
	}
	var results = document.getElementById("results");

	var re = /^([^:]*):(.*)/
	var matches = re.exec(e.data)
	if (matches !== null && matches.length > 0) {
		const command = matches[1];
		const argument = matches[2];

		switch (command) {
			case "user":
				document.getElementById("login").style.display="none";
				document.getElementById("welcome").style.display="block";
				var username = argument;
				var welcome_obj = document.getElementById("welcome");
				welcome_obj.innerHTML = "Welcome " + username;
				break;
			case "msg":
				console.log("msg")
				console.log("originally a game logic but now being replaced by message handling")

				document.getElementById("receivedMsg").style.display="block";
				var receivedMsg_obj = document.getElementById("receivedMsg");
				receivedMsg_obj.innerHTML = "Received Message: " + argument;
				break;
			default:
				console.log("Command not recognized");
		}
	} else {
		results.innerHTML = (new Date()).toLocaleString() + " - " + e.data + results.innerHTML;
	}
}

window.addEventListener('message', receiveMessage);
