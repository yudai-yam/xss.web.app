var origin = null;
var secret = 0;
var guesses = 0;
var score = 0;
var debug = false;

// Could use referer to get this but passing it guarantees that it comes through
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

function start_new_game() {
	secret = Math.floor(Math.random() * 10) + 1;
	// secret = 1;
	guesses = 0;
	document.getElementById('reset').style.display = "block";
	update_debug();
}

function receiveMessage(e) {
	if (e.origin != CLIENT_DOMAIN) {
        console.log(e.origin)
        console.log(CLIENT_DOMAIN)
		return;
	}
	var results = document.getElementById("results");
	var score_obj = document.getElementById("score");

	var re = /^([^:]*):(.*)/
	var matches = re.exec(e.data)
	console.log("received msg")
	console.log(e.data)
	if (matches !== null && matches.length > 0) {
		const command = matches[1];
		const argument = matches[2];

		switch (command) {
			case "user":
				start_new_game();
				document.getElementById('reset').style.display="none";
				document.getElementById("login").style.display="none";
				document.getElementById("welcome").style.display="block";
				document.getElementById("score_block").style.display="block";
				var username = argument;
				var welcome_obj = document.getElementById("welcome");
				welcome_obj.innerHTML = "Welcome " + username;
				break;
			case "guess":
				console.log("guess")
				guesses = guesses + 1;
				// can remove this check to allow XSS in the incorrect guess section
				if (!isNaN(argument)) {
					const guess=argument;

					if (matches[2] == secret) {
						results.innerHTML = (new Date()).toLocaleString() + " - Took " + guesses + ' guesses<br />' + results.innerHTML;
						score = score + 1;
						score_obj.innerHTML = score;
						document.getElementById("wrong").style.display="none";
						start_new_game();
					} else {
						document.getElementById('reset').style.display="none";
						document.getElementById("wrong").style.display="block";
						document.getElementById("wrong").innerHTML="Last incorrect guess: " + guess;
					}
				} else {
					console.log ("Did not give a number");
				}
				break;
			case "debug":
				if (argument == "on") {
					document.getElementById('debug').style.display = 'block';
					debug = true;
				} else {
					document.getElementById('debug').style.display = 'none';
					debug = false;
				}
				update_debug();
				break;
			default:
				console.log("Unknown command");
		}
	} else {
		results.innerHTML = (new Date()).toLocaleString() + " - " + e.data + results.innerHTML;
		score = score + 1;
		score_obj.innerHTML = score;
	}
}

function update_debug() {
	if (debug) {
		document.getElementById('debug').innerText = 'DEBUG: The secret is: ' + secret;
	} else {
		document.getElementById('debug').innerText = '';
	}
}

// Setup an event listener that calls receiveMessage() when the window
// receives a new MessageEvent.
window.addEventListener('message', receiveMessage);
