const crew = `[
    {
      "name": "Douglas Hurley",
      "images": {
        "png": "../assets/crew/image-douglas-hurley.png",
        "webp": "../assets/crew/image-douglas-hurley.webp"
      },
      "role": "Commander",
      "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
      "name": "Mark Shuttleworth",
      "images": {
        "png": "../assets/crew/image-mark-shuttleworth.png",
        "webp": "../assets/crew/image-mark-shuttleworth.webp"
      },
      "role": "Mission Specialist",
      "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
      "name": "Victor Glover",
      "images": {
        "png": "../assets/crew/image-victor-glover.png",
        "webp": "../assets/crew/image-victor-glover.webp"
      },
      "role": "Pilot",
      "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
      "name": "Anousheh Ansari",
      "images": {
        "png": "../assets/crew/image-anousheh-ansari.png",
        "webp": "../assets/crew/image-anousheh-ansari.webp"
      },
      "role": "Flight Engineer",
      "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
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

const dataCrew = JSON.parse(crew);

const douglas = document.querySelector('#Douglas');

douglas.addEventListener('click',()=>{
    let pointerMark = document.querySelector('#Mark')
    let pointerVictor = document.querySelector('#Victor')
    let pointerAnousheh = document.querySelector('#Anousheh')
    document.querySelector('#position-crew').innerHTML = dataCrew[0].role;
    document.querySelector('#name-crew').innerHTML = dataCrew[0].name;
    document.querySelector('#about-crew').innerHTML = dataCrew[0].bio;
    document.querySelector('#crew-img').src = dataCrew[0].images.png;
    douglas.classList.add('active')
    pointerMark.classList.remove('active')
    pointerVictor.classList.remove('active')
    pointerAnousheh.classList.remove('active')
})

const mark = document.querySelector('#Mark');

mark.addEventListener('click',()=>{
    let pointerDouglas = document.querySelector('#Douglas')
    let pointerVictor = document.querySelector('#Victor')
    let pointerAnousheh = document.querySelector('#Anousheh')
    document.querySelector('#position-crew').innerHTML = dataCrew[1].role;
    document.querySelector('#name-crew').innerHTML = dataCrew[1].name;
    document.querySelector('#about-crew').innerHTML = dataCrew[1].bio;
    document.querySelector('#crew-img').src = dataCrew[1].images.png;  
    mark.classList.add('active')
    pointerDouglas.classList.remove('active')
    pointerVictor.classList.remove('active')
    pointerAnousheh.classList.remove('active')

})

const victor = document.querySelector('#Victor');

victor.addEventListener('click',()=>{
    let pointerDouglas = document.querySelector('#Douglas')
    let pointerMark = document.querySelector('#Mark')
    let pointerAnousheh = document.querySelector('#Anousheh')
    document.querySelector('#position-crew').innerHTML = dataCrew[2].role;
    document.querySelector('#name-crew').innerHTML = dataCrew[2].name;
    document.querySelector('#about-crew').innerHTML = dataCrew[2].bio;
    document.querySelector('#crew-img').src = dataCrew[2].images.png;
    victor.classList.add('active')
    pointerDouglas.classList.remove('active')
    pointerMark.classList.remove('active')
    pointerAnousheh.classList.remove('active')
})

const anousheh = document.querySelector('#Anousheh');

anousheh.addEventListener('click',()=>{
    let pointerDouglas = document.querySelector('#Douglas')
    let pointerMark = document.querySelector('#Mark')
    let pointerVictor = document.querySelector('#Victor')
    document.querySelector('#position-crew').innerHTML = dataCrew[3].role;
    document.querySelector('#name-crew').innerHTML = dataCrew[3].name;
    document.querySelector('#about-crew').innerHTML = dataCrew[3].bio;
    document.querySelector('#crew-img').src = dataCrew[3].images.png;
    anousheh.classList.add('active')
    pointerDouglas.classList.remove('active')
    pointerMark.classList.remove('active')
    pointerVictor.classList.remove('active')
})

