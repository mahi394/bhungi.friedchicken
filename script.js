// function scrollToSection(id) {
//     const section = document.getElementById(id);
//     window.scrollTo({
//         top: section.offsetTop,
//         behavior: 'smooth'
//     });
// }


// window.addEventListener('scroll', function() {
//     const button = document.querySelector('.hero-button');
//     const scrollPosition = window.scrollY;
//     const triggerPoint = 300;

//     if (scrollPosition > triggerPoint) {
      
//         if (!button.classList.contains('visible')) {
//             button.classList.add('visible');
//         }
//     } else {

// });






// A simple JavaScript to handle "Order Now" button clicks
document.querySelectorAll('.order-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert("Thank you for your order! Your delicious food is on the way.");
    });
});
