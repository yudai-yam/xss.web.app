<?php 
    header("Content-Security-Policy: script-src 'self' https://ajax.googleapis.com 'unsafe-eval'; object-src 'none';");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>JQuery Mobile Gadget</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.js"></script>
    <script src="scripts/jquery_mobile.js"></script>
</head>
<body>
    <p>Make use of known gadgets in JQuery Mobile!</p>
    <p id="app"></p>

    <button id="toggle_examples">Toggle Examples</button>
    <div id="examples">
        <p>
            example: &lt;img src="x" onerror="alert('XSS')"&gt;
        </p>
    </div>
    <script src="../utils/show_hide.js"></script>
</body>
</html>