<?php 
    header("Content-Security-Policy: script-src 'self' https://ajax.googleapis.com object-src 'none';");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>inputFunction() Sink Gadget</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
</head>
<body>
    <h1 id="main_header">inputFunction() Sink Gadget</h1>

    <div>
        <label>username: </label>
        <input id="input">
        <button id="submit">Submit</button>
    </div>

    <h3>your input: </h3>
    <p id="target"></p>

    <button id="toggle_examples">Toggle Examples</button>
    <div id="examples">
        <p>example: &lt;img src=x onerror=alert(1)&gt;</p>
        <p>note: you might need to encode it</p>
    </div>

    <script src="../../../utils/show-hide.js"></script>
    <script src="../../../utils/read_config.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js" integrity="sha384-ndDqU0Gzau9qJ1lfW4pNLlhNTkCfHzAVBReH9diLvGRem5+R9g2FzA8ZGN954O5Q" crossorigin="anonymous"></script>
    <script src="./script.js"></script>
</body>
</html>