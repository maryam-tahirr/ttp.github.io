//nav
var navlogo = document.getElementById('navlogo');
var nav = document.getElementById('nav');
var closenav =document.getElementById('closenav');
var mainslider = document.getElementById('slidermain');
navlogo.addEventListener('click',function() {
    nav.classList.add('show');
    navlogo.style.display = 'none';
    nav.classList.add('slide-in');
    setTimeout(() => {
      nav.classList.remove('slide-in'); 
    }, 1000);
    mainslider.classList.add('blueOverlay');
    
});
closenav.addEventListener('click', function() {
    console.log("Close button clicked"); // Debugging statement
    nav.classList.add('slide-out');
    console.log("slide-out class added"); // Debugging statement

    // Instead of setTimeout, use transitionend event to remove the class after the animation completes
    nav.addEventListener('animationend', function() {
        nav.classList.remove('slide-out');
        console.log("slide-out class removed"); // Debugging statement
        nav.classList.remove('show');
        navlogo.style.display = 'block';
    }, { once: true });
    mainslider.classList.remove('blueOverlay');

});

// Getting the empty container to add images
document.querySelector(".container").innerHTML = '';

// Creating an array of image URLs
const imageUrls = [
'images/projectImage1.jpg',
'images/projectImage2.jpg',
'images/projectImage3.jpg',
'images/projectImage4.jpg',
'images/projectImage5.jpg',
'images/projectImage6.jpg',
'images/projectImage7.jpg',
'images/consultancy.jpg',
'images/furniture.jpg',
'images/OSSupplies.jpg',
'images/interior.jpg',
'images/staffaccomodations.jpg',
'images/projectImage1.jpg',
'images/projectImage2.jpg',
'images/projectImage3.jpg',
'images/projectImage4.jpg',
'images/projectImage5.jpg',
'images/projectImage6.jpg',
'images/projectImage7.jpg',
'images/consultancy.jpg',
'images/furniture.jpg',
'images/OSSupplies.jpg',
'images/interior.jpg',
'images/staffaccomodations.jpg',
'images/projectImage1.jpg',
'images/projectImage2.jpg',
'images/projectImage3.jpg',
'images/projectImage4.jpg',
'images/projectImage5.jpg',
'images/projectImage6.jpg',
];

var fragment = document.createDocumentFragment();



// Looping through the image URLs and creating div elements with the images
for (var i = 0; i < imageUrls.length; i++) {
    var item = document.createElement("div"); // Change this to create items with the class 'item'
    item.classList.add('item'); // Add the 'item' class
    item.setAttribute('data-scroll', '');
    item.style.backgroundImage = `url(${imageUrls[i]})`; // Setting the background image
    fragment.appendChild(item);
}


document.querySelector(".container").appendChild(fragment);

// ScrollOut library initialization
ScrollOut({
threshhold: 0.5,
cssProps: {
    visibleY: true
}
});