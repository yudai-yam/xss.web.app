const RECEIVE_URL = SERVER_DOMAIN + "/receiver.html" + "?origin=" + get_domain();

var window_ref = null;

document.getElementById("username").focus();

function store_username() {
	var username;
	var username_obj;

	username_obj = document.getElementById("username");
	username = username_obj.value

	var welcome;
	welcome = document.getElementById("welcome");
	welcome.innerHTML = "Welcome " + html_encode (username);

	var set_username;
	set_username = document.getElementById("set_username");
	set_username.style.display="none";

	var game;
	game = document.getElementById("game");
	game.style.display="inline";

	start_game();
	setTimeout (function () {send_username(username);}, 1000);

	return false;
}

function check_msg() {
	var msg_obj = document.getElementById("msg");
	var msg = msg_obj.value;

	send_message("msg:" + msg);

	document.getElementById("msg").focus();
	document.getElementById("msg").value = "";
}

function html_encode (html) {
	return document.createElement('a').appendChild( 
		document.createTextNode(html)).parentNode.innerHTML;
}

function send_message(message) {
	if (window_ref == null) {
		return;
	}
	if (window_ref.closed) {
		return;
	}

	const cleanMessage = DOMPurify.sanitize(message);
	window_ref.postMessage(cleanMessage, RECEIVE_URL);
}

function start_game() {
	open_window();
	document.getElementById("msg").focus();
}

function send_username(username) {
	console.log("send username")
	message = "user:" + html_encode(username);
	send_message(message);
}

function get_domain() {
	var url = window.location.href
	var arr = url.split("/");
	return arr[0] + "//" + arr[2]
}

function open_window() {
	if (window_ref == null || window_ref.closed) {
		window_ref = window.open (RECEIVE_URL, "score board", "height=260,width=550");

		if (window_ref == null) {
			alert ("Allow popups for this site to work.");
		}
	}
}

const usernameButton = document.getElementById("setUsername");
usernameButton.addEventListener("click", store_username, false);

const msgButton = document.getElementById("checkMsg");
msgButton.addEventListener("click", check_msg, false);

start_game();
