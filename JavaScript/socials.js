document.addEventListener('DOMContentLoaded', function() {
    const clickableWord = document.querySelector('.socials');
    const extraWord = document.getElementById('linkedin');
    const extraWord2 = document.getElementById('linkedin2');
    const socialsLink = document.getElementById('socials-link');

    let clicked = false;

    clickableWord.addEventListener('click', function(event) {
        if (!clicked) {
            event.preventDefault(); // gambiarra para nao abrir insta no primeiro clique
            this.textContent = 'instagram'; // mudar a palavra para insta
            extraWord.style.display = 'block'; // adicionar linkedin
            extraWord2.style.display = 'flex'; 
            clicked = true;
        }
    });

    socialsLink.addEventListener('click', function(event) {
        if (!clicked) {
            event.preventDefault(); // gambiarra
        }
    });
});
