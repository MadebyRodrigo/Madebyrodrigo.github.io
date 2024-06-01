// popup.js

document.addEventListener("DOMContentLoaded", function() {
  var popupTrigger1 = document.getElementById('popup-trigger1');
  var popup1 = document.getElementById('popup1');
  var closeBtn1 = document.getElementById('close-btn1');

  // Abre o popup ao clicar na imagem
  popupTrigger1.addEventListener('click', function() {
    popup1.style.display = 'block';
  });

  // Fecha o popup ao clicar no botão de fechar
  closeBtn1.addEventListener('click', function() {
    popup1.style.display = 'none';
  });

  // Fecha o popup ao clicar fora do conteúdo do popup
  window.addEventListener('click', function(event) {
    if (event.target == popup1) {
      popup1.style.display = 'none';
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var popupTrigger2 = document.getElementById('popup-trigger2');
  var popup2 = document.getElementById('popup2');
  var closeBtn2 = document.getElementById('close-btn2');

  // Abre o popup ao clicar na imagem
  popupTrigger2.addEventListener('click', function() {
    popup2.style.display = 'block';
  });

  // Fecha o popup ao clicar no botão de fechar
  closeBtn2.addEventListener('click', function() {
    popup2.style.display = 'none';
  });

  // Fecha o popup ao clicar fora do conteúdo do popup
  window.addEventListener('click', function(event) {
    if (event.target == popup2) {
      popup2.style.display = 'none';
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var popupTrigger3 = document.getElementById('popup-trigger3');
  var popup3 = document.getElementById('popup3');
  var closeBtn3 = document.getElementById('close-btn3');

  // Abre o popup ao clicar na imagem
  popupTrigger3.addEventListener('click', function() {
    popup3.style.display = 'block';
  });

  // Fecha o popup ao clicar no botão de fechar
  closeBtn3.addEventListener('click', function() {
    popup3.style.display = 'none';
  });

  // Fecha o popup ao clicar fora do conteúdo do popup
  window.addEventListener('click', function(event) {
    if (event.target == popup3) {
      popup3.style.display = 'none';
    }
  });
});

