var hints=[
"TG9vayBmb3IgdGhlIGZ1bmN0aW9uIHVzZWQgdG8gc2VuZCB0aGUgdXNlcm5hbWUgdG8gdGhlIHNlcnZlciBhbmQgZXhhbWluZSBob3cgaXQgd29ya3Mu",
"WW91IHNob3VsZCBoYXZlIGZvdW5kIHRoZSA8Y29kZT5zZW5kX3VzZXJuYW1lKCk8L2NvZGU+IGZ1bmN0aW9uLCB0cnkgY2FsbGluZyBpdCBmcm9tIHRoZSBjb25zb2xlIGFuZCBzZWUgd2hhdCBoYXBwZW5zLg==",
"UnVubmluZyB0aGUgZm9sbG93aW5nIHdpbGwgc2V0IHRoZSBwbGF5ZXIncyBuYW1lIHRvIEJvYjo8YnIgLz48Y29kZT5zZW5kX3VzZXJuYW1lKCJCb2IiKTwvY29kZT48YnIgLz5Ob3cgdHJ5IHNlbmRpbmcgc29tZSBwb3RlbnRpYWwgWFNTIHN0cmluZ3MgdGhyb3VnaCBpdCBhbmQgc2VlIHdoYXQgaGFwcGVucy4=",
"WW91IHNob3VsZCBzZWUgYW55IEhUTUwgdGFncyBpbmNsdWRlZCBpbiB0aGUgbmFtZSBhcmUgSFRNTCBlbmNvZGVkIHdoZW4gdGhleSBhcmUgdXNlZCBvbiB0aGUgc2VydmVyLiBZb3UgbmVlZCB0byBjaGVjayB3aGV0aGVyIHRoaXMgaXMgZG9uZSBjbGllbnQgb3Igc2VydmVyIHNpZGUu",
"RXhhbWluaW5nIHRoZSA8Y29kZT5zZW5kX3VzZXJuYW1lKCk8L2NvZGU+IGZ1bmN0aW9uIHlvdSB3aWxsIHNlZSB0aGUgdXNlcm5hbWUgaXMgSFRNTCBlbmNvZGVkIGJlZm9yZSBpdCBpcyBzZW50LCB5b3UgY2FuIGJ5cGFzcyB0aGlzIGVuY29kaW5nIGJ5IG1ha2luZyB0aGUgY2FsbCBtYW51YWxseS4=",
"VGhlIDxjb2RlPnNlbmRfdXNlcm5hbWUoKTwvY29kZT4gZnVuY3Rpb24gY3JlYXRlcyB0aGUgbWVzc2FnZSA8Y29kZT51c2VyOiZsdDtuYW1lJmd0OzwvY29kZT4gYW5kIHRoZW4gc2VuZHMgaXQgdXNpbmcgPGNvZGU+c2VuZF9tZXNzYWdlKCk8L2NvZGU+Lg==",
"WW91IGNhbiBkbyB0aGlzIGJ5IGhhbmQgd2l0aDo8YnIgLz48Y29kZT5zZW5kX21lc3NhZ2UoInVzZXI6dGhpcyBpcyAmbHQ7YiZndDtib2xkJmx0Oy9iJmd0OyIpPC9jb2RlPjxiciAvPk5vdyB0cnkgdG8gZ2V0IFhTUyB0aHJvdWdoIGl0LCB5b3UgbWlnaHQgbmVlZCB0byB0cnkgYSBmZXcgZGlmZmVyZW50IHdheXMgdG8gZXhlY3V0ZSBjb2RlLg==",
"U2NyaXB0IHRhZ3Mgd29uJ3Qgd29yaywgeW91IGhhdmUgdG8gdXNlIGV2ZW50IGhhbmRsZXJzLiBUaGlzIHdpbGwgZ2l2ZSB5b3UgYW4gYWxlcnQgYm94OjxiciAvPjxjb2RlPnNlbmRfbWVzc2FnZSgidXNlcjombHQ7aW1nIHNyYz0neCcgb25lcnJvcj0nYWxlcnQoXCJ4c3NcIiknIC8mZ3Q7Iik8L2NvZGU+",
"VGhlIGdhbWUgc2VydmVyIHN0b3JlcyB0aGUgc2VjcmV0IG51bWJlciBpbiBhIHZhcmlhYmxlIGNhbGxlZCA8Y29kZT5zZWNyZXQ8L2NvZGU+LCB1cGRhdGUgeW91ciBYU1MgY29kZSB0byBkaXNwbGF5IHRoaXMgaW5zdGVhZC4=",
"VGhpcyB3aWxsIGRpc3BsYXkgdGhlIHNlY3JldCBudW1iZXI6PGJyIC8+PGNvZGU+c2VuZF9tZXNzYWdlKCd1c2VyOiZsdDtpbWcgc3JjPSJ4IiBvbmVycm9yPSJhbGVydChzZWNyZXQpIiZndDsnKTwvY29kZT4=",
"Rm9yIGJvbnVzIHBvaW50cywgZXhhbWluZSB0aGUgSmF2YVNjcmlwdCBvbiB0aGUgZ2FtZSBzZXJ2ZXIgYW5kIGVudW1lcmF0ZSBhbGwgdGhlIG1lc3NhZ2VzIGl0IHdpbGwgYWNjZXB0LCB5b3Ugc2hvdWxkIHNlZSBhbiBpbnRlcmVzdGluZyBvbmUgdGhhdCBpcyB1bmxpa2VseSB0byBiZSBkb2N1bWVudGVkLiBXb3JrIG91dCBob3cgaXQgZXhwZWN0cyB0byBiZSAgICAgY2FsbGVkIGFuZCB0aGVuIHNlbmQgdGhlIGFwcHJvcHJpYXRlIG1lc3NhZ2Uu",
"VGhlIGdhbWUgc2VydmVyIGhhcyBhIGRlYnVnIG1vZGUsIGVuYWJsZSBpdCB3aXRoOjxiciAvPjxjb2RlPnNlbmRfbWVzc2FnZSgnZGVidWc6b24nKTwvY29kZT4=",
];

function addHint() {
	if (hints.length > 0) {
		hint = hints.shift();
		if (hints.length == 0) {
			let hintButton = document.getElementById("addHint");
			hintButton.value="No More Hints";
			hintButton.disabled = true;
		}
	} else {
		return;
	}
	var node = document.createElement("LI");
	node.innerHTML = atob(hint);
	document.getElementById("hints").appendChild(node);
}

const hintButton = document.getElementById("addHint");
hintButton.addEventListener("click", addHint, false);
