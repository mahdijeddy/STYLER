// ----------------------------------variables-------------/
let menuIcon=document.querySelector('#menuicon')
let menu=document.querySelector('.menu')
let nighticon=document.querySelector('.nighticon')
let dayticon=document.querySelector('.dayticon')
let body =  document.getElementsByTagName('body');
let show = false


// ------------------------------------Events--------------------
function events(){
    menuIcon.addEventListener('click',showMenu)
    nighticon.addEventListener('click', nightF)
    dayticon.addEventListener('click', dayF)
    
    
}
events()




//------------------------------------functions---------------------
function showMenu(){
    show = !show
    if(show){
        menu.classList.add('menuD')
        menu.classList.remove('menu')
    }else{
        menu.classList.add('menu')
        menu.classList.remove('menuD')
    }
  
}
// ---------------night toggler ----------------
function nightF(){
 
   document.body.classList.add('body')
   nighticon.style.display='none'
   dayticon.style.display='block'
}
function dayF(){
    document.body.classList.remove('body')
    nighticon.style.display='block'
    dayticon.style.display='none'
}