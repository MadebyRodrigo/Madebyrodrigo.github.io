document.addEventListener("DOMContentLoaded", function() {
  var aboutMeBox = document.getElementById('about-me-box');
  var aboutMeText = document.getElementById('about-me-text');

  aboutMeBox.addEventListener('click', function(event) {
      event.stopPropagation();  // Prevent the event from bubbling up to the window
      if (!aboutMeBox.classList.contains('expanded')) {
          aboutMeBox.classList.add('expanded');
          aboutMeText.innerHTML = `
          Rodrigo Couto Catarino, licenciado em Design Gráfico e Multimédia pela Escola Profissional de Artes e Design das Caldas da Rainha em 2024, persegue a paixão pelo design desde 2017. Em busca constante de conhecimento, acredita que aprender nunca é demais e traz consigo essa filosofia para todos os seus projetos, não tendo medo de arriscar em prol da evolução.
          <br><br>Atualmente, encontra-se focado nas áreas de Motion Design, Graphic Design e Multimédia Design, com o propósito de unir movimento e fluidez a composições de caráter criativo, sem dispensar qualquer desafio apresentado. Rodrigo domina os mais variados softwares, destacando-se entre eles Adobe Photoshop, Adobe Illustrator e Adobe After Effects.
          <br><br>Através dos seus projetos, pretende não só criar composições visualmente atraentes, mas também dar vida a histórias, transmitindo mensagens através dos seus trabalhos. Com um espírito inovador, Rodrigo procura continuar a expandir as suas fronteiras criativas, buscando sempre novos horizontes e inspirando-se em cada nova oportunidade para evoluir e fazer a diferença no mundo.
          
          `;
      }
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
