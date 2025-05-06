document.getElementById("submit").onclick = function(){
    var para = document.getElementById("input").value;
    
    // Create a new div element
    var element = document.createElement("div");
    
    // Vulnerable code: directly appending user input without sanitization
    element.innerHTML = para;
    
    
    // Append the element to the document body
    document.body.appendChild(element);
}