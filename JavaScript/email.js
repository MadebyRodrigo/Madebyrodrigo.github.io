document.getElementById('email').addEventListener('click', function() {
    // email copiado
    var email = "rodrigo.catarino@hotmail.com";
    
    var tempInput = document.createElement('input');
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // mudar para email
    this.textContent = email;

    // adaptar à largura
    this.style.width = "auto";

    var emailElement = this;

    // mudar outra vez para "email" depois de 10 segundos
    setTimeout(function() {
        emailElement.textContent = "email";
        emailElement.style.width = "200px"; // adaptar largura para "email"
    }, 10000);
});