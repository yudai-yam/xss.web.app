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
    <p>Make use of known gadgets in JQuery!</p>
    <p>Your input</p>
    <p id="app"></p>

    <button id="toggle_examples">Toggle Examples</button>
    <div id="examples">
        <p>dummy for now</p>
        <p>hint: You can put anything with id=expression and attribute=data</p>
        <p>example: &lt;div id="expression" data="alert(1)"&gt;&lt;/div&gt;</p>
        <p>note: you might need to encode it</p>
    </div>
    <script src="../../utils/show-hide.js"></script>
    <script src="scripts/jqm-eval.js"></script>
</body>
</html>