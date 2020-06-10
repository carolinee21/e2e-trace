import productsList from './AllProducts.js'

export default class FoodVendor {
    constructor(name, tracer) {
        this.name = name;
        this.products = {};
        this.initializeRandomProductSupply();
        this.tracer = tracer;

        this.hasProduct = async (productName) => {
            console.log("Checking " + this.name + " for product " + productName);
            let delay = 25;
            await new Promise(r => setTimeout(r, delay));
            console.log("...done!");
            return (productName in this.products);
        }

        this.getProductInfo = async (productName) => {
            console.log("Getting product info for " + this.name + " for product " + productName);

            let delay = 100;
            await new Promise(r => setTimeout(r, delay));
            console.log("...done!");

            var productInfo = this.products[productName];
            return this.products[productName];
        }
    }

    initializeRandomProductSupply () {
        for (var productName of productsList) {
            const containsProduct = Math.random() > 0.5;
            if (containsProduct) {
                let quantity = Math.floor(Math.random()*10) + 1;
                let price = Number(Math.round(Math.random()*5+'e2')+'e-2');
                var productInfo = {};
                productInfo.quantity = quantity;
                productInfo.price = price;
                this.products[productName] = productInfo;

            }
        }
        // console.log(this.products);
        // console.log("Initialized product supply for vendor " + this.name);
    }
}