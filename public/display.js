const url = '/api/v1/products'

const container = document.querySelector('.products-container');

async function fetchProducts() {
    try {
        const {
            data: { products }
        } = await axios.get(url);
        const tempProducts = products.map(each => {
            return `<article class="product">
            <img src="${each.image}" alt="${each.name}" class"img"/>
            <footer><p>${each.name}</p>
            <button onclick="">Doesn't Work (ATC)</a>
            <span>${each.price}</span></footer></article>`
        }).join("")
        container.innerHTML = tempProducts;
    } catch (err) {
        console.log(err);
    }
}

fetchProducts();