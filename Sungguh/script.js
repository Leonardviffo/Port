// $(document).ready(function () {
    
//     $('#menu').click(function () {
//         $(this).toggleClass('bx bx-x');
//         $('header').toggleClass('toggle');
//     }); $(window).on('scroll load', function () {
        
//         $('#menu').removeClass('bx bx-x');
//         $('header').removeClass('toggle');

//     });
// });

// window.addEventListener('scroll', function () {
//     header.classList.remove('toggle');
// });

const MenuX = document.getElementById('menu');
const MenuToggle = document.getElementById('menu');
const header = document.querySelector('header');

MenuToggle.addEventListener('click', function () {
    header.classList.toggle('toggle');
    MenuX.classList.toggle('active');
});

