'use strict'

export function reponsive(){
  const menu = document.getElementById('menu');
  const navbarLinks = document.getElementById('navbarLinks');


  menu.addEventListener('click', ()=>{
    navbarLinks.classList.toggle('ocultar');
  })
}