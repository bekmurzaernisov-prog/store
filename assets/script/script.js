const container = document.querySelector('.container')

// const h2 = document.createElement('h2')
// h2.innerText = 'HHELO WORLD'
// h2.className = 'title'

// container.append(h2)

const createCard = (image, title, price) => {
    const card = document.createElement('div')
    card.className = 'card'

    const divImg = document.createElement('div')
    divImg.className = 'card__img'

    const img = document.createElement('img')
    img.src = image

    const h4 = document.createElement('h4')
    h4.className = 'card__title'
    h4.innerText = title

    const p = document.createElement('p')
    p.className = 'card__prise'
    p.innerText = price

    divImg.append(img)

    card.append(divImg)
    card.append(h4)
    card.append(p)

    container.append(card)
}

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then((data) => {
        data.forEach((product) => {
            createCard(product.image, product.title, product.price)
        })
    })