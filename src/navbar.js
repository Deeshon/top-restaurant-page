const headerContent = () => {

    const header = document.createElement("div")
    const navTitle = document.createElement("div")
    const h1 = document.createElement("h1")
    const navContent = document.createElement("div")
    const nav = document.createElement("nav")
    const homeButton = document.createElement("button")
    const menuButton = document.createElement("button")
    const contactButton = document.createElement("button")
    const dropdown = document.createElement("button") 
    
    header.classList.add("header")
    navTitle.classList.add("nav-title")
    navContent.classList.add("nav-content")
    nav.classList.add("nav-")
    homeButton.classList.add("home")
    menuButton.classList.add("menu")
    contactButton.classList.add("contact")
    dropdown.classList.add("dropdown")
    
    h1.textContent = "GormetGlobal"
    homeButton.textContent = "Home"
    menuButton.textContent = "Menu"
    contactButton.textContent = "Contact"

    navTitle.appendChild(h1)
    nav.appendChild(homeButton)
    nav.appendChild(menuButton)
    nav.appendChild(contactButton)
    navContent.appendChild(nav)
    navContent.appendChild(dropdown)
    header.appendChild(navTitle)
    header.appendChild(navContent)

    return header
}

export default headerContent

