import productsList from '../AllProducts.js'

export default class FoodVendor {
    constructor(name) {
        this.name = name;
        this.products = {};
        this.initializeRandomProductSupply();
    

        this.hasProduct = (productName) => {
            // console.log("Checking " + this.name + " for product " + productName);
            return (productName in this.products);
        }

        this.getProductInfo = (productName) => {
            var productInfo = this.products[productName];
            // console.log("Product info for " + productName + " is: " + productInfo);
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