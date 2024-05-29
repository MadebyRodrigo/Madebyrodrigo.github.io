document.getElementById('email').addEventListener('click', function() {
    // Email to be copied
    var email = "rodrigo.catarino@hotmail.com";
    
    // Create a temporary input element to copy the email
    var tempInput = document.createElement('input');
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Change the text of the element to the email
    this.textContent = email;

    // Optionally, adjust the width if necessary
    this.style.width = "auto";

    // Save a reference to this element
    var emailElement = this;

    // Set a timeout to change the text back to "email" after 10 seconds
    setTimeout(function() {
        emailElement.textContent = "email";
        emailElement.style.width = "200px"; // Reset width if it was adjusted
    }, 10000); // 10000 milliseconds = 10 seconds
});
