document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menu-icon');
  const mobileMenu = document.getElementById('mobile-menu');

  menuIcon.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');

    if (mobileMenu.classList.contains('active')) {
      const projectsLink = document.createElement('a');
      projectsLink.setAttribute('href', '#projects');
      projectsLink.classList.add('projects');
      projectsLink.innerHTML = '<h6 class="projects">projects</h6>';
      mobileMenu.insertBefore(projectsLink, mobileMenu.firstChild); // Adiciona projects no início do menu móvel
    } else {
      const projectsMobile = mobileMenu.querySelector('.projects');
      if (projectsMobile) {
        projectsMobile.remove(); // Remove projects se o menu não estiver ativo
      }
    }
  });
});
