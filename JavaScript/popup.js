
// so many tools so little time
document.addEventListener("DOMContentLoaded", function() {
  var popupTrigger1 = document.getElementById('popup-trigger1');
  var popup1 = document.getElementById('popup1');
  var closeBtn1 = document.getElementById('close-btn1');


  popupTrigger1.addEventListener('click', function() {
    popup1.style.display = 'block';
  });

  closeBtn1.addEventListener('click', function() {
    popup1.style.display = 'none';
  });


  window.addEventListener('click', function(event) {
    if (event.target == popup1) {
      popup1.style.display = 'none';
    }
  });
});

// adidas
document.addEventListener("DOMContentLoaded", function() {
  var popupTrigger2 = document.getElementById('popup-trigger2');
  var popup2 = document.getElementById('popup2');
  var closeBtn2 = document.getElementById('close-btn2');


  popupTrigger2.addEventListener('click', function() {
    popup2.style.display = 'block';
  });


  closeBtn2.addEventListener('click', function() {
    popup2.style.display = 'none';
  });


  window.addEventListener('click', function(event) {
    if (event.target == popup2) {
      popup2.style.display = 'none';
    }
  });
});

// media is just chaos
document.addEventListener("DOMContentLoaded", function() {
  var popupTrigger3 = document.getElementById('popup-trigger3');
  var popup3 = document.getElementById('popup3');
  var closeBtn3 = document.getElementById('close-btn3');


  popupTrigger3.addEventListener('click', function() {
    popup3.style.display = 'block';
  });


  closeBtn3.addEventListener('click', function() {
    popup3.style.display = 'none';
  });


  window.addEventListener('click', function(event) {
    if (event.target == popup3) {
      popup3.style.display = 'none';
    }
  });
});