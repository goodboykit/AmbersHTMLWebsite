'use strict';

const nav = document.querySelector('.navbar-nav');
const navLinks = document.querySelectorAll('.nav-link');
const cartToggleBtn = document.querySelector('.shopping-cart-btn');
const navToggleBtn = document.querySelector('.menu-toggle-btn');
const shoppingCart = document.querySelector('.cart-box');

const signUpBtn = document.querySelector('.shopping-cart-btn2');
const signUpPane = document.querySelector('.sign-up-pane');
const createAccountPane = document.getElementById('create-account-pane');
const welcomeBackPane = document.getElementById('welcome-back-pane');

// Function to hide a specific pane
const hidePane = function (paneElement) {
  paneElement.classList.remove('active');
  paneElement.classList.add('hidden');

};

// Function to hide all panes
const hideAllPanes = function () {
  hidePane(nav);
  hidePane(shoppingCart);
  hidePane(signUpPane);
  hidePane(createAccountPane);
  hidePane(welcomeBackPane);
};

// nav toggle function
const navToggleFunc = function () {
  nav.classList.toggle('active');
  navToggleBtn.classList.toggle('active');
};

const cartToggleFunc = function () {
  if (shoppingCart.classList.contains('active')) {
    hidePane(shoppingCart);
  } else {
    shoppingCart.classList.toggle('active');
  }
};

// sign-up form toggle function
const signUpToggleFunc = function () {
  if (signUpPane.classList.contains('active')) {
    hidePane(signUpPane);
  } else {
    signUpPane.classList.toggle('active');
  }
};

navToggleBtn.addEventListener('click', function () {
  if (shoppingCart.classList.contains('active') || signUpPane.classList.contains('active')) {
    hideAllPanes();
  }
  navToggleFunc();
});



cartToggleBtn.addEventListener('click', function () {
  cartToggleFunc();
});

// add event on sign-up-btn
signUpBtn.addEventListener('click', function () {
  signUpToggleFunc();
});

function showWelcomeBackPane() {
  hideAllPanes();
  welcomeBackPane.classList.add('active');
  welcomeBackPane.classList.remove('hidden');
}

function showCreateAccountPane() {
  hideAllPanes();
  createAccountPane.classList.add('active');
  createAccountPane.classList.remove('hidden');
}

window.showWelcomeBackPane = showWelcomeBackPane;
window.showCreateAccountPane = showCreateAccountPane;




const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function () {
  lastActiveSliderItem.classList.remove("active");
  heroSliderItems[currentSlidePos].classList.add("active");
  lastActiveSliderItem = heroSliderItems[currentSlidePos];
};

const slideNext = function () {
  if (currentSlidePos >= heroSliderItems.length - 1) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }
  updateSliderPos();
};

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = heroSliderItems.length - 1;
  } else {
    currentSlidePos--;
  }
  updateSliderPos();
};

heroSliderPrevBtn.addEventListener("click", slidePrev);

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};


let autoSlideInterval;

const autoSlide = function () {
  autoSlideInterval = setInterval(function () {
    slideNext();
  }, 7000);
};

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", function () {
  clearInterval(autoSlideInterval);
});

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide);

window.addEventListener("load", autoSlide);



document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.navbar-nav li');

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navLinks.forEach(link => link.classList.remove('active'));

      this.classList.add('active');
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('header');

  if (header) {
    let lastScrollTop = 0;

    window.addEventListener('scroll', function () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop && scrollTop > 0) {
        // Scrolling down
        header.style.animation = 'slideOut 0.5s cubic-bezier(0.25, 1, 0.5, 1) forwards';
        header.style.backgroundColor = 'rgba(255, 255, 255, 0)';
      } else if (scrollTop < lastScrollTop || scrollTop === 0) {
        // Scrolling up or at the top
        header.style.animation = 'slideIn 0.5s cubic-bezier(0.25, 1, 0.5, 1) forwards';
        header.style.backgroundColor = 'rgba(255, 255, 255, 1)';
      }
      lastScrollTop = scrollTop;
    });
  }
});


let lastScrollTop = 0;

