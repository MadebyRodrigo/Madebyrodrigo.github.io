document.addEventListener('DOMContentLoaded', function() {
    const clickableWord = document.querySelector('.socials');
    const extraWord = document.getElementById('linkedin');
    const extraWord2 = document.getElementById('linkedin2');
    const socialsLink = document.getElementById('socials-link');

    let clicked = false;

    clickableWord.addEventListener('click', function(event) {
        if (!clicked) {
            event.preventDefault(); // Impede a navegação no primeiro clique
            this.textContent = '@madebyrodrigo'; // Substitui a palavra
            extraWord.style.display = 'block'; // Exibe a nova palavra acima
            extraWord2.style.display = 'flex'; // Exibe a nova palavra acima
            clicked = true;
        }
    });

    socialsLink.addEventListener('click', function(event) {
        if (!clicked) {
            event.preventDefault(); // Impede a navegação no primeiro clique
        }
    });
});
