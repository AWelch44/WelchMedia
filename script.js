// Global variables
let slideIndex = 1;
let touchStartX = 0;
let touchEndX = 0;
const touchThreshold = 50;


document.addEventListener('DOMContentLoaded', () => {
  
  showSlides(slideIndex);

  
  const slides = document.getElementsByClassName('mySlides');
  Array.from(slides).forEach(slide => {
    slide.addEventListener('touchstart', touchStart);
    slide.addEventListener('touchend', touchEnd);
  });

  
  const dropButtons = document.querySelectorAll('.dropbtn');
  dropButtons.forEach(button => {
    button.addEventListener('click', () => toggleDropdown(button));
  });

  
  window.addEventListener('click', closeDropdowns);
});


function touchStart(event) {
  touchStartX = event.touches[0].clientX;
}


function touchEnd(event) {
  touchEndX = event.changedTouches[0].clientX;
  const touchDiff = touchEndX - touchStartX;
  if (touchDiff > touchThreshold) {
    plusSlides(-1);
  } else if (touchDiff < -touchThreshold) {
    plusSlides(1);
  }
}


function plusSlides(n) {
  showSlides(slideIndex += n);
}




function showSlides(n) {
  const slides = document.getElementsByClassName('mySlides');
  const overlay = document.querySelector('.transition-overlay');
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  Array.from(slides).forEach(slide => {
    slide.style.display = 'none';
    slide.classList.remove('active');
  });
  
  slides[slideIndex - 1].style.display = 'block';
  slides[slideIndex - 1].classList.add('active');
}




setTimeout(() => {
  Array.from(slides).forEach(slide => {
    slide.style.display = 'none';
    slide.classList.remove('active');
  });
  
  slides[slideIndex - 1].style.display = 'block';
  slides[slideIndex - 1].classList.add('active');

  
  overlay.style.opacity = '0';
}, 300); 






function toggleDropdown(button) {
  const dropdowns = document.getElementsByClassName('dropdown-content');
  const thisDropdown = button.nextElementSibling;
  
  Array.from(dropdowns).forEach(dropdown => {
    if (dropdown !== thisDropdown) {
      dropdown.classList.remove('show');
    }
  });
  
  thisDropdown.classList.toggle('show');
  button.setAttribute('aria-expanded', thisDropdown.classList.contains('show'));
}




/* Video Banner Controls */

document.addEventListener('DOMContentLoaded', function() {
  const video = document.getElementById('FeatureVideo');
  
  if (video) {
    
    const currentPage = window.location.pathname.split('/').pop();

    
    const videoBehaviors = {
      'lifestyle.htm': { startTime: 34, endTime: 42 },
      'fashion.htm': { startTime: 228, endTime: 248 },
      'angelsofatlantis.htm': { startTime: 18, endTime: 26 },
      'beauty.htm': { startTime: 30, endTime: 40 },
    };

    
    const behavior = videoBehaviors[currentPage];

    if (behavior) {
      video.addEventListener('loadedmetadata', function() {
        
        video.currentTime = behavior.startTime;
        
        function checkTime() {
          if (video.currentTime >= behavior.endTime) {
            video.currentTime = behavior.startTime; 
          }
        }
        
        video.addEventListener('timeupdate', checkTime);
      });

      
      video.play().catch(error => {
        console.log("Auto-play was prevented. Please interact with the document to start the video.");
      });
    }
  }
});

/* Video Banner */





document.addEventListener('DOMContentLoaded', function() {
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');

  navbarToggle.addEventListener('click', function() {
    navbarMenu.classList.toggle('active');
    this.setAttribute('aria-expanded', navbarMenu.classList.contains('active'));
  });

  const dropdownLinks = document.querySelectorAll('.navbar-link');
  dropdownLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const dropdown = this.nextElementSibling;
        if (dropdown) {
          dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        }
      }
    });
  });


  document.addEventListener('click', function(e) {
    if (!navbarMenu.contains(e.target) && !navbarToggle.contains(e.target)) {
      navbarMenu.classList.remove('active');
      navbarToggle.setAttribute('aria-expanded', 'false');
    }
  });
});