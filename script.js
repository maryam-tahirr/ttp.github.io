document.addEventListener('DOMContentLoaded', function() {
    var navlogo = document.getElementById('navlogo');
    var nav = document.getElementById('nav');
    var closenav = document.getElementById('closenav');
    var mainslider = document.getElementById('slidermain');

    navlogo.addEventListener('click', function() {
        nav.classList.add('show');
        navlogo.style.display = 'none';
        nav.classList.add('slide-in');
        setTimeout(() => {
            nav.classList.remove('slide-in');
        }, 1000);
        mainslider.classList.add('blueOverlay');
    });

    closenav.addEventListener('click', function() {
        console.log("Close button clicked");
        nav.classList.add('slide-out');
        console.log("slide-out class added");

        nav.addEventListener('animationend', function() {
            nav.classList.remove('slide-out');
            console.log("slide-out class removed");
            nav.classList.remove('show');
            navlogo.style.display = 'block';
        }, { once: true });

        mainslider.classList.remove('blueOverlay');
    });
});



/////////////////////////////Main Slider
var nextimage = document.getElementById('next');
var previmage = document.getElementById('prev');
const main = document.getElementById('slidermain');
var place = document.querySelector('.sliderh1');
let images = [
"./images/uae.jpg",
"./images/Qatar.jpg",
"./images/uk.jpg",
"./images/africanregions.jpg",
"./images/Oman.jpg",
"./images/kuwait.jpg",
"./images/bahrain.jpg",
"./images/pakistan.jpg",
"./images/saudiarabia.jpg"
];
let placesnames = [
    "United Arab Emirates",
    "Qatar",
    "United Kingdom",
    "African Regions",
    "Oman",
    "Kuwait",
    "Bahrain",
    "Pakistan",
    "Saudi Arabia"
]
let current = 0;
main.style.backgroundImage = `url('${images[0]}')`;

function changeImage(index) {
    main.style.backgroundImage = `url('${images[index]}')`;
    place.textContent = placesnames[index];
    
}
  
  nextimage.addEventListener('click', function(){
      current += 1;
      if (current >= images.length) {
          current = 0;
      }
      changeImage(current);
  });
  
  previmage.addEventListener('click',function(){
      current -= 1;
      if (current < 0) {
          current = images.length - 1; 
      }
      changeImage(current);
  });
  document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowUp") {
            current -= 1;
        if (current < 0) {
            current = images.length - 1; 
        }
        changeImage(current);
      } else if (event.key === "ArrowDown") {
        current += 1;
      if (current >= images.length) {
          current = 0;
      }
      changeImage(current);
      }
    });

    // Function to change image automatically
    function autoChangeImage() {
        current+=1;
        if (current >= images.length) {
            current = 0;
        }
        changeImage(current);
    }
      // Start auto changing image every 3 seconds
    setInterval(() => {
        autoChangeImage();
    }, 5000);
//////////////////////////////////////about us



//////////////////////////////////////////countdown
document.addEventListener('DOMContentLoaded', () => {
    const countdownElements = document.querySelectorAll('.countdown');
    let triggered = false;

    const startCount = (element) => {
        const target = +element.getAttribute('data-target');
        const step = target / 40;
        let count = 0;

        const updateCount = () => {
            count += step;
            if (count < target) {
                element.innerText = Math.ceil(count);
                requestAnimationFrame(updateCount);
            } else {
                element.innerText = target;
                if (target === 999) {
                    element.innerText += '+';
                }
            }
        };
        updateCount();
    };

    const handleScroll = () => {
        if (!triggered && countdownElements[0].getBoundingClientRect().top < window.innerHeight) {
            countdownElements.forEach(el => startCount(el));
            triggered = true;
        }
    };

    window.addEventListener('scroll', handleScroll);
});