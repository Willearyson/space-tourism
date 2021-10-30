const technology = `[
    {
      "name": "Launch vehicle",
      "images": {
        "portrait": "../assets/technology/image-launch-vehicle-portrait.jpg",
        "landscape": "../assets/technology/image-launch-vehicle-landscape.jpg"
      },
      "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
      "name": "Spaceport",
      "images": {
        "portrait": "../assets/technology/image-spaceport-portrait.jpg",
        "landscape": "../assets/technology/image-spaceport-landscape.jpg"
      },
      "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
      "name": "Space capsule",
      "images": {
        "portrait": "../assets/technology/image-space-capsule-portrait.jpg",
        "landscape": "../assets/technology/image-space-capsule-landscape.jpg"
      },
      "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
  ]`

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

const dataTech = JSON.parse(technology)

const rocket = document.querySelector('#rocket')

rocket.addEventListener('click',()=>{
    let liSpaceport = document.querySelector('#spaceport')
    let liCapsule = document.querySelector('#capsule')
    document.querySelector('#name-technology').innerHTML = dataTech[0].name;
    document.querySelector('#info-technology').innerHTML = dataTech[0].description;
    document.querySelector('#technology-img').src = dataTech[0].images.portrait;
    document.querySelector('#technology-img-tablet-mobile').src = dataTech[0].images.landscape;
    rocket.classList.add('active-nav-tech')
    liSpaceport.classList.remove('active-nav-tech')
    liCapsule.classList.remove('active-nav-tech')    
})

const spaceport = document.querySelector('#spaceport')

spaceport.addEventListener('click',()=>{
    let liRocket = document.querySelector('#rocket')
    let liCapsule = document.querySelector('#capsule')
    document.querySelector('#name-technology').innerHTML = dataTech[1].name;
    document.querySelector('#info-technology').innerHTML = dataTech[1].description;
    document.querySelector('#technology-img').src = dataTech[1].images.portrait;
    document.querySelector('#technology-img-tablet-mobile').src = dataTech[1].images.landscape;
    spaceport.classList.add('active-nav-tech') 
    liRocket.classList.remove('active-nav-tech')
    liCapsule.classList.remove('active-nav-tech')   
})

const capsule = document.querySelector('#capsule')

capsule.addEventListener('click',()=>{
    let liRocket = document.querySelector("#rocket")
    let liSpaceport = document.querySelector('#spaceport')
    document.querySelector('#name-technology').innerHTML = dataTech[2].name;
    document.querySelector('#info-technology').innerHTML = dataTech[2].description;
    document.querySelector('#technology-img').src = dataTech[2].images.portrait;
    document.querySelector('#technology-img-tablet-mobile').src = dataTech[2].images.landscape;
    capsule.classList.add('active-nav-tech') 
    liRocket.classList.remove('active-nav-tech')
    liSpaceport.classList.remove('active-nav-tech')   
})