let cartData = [];
let shippingCharge = 30;
let cart_totalAmount = 0

function displayCartItems() {
    cartData = JSON.parse(sessionStorage.getItem('products'))
    console.log("cartData ",cartData);
    // console.log("cart_totalAmount : ",cart_totalAmount);
    
    const totalProduct = document.getElementById("totalProduct");
    const totalAmount = document.getElementById("totalAmount");
    const showCartItem = document.getElementById('showCartItem');

    if (cartData === null || cartData.length === 0) {
        showCartItem.innerHTML = `
        <div class = 'd-flex justify-content-center align-items-center'>
            <h4>Cart is empty</h4>
        </div>
        `
        totalAmount.innerText = cart_totalAmount
    } else {

        showCartItem.innerHTML = ``

        cartData.forEach((item, index) => {
            let row = document.createElement('div');
            row.setAttribute('class', 'row border m-1');
            row.innerHTML = `
            <div class='col-md-3 d-flex justify-content-center align-items-center'>
                <img src=${item.image} alt=${item.title} class='w-75 h-75'>
            </div>
            <div class='col-md-6'>
                <h4 class='mt-4'>${item.title}</h4>
            </div>
            <div class='col-md-3'>
                <div class='d-flex justify-content-between mt-4'>
                    <button class='ms-1 ps-2 pe-2 pb-1' style="border: 0px" onClick="decreaseQuantity(${item.id},${index})">-</button>
                    <p>${item.quantity}</p>
                    <button class='pb-1' style="border: 0px" onClick="increaseQuantity(${item.id})">+</button>
                </div>
                <div class='d-flex justify-content-center mt-4'>
                    <h6>${item.quantity} * ${item.price}</h6>
                </div>
            </div>
        `
            showCartItem.appendChild(row)
        })

    }

    // for total cart item and price
    totalProduct.innerText = cartData.length
    cart_totalAmount = shippingCharge + cartData.reduce((acc, curr) => {
        return acc + (curr.price * curr.quantity);
    }, 0);
    totalAmount.innerText = "$ " + cart_totalAmount.toFixed(2)
}

displayCartItems()


function increaseQuantity(id) {
    const getItem = cartData.find((item) => {
        return item.id === id
    })
    getItem.quantity = getItem.quantity + 1;
    sessionStorage.setItem("products", JSON.stringify(cartData));
    displayCartItems();
}

function decreaseQuantity(id, index) {
    const getItem = cartData.find((item) => {
        return item.id === id
    })

    if (getItem.quantity === 1) {
        cartData.splice(index, 1);
    } else {
        getItem.quantity = getItem.quantity - 1;
    }
    sessionStorage.setItem("products", JSON.stringify(cartData));
    displayCartItems();
}