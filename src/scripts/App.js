// ----- Header
const navLinksContainer = document.querySelector('.nav-links')
const mobileNavMenuLinksContainer = document.querySelector('.mobile-menu-links-container')
const navMenButton = document.querySelector('.nav-menu-btn')
const navMenuImage = document.getElementById('hamburger-menu')

let navLinks = {
  className: "nav-links",
  links: ['News','Sports','Business','Opinion','Tech','Money','Life', 'Style','Travel','Culture','Puzzle']
}

const { links } = navLinks

links.forEach(function(link) {
  
  var navLink = document.createElement('a')
  navLink.href = "/"
  navLink.innerText = link
  navLink.className = "nav-link font-sm"

  var mobileLink = document.createElement('a')
  mobileLink.href = "/"
  mobileLink.innerText = link
  mobileLink.className = "mobile-menu-link font-md font-light"

  navLinksContainer.appendChild(navLink)
  mobileNavMenuLinksContainer.appendChild(mobileLink)
})

window.addEventListener("click", function (e) {
  var clickedElement = e.target.id 
  
  if(clickedElement === "hamburger-menu" && !mobileNavMenuLinksContainer.classList.contains("active")) {
    navMenuImage.src = "/src/assets/Icons/hamburger-menu-close.png"
    mobileNavMenuLinksContainer.classList.add("active")
  }
  else {
    navMenuImage.src = "/src/assets/Icons/hamburger-menu.png"
    mobileNavMenuLinksContainer.classList.remove("active")
  }
})

