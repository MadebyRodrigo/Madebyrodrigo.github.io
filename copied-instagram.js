document.querySelector('.instagram').addEventListener('click', function() {
    // Text to be copied
    var textToCopy = "@madebyrodrigo";

    // Create a temporary input element to copy the text
    var tempInput = document.createElement('input');
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    this.textContent = "copied.";
    var instagramElement = this;

    setTimeout(function() {
        instagramElement.textContent = textToCopy;
    }, 1000); // tempo

    return false;
});
