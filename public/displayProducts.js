const url = '/api/v1/products'

const container = document.querySelector('.products-container');

const addToCart = (id) => {
    const added = axios.post('/api/v1/cart', {_id: id})
}

async function fetchProducts() {
    try {
        const {
            data: { products }
        } = await axios.get(url);
        const tempProducts = products.map(each => {
            return `<article class="product">
            <img src="${each.image}" alt="${each.name}" class"img"/>
            <footer><p>${each.name}</p>
            <button onclick="addToCart('${each._id}')">Doesn't Work (ATC)</a>
            <span>${each.price}</span></footer></article>`
        }).join("")
        container.innerHTML = tempProducts;
    } catch (err) {
        console.log(err);
    }
}

fetchProducts();