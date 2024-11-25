// function for About Page
const ourProducts = document.getElementById("ourProducts");
async function fiveProducts() {
    const getData = await fetch(`https://fakestoreapi.com/products?limit=5`);
    const res = await getData.json();
    res.forEach((item, index) => {
        const col = document.createElement('div');
        col.setAttribute('class', 'col-md');
        col.innerHTML = `
        <div class = 'd-flex justify-content-center'>
            <img src = ${item.image} alt = ${item.id}>
        </div>
        <div class = 'd-flex justify-content-center mt-2'>
            <h5>${item.category}</h5>
        </div>
    `
        ourProducts.appendChild(col);
    })
}
fiveProducts();