const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('active')
})


function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  const counters = document.querySelectorAll('.no1, .no2, .no3');
  counters.forEach(counter => {
    const endValue = parseInt(counter.getAttribute('data-target'));
    animateValue(counter, 0, endValue, 9000); // Duration is 5000ms (5 seconds)
});


// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".box");
  const windowHeight = window.innerHeight;

  // Function to check if an element is in the viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < windowHeight;
  }

  // Function to handle box visibility
  function handleBoxVisibility() {
    boxes.forEach((box) => {
      if (isInViewport(box)) {
        box.classList.add("active");
      } else {
        box.classList.remove("active");
      }
    });
  }

  // Initial check on page load
  handleBoxVisibility();

  // Listen for scroll events
  window.addEventListener("scroll", handleBoxVisibility);
});


// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".box1");
  const windowHeight = window.innerHeight;

  // Function to check if an element is in the viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < windowHeight;
  }

  // Function to handle box visibility
  function handleBoxVisibility() {
    boxes.forEach((box) => {
      if (isInViewport(box)) {
        box.classList.add("active");
      } else {
        box.classList.remove("active");
      }
    });
  }

  // Initial check on page load
  handleBoxVisibility();

  // Listen for scroll events
  window.addEventListener("scroll", handleBoxVisibility);
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1, // Show all five slides
  spaceBetween: 30,
  slidesPerGroup: 1, // Adjust as needed
  loop: false, // Disable loop for single slide
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1, // Show only one slide on small screens
    },
    720: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

/* Swiper Js*/

var swiper = new Swiper(".slide-container", {
  slidesPerView: 4,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});

/* Swiper Js End*/