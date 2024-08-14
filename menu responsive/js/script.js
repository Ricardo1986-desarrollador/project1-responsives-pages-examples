const toggleMenuElement = document.getElementById('toogle-menu');
const mainMenuElement = document.getElementById('main-menu')

toggleMenuElement.addEventListener('click',()=>{
mainMenuElement.classList.toggle('main-menu--show');
});