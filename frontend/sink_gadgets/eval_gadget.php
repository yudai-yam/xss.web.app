<?php 
    header("Content-Security-Policy: script-src 'self' https://ajax.googleapis.com 'unsafe-eval'; object-src 'none';");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>eval() Sink Gadget</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
</head>
<body>
    <h1 id="main_header">eval() Sink Gadget</h1>

    <div>
        <label>username: </label>
        <input id="input">
        <button id="submit">Submit</button>
    </div>

    <h3>your input: </h3>
    <p id="target"></p>

    <button id="toggle_examples">Toggle Examples</button>
    <div id="examples">
        <p>alert(1)</p>
        <p>note: you might need to encode it</p>
    </div>

    <script src="../utils/show-hide.js"></script>
    <script src="./eval-gadget.js"></script>
</body>
</html>