const image = document.querySelector('.image');
const hover = document.querySelector('.hover');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

function show(){
    modal.classList.add('show');
}

function hide(){
    modal.classList.remove('show');
}

image.addEventListener('click', show);
close.addEventListener('click', hide);