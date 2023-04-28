import coffeeStock from "./module.js";

const displayStock = stock => {
    for (const type in stock) {
        console.log(type)
    }
}

displayStock(coffeeStock);

// console.log(coffeeStock);