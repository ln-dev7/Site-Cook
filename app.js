window.addEventListener('scroll', (e)=>{
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})

function toggleMenu(){
    let menuToggle = document.querySelector('.menuToggle');
    let navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}