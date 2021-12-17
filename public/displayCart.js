
const container = document.querySelector('.container')

const updateItem = (id, dir, quant) => {
    const removed = axios.put('/api/v1/cart', {id, dir, quant})
    fetchCart()
}

async function fetchCart() {
    try {
        const {
            data: { cart }
        } = await axios.get('/api/v1/cart');
        const tempCart = cart.map(each => {
            return `<div class="item">
                <h3 class="name">${each.name}<h3>
                <h4 class="price">${each.price}</h4>
                <button onClick="updateItem('${each._id}','plus', '${each.quantity}')">+</button>
                <p>${each.quantity}</p>
                <button onClick="updateItem('${each._id}','minus', '${each.quantity}')">-</button>
            </div>`
        }).join("")
        container.innerHTML = tempCart;
    } catch (err) {
        console.log(err);
    }
}

fetchCart();