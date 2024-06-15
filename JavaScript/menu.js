document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const mobileMenu = document.getElementById('mobile-menu');
  
    menuIcon.addEventListener('click', function () {
      mobileMenu.classList.toggle('active');
  
      if (mobileMenu.classList.contains('active')) {
        const projectsirLink = document.createElement('a');
        projectsirLink.setAttribute('href', '#projectsir');
        projectsirLink.classList.add('projectsir');
        projectsirLink.innerHTML = '<h6 class="projectsir">so far</h6>';
        mobileMenu.insertBefore(projectsirLink, mobileMenu.firstChild); // Adiciona projects no início do menu móvel
      } else {
        const projectsirMobile = mobileMenu.querySelector('.projectsir');
        if (projectsirMobile) {
          projectsirMobile.remove(); // Remove projects se o menu não estiver ativo
        }
      }
    });
  });
  