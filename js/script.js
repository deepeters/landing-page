$(document).ready(function() {
    $("form#contactForm").submit(function(event) {
        event.preventDefault();
        var name = $("input#name").val();
        var email = $("input#email").val();


        if (name && email) {
            alert(name + ", your message has been received. We will process it and provide feedback.");
        } else {
            alert("Please enter your name and email!");
        }
    })


})