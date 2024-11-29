function getSingleProduct() {
    const showSingleProdct = document.getElementById("showSingleProdct");
    showSingleProdct.innerHTML = ``;
    let product = JSON.parse(sessionStorage.getItem("product"))
    // console.log(product);

    const row = document.createElement('div');
    row.setAttribute('class', 'row mt-4 ')
    row.innerHTML = `
    <div class = "col-md-4 productImg">
        <img src = "${product.image}" alt = "IMG">
    </div>
    <div class = "col-md-8 prd">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <h5>Price : $ ${product.price}</h5>
        <p>Rating : ${product.rating.rate}</p>
    </div>
    `
    showSingleProdct.appendChild(row)

    const offer = document.getElementById('offer');
    offer.innerText = `12% off ${product.category}`
}

getSingleProduct()