const icon = document.querySelector('#icon');
const menu = document.querySelector('#menu');

icon.addEventListener('click', ()=>{
    icon.classList.toggle('bg-menuClose');
    menu.classList.toggle('opacity-0');
    menu.classList.toggle('pointer-events-none');
});

window.addEventListener('resize', ()=>{
    icon.classList.remove('bg-menuClose');
    menu.classList.add('opacity-0');
    menu.classList.add('pointer-events-none');

});