document.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  const cartBox = document.querySelector('.cart-box');
  const cartBtnGroup = document.querySelector('.cart-btn-group');
  const signUpPane = document.querySelector('.sign-up-pane');
  const signUpBox = document.querySelector('.sign-up-box');
  const welcomeBackPane = document.querySelector('#welcome-back-pane');
  const welcomeBackBox = document.querySelector('#welcome-back-pane .sign-up-box');
  let currentScroll = window.pageYOffset;
  const cartBoxTop = 119;
  const signUpPaneTop = 100;
  const fullHeight = '100vh';

  if (currentScroll > lastScrollTop) {
    // Scrolling down
    header.classList.add('hidden');
    header.classList.remove('visible');
    cartBox.style.top = '100px';
    cartBox.style.height = '105vh';
    cartBtnGroup.style.display = 'block';
    signUpPane.style.height = fullHeight;
    signUpBox.style.height = fullHeight;
    welcomeBackPane.style.height = fullHeight;
    welcomeBackBox.style.height = fullHeight;
  } else {
    header.classList.remove('hidden');
    header.classList.add('visible');
    cartBox.style.top = `${cartBoxTop}px`;
    cartBox.style.height = `calc(100vh - ${cartBoxTop}px)`;
    cartBtnGroup.style.display = 'block';
    signUpPane.style.height = `calc(100vh - ${signUpPaneTop}px)`;
    signUpBox.style.height = `calc(100vh - ${signUpPaneTop}px)`;
    welcomeBackPane.style.height = `calc(100vh - ${signUpPaneTop}px)`;
    welcomeBackBox.style.height = `calc(100vh - ${signUpPaneTop}px)`;
  }

  if (currentScroll === 0) {
    header.classList.remove('hidden');
    header.classList.add('visible');
    cartBox.style.top = `${cartBoxTop}px`;
    cartBox.style.height = `calc(100vh - ${cartBoxTop}px)`;
    cartBtnGroup.style.display = 'block';
    signUpPane.style.height = `calc(100vh - ${signUpPaneTop}px)`;
    signUpBox.style.height = `calc(100vh - ${signUpPaneTop}px)`;
    welcomeBackPane.style.height = `calc(100vh - ${signUpPaneTop}px)`;
    welcomeBackBox.style.height = `calc(100vh - ${signUpPaneTop}px)`;
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});


function addItem() {
  document.getElementById('cart-empty').style.display = 'none';
  document.getElementById('cart-filled').style.display = 'block';
}

const goBack = function () {
  document.getElementById('cart-filled').style.display = 'none';
  document.getElementById('cart-empty').style.display = 'block';
  console.log('Go back button clicked');
  hidePane(shoppingCart);

};


document.addEventListener('DOMContentLoaded', function () {
  const aboutSection = document.querySelector('.container-about');

  function onScroll() {
    const sectionTop = aboutSection.getBoundingClientRect().top;
    const sectionHeight = aboutSection.offsetHeight;
    const windowHeight = window.innerHeight;
    if (sectionTop < windowHeight * 0.75 && sectionTop > -sectionHeight) {
      aboutSection.classList.add('visible');
    } else {
      aboutSection.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', onScroll);
  window.addEventListener('resize', onScroll);
  onScroll();
});


document.addEventListener('DOMContentLoaded', function () {
  const featuresSection = document.querySelector('.container-features');

  function onScroll() {
    const sectionTop = featuresSection.getBoundingClientRect().top;
    const sectionBottom = featuresSection.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.75 && sectionTop > -sectionBottom) {
      featuresSection.classList.add('visible');
    } else {
      featuresSection.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', onScroll);
  window.addEventListener('resize', onScroll);
  onScroll();
});


document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.container-testimonial');

  function onScroll() {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      if (sectionTop < windowHeight * 0.75 && sectionTop > -sectionHeight) {
        section.classList.add('visible');
      } else {
        section.classList.remove('visible');
      }
    });
  }

  window.addEventListener('scroll', onScroll);
  window.addEventListener('resize', onScroll);
  onScroll();
});


