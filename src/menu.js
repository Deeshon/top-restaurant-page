    const menuContent = () => {
    const menuContainer = document.createElement('div')
    // const menuTitle = document.createElement('div')
    // const div = document.createElement('div')
    // const p1 = document.createTextNode('p')
    // const menuTitleImg = document.createElement('div')
    // const menuContent = document.createElement('div')
    // const menuItem = document.createElement('div')
    // const itemImage = document.createElement("div")
    // const itemContent = document.createElement("div")
    // const p2 = document.createElement("p")
    // const hr = document.createElement('hr')
    // const p3 = document.createElement("p")


    // p1.textContent = "Menu"
    // p2.textContent = "Hamburger"
    // p3.textContent = "Buns, patty, tomato, onions, lettuce, and our secret family recipe."
    

    menuContainer.classList.add('menu-container')
    // menuTitle.classList.add("menu-title")
    // menuTitleImg.classList.add("menu-title-img")
    // menuContent.classList.add("menu-content")
    // menuItem.classList.add("menu-item")
    // itemImage.classList.add("item-img")
    // itemContent.classList.add("item-content")

    // div.appendChild(p1)
    // menuTitle.appendChild(div)
    // menuTitle.appendChild(menuTitleImg)
    // itemContent.appendChild(p2)
    // itemContent.appendChild(hr)
    // itemContent.appendChild(p3)
    // menuItem.appendChild(itemImage)
    // menuItem.appendChild(itemContent)
    
    // menuContent.append(menuItem)


    // menuContainer.appendChild(menuTitle)
    // menuContainer.appendChild(menuContent)

    menuContainer.innerHTML = `
        <div class="menu-title">
            <div>
                <p>Menu</p>
            </div>
            <div class="menu-title-img">
            </div>
        </div>
        <div class="menu-content">
            <div class="menu-item">
                <div class="item-img"></div>
                <div class="item-content">
                    Hamburger
                    <hr>
                    Buns, patty, tomato, onions, lettuce, and our secret family recipe.
                </div>
            </div>
            <div class="menu-item">
                <div class="item-img"></div>
                <div class="item-content">
                    Hamburger
                    <hr>
                    Buns, patty, tomato, onions, lettuce, and our secret family recipe.
                </div>
            </div>
            <div class="menu-item">
                <div class="item-img"></div>
                <div class="item-content">
                    Hamburger
                    <hr>
                    Buns, patty, tomato, onions, lettuce, and our secret family recipe.
                </div>
            </div>
        </div>
    `

    return menuContainer
}

export default menuContent