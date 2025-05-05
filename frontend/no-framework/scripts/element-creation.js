$(document).ready(function() {
  $('#submit').on('click', function() {
    const input = $('#input').val();
    $('#target').html(input); // Vulnerable to XSS if input is not sanitized
  });

  $('#submit2').on('click', function() {
    const input = $('#input2').val();
    try {
        const el = $("<" + input + ">")        
        console.log(el)
        $('#target2').append(el);
    } catch (e) {
        console.error(e)
        console.error("Invalid tag");
    }
  });
});