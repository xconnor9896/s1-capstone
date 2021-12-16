
const container = document.querySelector('.container')

const removeItem = (id) => {
    const removed = axios.delete('/api/v1/cart', {_id: id})
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
                <button onClick="removeItem('${each._id}')">Remove</button>
            </div>`
        }).join("")
        container.innerHTML = tempCart;
    } catch (err) {
        console.log(err);
    }
}

fetchCart();