const openMenu = document.querySelector('.hamburger')
const closeMenu = document.querySelector('.close')

function toggleOpenMenu(event){
    if(event.type ==='click')event.preventDefault()
    let menuArea = document.querySelector('.list-menu-area-mobile')
    menuArea.classList.remove('animation-close')
    menuArea.classList.add('animation-open')
    openMenu.style.display = 'none'
    closeMenu.style.display = 'flex'


}

openMenu.addEventListener('click',toggleOpenMenu)

function toggleCloseMenu(event){
    let closeMenuArea = document.querySelector('.list-menu-area-mobile')
    closeMenuArea.classList.add('animation-close')
    closeMenuArea.classList.remove('animation-open')
    openMenu.style.display = 'flex'
    closeMenu.style.display = 'none'
}

closeMenu.addEventListener('click',toggleCloseMenu)
