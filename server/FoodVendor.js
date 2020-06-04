// var AllProducts = ["apple", "banana", "carrot"];
import productsList from '../AllProducts'
// function Product(name, price, quantity) {
//     this.name = name;
//     this.price = price;
//     this.quantity = quantity;
// }

export default class FoodVendor {
    constructor(name) {
        this.name = name;
        this.products = {};
        initializeRandomProductSupply();
    }

    //  TODO -> make sure it is private. Possibly add some delays?
    initializeRandomProductSupply () {
        for (productName in productsList) {
            const containsProduct = Math.random > 0.5;
            if (containsProduct) {
                let quantity = Math.floor(Math.random()*10) + 1;
                let price = Number(Math.round(Math.random()*5+'e2')+'e-2');
                products[productName] = {};
                products[productName].quantity = quantity;
                products[productName].price = price;

            }
        }
    }

    hasProduct = (productName) => {
        return (!this.products[productName]);
    }

    getProductInfo = (productName) => {
        return this.products[productName] || {};
    }
}