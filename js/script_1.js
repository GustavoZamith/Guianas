const btnMobile = document.getElementById('btn-mobile');


function toggleMenu() {
    const navMobile = document.getElementById('nav');
    navMobile.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);