document.addEventListener("DOMContentLoaded", function() {
    var aboutMeBox = document.getElementById('about-me-box');
    var aboutMeText = document.getElementById('about-me-text');
  
    aboutMeBox.addEventListener('click', function(event) {
        event.stopPropagation();  // Prevent the event from bubbling up to the window
        if (!aboutMeBox.classList.contains('expanded')) {
            aboutMeBox.classList.add('expanded');
            aboutMeText.innerHTML = `
            Rodrigo Couto Catarino, graduated in Graphic and Multimedia Design by the Upper School of Arts and Design - Politécnico de Leiria in 2024, has been pursuing his passion for design since 2017. Constantly seeking knowledge, he believes that learning is never too much and carries this philosophy into all his projects, unafraid to take risks for the sake of evolution.
            <br><br>Currently, he is focused on the fields of Motion Design, Graphic Design, and Multimedia Design, aiming to bring movement and fluidity to creative compositions while welcoming any challenge presented. Rodrigo masters a variety of software, notably Adobe Photoshop, Adobe Illustrator, and Adobe After Effects.
            <br><br>Through his projects, he aims not only to create visually appealing compositions but also to bring stories to life, conveying messages through his work. With an innovative spirit, Rodrigo seeks to continue expanding his creative boundaries, always searching for new horizons and drawing inspiration from every new opportunity to evolve and make a difference in the world.
   `; }
    });
  
    window.addEventListener('click', function(event) {
        if (aboutMeBox.classList.contains('expanded') && !aboutMeBox.contains(event.target)) {
            aboutMeBox.classList.remove('expanded');
            aboutMeText.innerHTML = `
                Click to read more...
            `;
        }
    });
  });
  