document.addEventListener('DOMContentLoaded', function() {
    const clickableWord = document.querySelector('.socials');
    const extraWord = document.getElementById('linkedin');
    const extraWord2 = document.getElementById('linkedin2');

    clickableWord.addEventListener('click', function() {
        this.textContent = '@madebyrodrigo'; // Substitui a palavra
        extraWord.style.display = 'block'; // Exibe a nova palavra acima
        extraWord2.style.display = 'block'; // Exibe a nova palavra acima
    });
});
