import './styles.css'
import navbar from './navbar'
import home from './home'
import menu from './menu'

console.log("Hello world")

const content = document.querySelector(".content")

content.appendChild(navbar())
content.appendChild(home())

content.addEventListener("click", function(e){
    if (e.target.classList.contains('menu')) {
        content.textContent = ""
        content.appendChild(navbar())
        content.appendChild(menu())
    } else if (e.target.classList.contains('order-btn')) {
        content.textContent = ""
        content.appendChild(navbar())
        content.appendChild(menu())
    }
    if (e.target.classList.contains('home')) {
        content.textContent = ""
        content.appendChild(navbar())
        content.appendChild(home())
    }
})