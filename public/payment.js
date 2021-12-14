const purchase = [
    
]

// ^^^^ THIS IS SUPPOSED TO BE THE CARD ELEMENT

require('dotenv').config();

var stripe = Stripe(
    'pk_test_51K49zxCv8WMtKDPm92T3EISbb3TNG9Tgh3F7HN9KTvMclAee4H2c8iYYD2eDtrwOJObSziMIlKEFu4UjQbWherd200YOvqABFc'
);

// ^^^^ ABOVE SHOULD BE IN THE .ENV FILE

document.querySelector('button').disabled = true;
fetch('/stripe', {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ purchase, total_amount, shipping_fee })
})
    .then(function (result) {
        return result.json()
    })
    .then(function (data) {
        var elements = stripe.elements();

        var style = {
            base: {
                color: "#3c24e3",
                fontFamily: "Arial, sans-serif",
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                    color: "#3c24e3"
                }
            },
            invalid: {
                fontFamily: "Arial, sans-serif",
                fontSmoothing: "antialiased",
                color: '#ff9900',
                iconColor: '#fa9999'
            }
        }

        var card = elements.create("card", {style: style});
        card.mount('#card-element');
        card.on("change", function(event) {
            document.querySelector('button').disabled = event.empty;
            document.querySelector('#card-error').textContent = event.error ? event.error.message : ""
        })

        var form = document.getElementById('payment-form');
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            payWithCard(stripe, card, data.clientSecret)
        })
    })

    // call stripe.confirmCardPayment
    // if card requires authentication stripe shows popup modal to
    // prompt user to enter auth info w/o leaving checkout

    const payWithCard = function (stripe, card, clientSecret) {
        loading(true);
        stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card
            }
        })
        .then(function (result) {
            if(result.error) {
                showError(result.error.message) 
            } else {
                orderComplete(result.paymentIntent.id)
            }
        })
    }

    const orderComplete = function (paymentIntentId) {
        loading(false);
        document
            .querySelector('.result-message a')
            .setAttribute('href', 
            "https://dashboard.stripe.com/dashboard" + paymentIntentId);
        document.querySelector('.result-message').classList.remove('hidden');
        document.querySelector('button').disabled = true;
    }

    const showError = function (errorMsgText) {
        loading(false);
        const errorMessage = document.querySelector('#card-error');
        errorMessage.textContent = errorMsgText;
        setTimeout(() => {
            errorMessage.textContent = ''
        }, 4000)
    }

const loading = function (isLoading) {
    if(isLoading) {
        document.querySelector('button').disabled = true;
        document.querySelector('#spinner').classList.remove('hidden');
        document.querySelector('#button-text').classList.add('hidden');
    } else {
        document.querySelector('button').disabled = false;
        document.querySelector('#spinner').classList.add('hidden');
        document.querySelector('#button-text').classList.remove('hidden');
    }
}