<?php 
    header("Content-Security-Policy: script-src 'self' https://ajax.googleapis.com 'unsafe-eval'; object-src 'none';");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Element Creation Gadget</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
</head>
<body>
    <h1 id="main_header">JQuery Element Creation Gadget</h1>
    <p>Make use of known gadgets in JQuery!</p>

    <p>jQuery.html</p>
    <div>
        <label>username: </label>
        <input id="input">
        <button id="submit">Submit</button>
    </div>

    <h3>your input: </h3>
    <p id="target"></p>


    <p>Unsanitized createElement</p>
    <div>
        <label>username: </label>
        <input id="input2">
        <button id="submit2">Submit</button>
    </div>

    <h3>your input: </h3>
    <p id="target2"></p>

    <button id="toggle_examples">Toggle Examples</button>
    <div id="examples">
        <p>hint: You can put anything with id=expression and attribute=data</p>
        <p>example: &lt;img src=x onerror=alert(1)&gt;</p>
        <p>note: you might need to encode it</p>
    </div>
    <script src="../utils/show-hide.js"></script>
    <script src="scripts/element-creation.js"></script>
</body>
</html>