document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-link');

  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    navLinks.forEach((link, index) => {
      const linkTop = link.getBoundingClientRect().top + window.scrollY;
      if (scrollTop + window.innerHeight > linkTop) {
        setTimeout(() => {
          link.classList.add('fade-up');
        }, index * 300);
      } else {
        link.classList.remove('fade-up');
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();
});


document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-link');
  const aboutLink = document.querySelector('.nav-link[href="#about"]');
  const aboutSection = document.getElementById('about');

  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    navLinks.forEach((link, index) => {
      const linkTop = link.getBoundingClientRect().top + window.scrollY;
      if (scrollTop + window.innerHeight > linkTop) {
        setTimeout(() => {
          link.classList.add('fade-up');
        }, index * 100);
      } else {
        link.classList.remove('fade-up');
      }
    });
  }

  function smoothScroll(target, duration) {
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }

  aboutLink.addEventListener('click', function (event) {
    event.preventDefault();
    smoothScroll(aboutSection, 1500);
    setTimeout(() => {
      aboutSection.classList.add('fade-in');
    }, 1600);
  });

  window.addEventListener('scroll', function () {
    const sectionTop = aboutSection.getBoundingClientRect().top;
    if (sectionTop > window.innerHeight || sectionTop < -aboutSection.offsetHeight) {
      aboutSection.classList.remove('fade-in');
    }
  });

  window.addEventListener('scroll', handleScroll);
  handleScroll();
});




document.querySelectorAll('.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 2000;

    let start = null;

    window.requestAnimationFrame(function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const currentScrollPosition = easeInOutCubic(progress, startPosition, distance, duration);
      window.scrollTo(0, currentScrollPosition);
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    });

    function easeInOutCubic(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t * t + b;
      t -= 2;
      return c / 2 * (t * t * t + 2) + b;
    }
  });
});

document.querySelectorAll('.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href').substring(1);
    if (document.getElementById(targetId)) {
      e.preventDefault();
      smoothScroll(document.getElementById(targetId), 2000);
    } else {
      window.location.href = this.getAttribute('href');
    }
  });
});


//FOR community fade up
document.addEventListener('DOMContentLoaded', function () {
  const fadeUpElements = document.querySelectorAll('.fade-up');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 800);
      } else {
        entry.target.classList.remove('visible');
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  fadeUpElements.forEach(element => {
    observer.observe(element);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const animatedElements = document.querySelectorAll('.slide-in-left, .zoom-in, .bounce-in, .side-fade-in, .slide-fade-up');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 700);
      } else {
        entry.target.classList.remove('visible');
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  animatedElements.forEach(element => {
    observer.observe(element);
  });
});



function showCategory(category) {
  document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('nav ul li a');
    navItems.forEach(item => {
      item.addEventListener('click', function (event) {
        navItems.forEach(nav => nav.parentElement.classList.remove('active'));
        this.parentElement.classList.add('active');
      });
    });
  });
  var menuSections = document.querySelectorAll('.menu-section');
  menuSections.forEach(function (section) {
    section.style.display = 'none';
  });

  var selectedCategory = document.getElementById(category);
  if (selectedCategory) {
    selectedCategory.style.display = 'grid';
  }
  var categoryButtons = document.querySelectorAll('.categories button');
  categoryButtons.forEach(function (button) {
    button.style.display = 'block';
  });

  var selectedButton = document.querySelector('.categories button[value="' + category + '"]');
  if (selectedButton) {
    selectedButton.style.display = 'block';
  }

  selectedCategory.scrollIntoView({ behavior: 'smooth' });
}

window.onload = function () {
  showCategory('appetite');
};


function showCategory(category) {
  var menuSections = document.querySelectorAll('.menu-section');
  menuSections.forEach(function (section) {
      section.style.display = 'none';
  });

  var selectedCategory = document.getElementById(category);
  if (selectedCategory) {
      selectedCategory.style.display = 'grid';
  }

  var categoryButtons = document.querySelectorAll('.categories button');
  categoryButtons.forEach(function (button) {
      button.classList.remove('active');
  });

  var selectedButton = document.querySelector('.categories button[value="' + category + '"]');
  if (selectedButton) {
      selectedButton.classList.add('active');
  }

  selectedCategory.scrollIntoView({ behavior: 'smooth' });
}


document.addEventListener('DOMContentLoaded', function() {
  var addToCartButtons = document.querySelectorAll('.pork-item .add-to-cart-btn');

  addToCartButtons.forEach(function(button) {
      button.addEventListener('click', function() {
          var itemImage = button.parentElement.querySelector('img').src;
          var itemName = button.parentElement.querySelector('h2').textContent;
          var itemDescription = button.parentElement.querySelector('p').textContent;
          var itemPrice = button.parentElement.querySelector('.price').textContent;

          addToCart(itemImage, itemName, itemDescription, itemPrice);
      });
  });

  function addToCart(image, name, description, price) {
      var cartPane = document.getElementById('cartPane');
  }
});
