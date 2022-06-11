// const products = document.querySelector(".productData")
// fetch("product.json")
//     .then(res => res.json())
//     .then(data => render(data))

// function render(data){
//     data.map(elem=>{
//         const li = document.createElement("li");
//         li.textContent = elem.name
//         userData.append(li)
//     })
// }

const products = document.querySelector(".user-data")
fetch("product.json")
    .then(res => res.json())
    .then(data => render(data))

function render(data){
    data.map(elem => {
        const li = document.createElement("li");
        li.textContent = elem.name
        products.append(li)
    })
}
