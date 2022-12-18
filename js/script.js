// ----------------------------------variables-------------/
let menuIcon=document.querySelector('#menuicon')
let menu=document.querySelector('.menu')
let nighticon=document.querySelector('.nighticon')
let dayticon=document.querySelector('.dayticon')
let body =  document.getElementsByTagName('body');
let compBtn =  document.querySelector('.compBtn');
let compMenu =  document.querySelector('.compMenu');
let arrup =  document.querySelector('.arrup');
let arrdown =  document.querySelector('.arrdown');
let L1 =  document.querySelector('#L1');
let L2 =  document.querySelector('#L2');
let L3 =  document.querySelector('#L3');
let L31 =  document.querySelector('.L31');
let L32 =  document.querySelector('.L32');
let L33 =  document.querySelector('.L33');
let L34 =  document.querySelector('.L34');
let L35 =  document.querySelector('.L35');
let L4 =  document.querySelector('#L4');
let L5 =  document.querySelector('#L5');
let navBar =  document.querySelector('.navBar');
let ScrollIconsTop =  document.querySelector('.ScrollIconsTop');
let ScrollIconsHome =  document.querySelector('.ScrollIconsHome');
let show = false


// ------------------------------------Events--------------------
function events(){
    menuIcon.addEventListener('click',showMenu)
    nighticon.addEventListener('click', nightF)
    dayticon.addEventListener('click', dayF)
    compBtn.addEventListener('click', showComp)
    L1.addEventListener('click', scrollL1)
    L2.addEventListener('click', scrollL2)
    L31.addEventListener('click', scrollL31)
    L32.addEventListener('click', scrollL32)
    L33.addEventListener('click', scrollL33)
    L34.addEventListener('click', scrollL34)
    L35.addEventListener('click', scrollL35)
    L4.addEventListener('click', scrollL4)
    L5.addEventListener('click', scrollL5)
    ScrollIconsHome.addEventListener('click', ScrollHome)
    ScrollIconsTop.addEventListener('click',ScrollTop)
    document.addEventListener('scroll',scrollCheck)
    
 
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
function showComp(){
    if (compMenu.style.display == 'block') {
        compMenu.style.display = 'none'
        arrup.style.display='none'
        arrdown.style.display='block'


    }else{
        compMenu.style.display = 'block'
        arrdown.style.display='none'
        arrup.style.display='block'


    }

}
function ScrollTop(){
  if (scrollY >= 2179 && scrollY < 3679 ) {
    scrollTo(0,2179)
  }
  if (scrollY >= 3679 && scrollY < 4779 ) {
    scrollTo(0,3678)
  }
  if (scrollY >= 4779 && scrollY < 5579 ) {
    scrollTo(0,4778)
  }
  if (scrollY >= 5579 && scrollY < 8279 ) {
    scrollTo(0,5578)
  }
  if (scrollY >= 8279 && scrollY < 9479 ) {
    scrollTo(0,8278)
  }
  if (scrollY >= 9479 && scrollY < 10479 ) {
    scrollTo(0,9478)
  }
  if (scrollY >= 10479 && scrollY < 14779 ) {
    scrollTo(0,10478)
  }
  if (scrollY > 14779) {
    scrollTo(0,14778)
  }
}
function scrollL1(){
    scrollTo(0 , 779)
  showMenu()

}
function scrollL2(){
    scrollTo(0 , 2179)
  showMenu()
}
function scrollL31(){
    scrollTo(0 , 3609)
  showMenu()
}
function scrollL32(){
    scrollTo(0 , 4650)
  showMenu()
}
function scrollL33(){
    scrollTo(0 , 5450)
  showMenu()
}
function scrollL34(){
    scrollTo(0 , 8100)
  showMenu()
}
function scrollL35(){
    scrollTo(0 , 9300)
  showMenu()
}
function scrollL4(){
    scrollTo(0 , 10340)
  showMenu()
}
function scrollL5(){
    scrollTo(0 , 14500)
  showMenu()
}

function scrollCheck(){
    if (scrollY > 1600) {
        ScrollIconsHome.style.display='flex'
    }else{
        ScrollIconsHome.style.display='none'

        
        
    }
    if (scrollY > 2200) {
        ScrollIconsTop.style.display='flex'
    }else{
        ScrollIconsTop.style.display='none'
    }

    if (scrollY >= 150) {
        navBar.style.boxShadow="0px 0.2px 10px 2px #000000"
        navBar.style.background='linear-gradient(to top ,#f79901,#ffad29,#f79901)'

        }
        else{
            navBar.style.boxShadow="none"
            navBar.style.background='linear-gradient(to top , #f7c201 ,#f7c201)'
        }
}
function ScrollHome(){
    scrollTo(0 , 0)
}

console.log(scrollY);