
export const renderCard = (data, container) => {
    const fragment = document.createDocumentFragment();
    const getDataContainer = document.querySelector(container);

    if (!data || data.length === 0) {
        const noProductsMessage = document.createElement('h2');
        noProductsMessage.classList.add('section-h2');
        noProductsMessage.textContent = 'No se encuentran productos';
        fragment.appendChild(noProductsMessage);
    } else {
        data.forEach((card) => {
            const createDiv = document.createElement('div');
            createDiv.classList.add('card');
            createDiv.innerHTML = `
                <img src="${card.img}" alt="${card.id}" class="card-img">
                <h3 class="card-title">${card.name}</h3>
                <p class="card-price">
                    $ <span class="card-price-number">${card.price}</span>
                </p>
                <div hidden>${card.id}</div>
                <img src="./public/img/icon.png" alt="delete" class="card-icon">
            `;
            fragment.appendChild(createDiv);
        });
    }

    getDataContainer.appendChild(fragment);
}
/* <div class="card">
            <img src="./public/img/image 2.png" alt="img2" class="card-img">
            <h3 class="card-title">Game Boy Classic</h3>
            <p class="card-price">$ 
            <span class="card-price-number">60</span></p>
            <img src="./public/img/icon.png" alt="delete" class="card-icon">

        </div> */