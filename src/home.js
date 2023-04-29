const homeContent = () => {
    const mainContainer = document.createElement('div')
    const contentTitle = document.createElement('div')
    const h2 = document.createElement('h2')
    const subTitle = document.createElement('div')
    const h3 = document.createElement('h3')
    const order = document.createElement('div')
    const orderBtn = document.createElement('button')

    h2.textContent = "Indulge in a culinary adventure with us, one bite at a time!"
    h3.textContent = "Tasty and Affordable"
    orderBtn.textContent = "Order now!"

    contentTitle.appendChild(h2)
    subTitle.appendChild(h3)
    order.appendChild(orderBtn)

    contentTitle.classList.add("content-title")
    subTitle.classList.add("sub-title")
    order.classList.add("order")
    orderBtn.classList.add("order-btn")
    mainContainer.classList.add("main-container")


    mainContainer.appendChild(contentTitle)
    mainContainer.appendChild(subTitle)
    mainContainer.appendChild(order)

    return mainContainer
}

export default homeContent


