import FoodSupplier from "./FoodSupplier";
import productsList from '../AllProducts'

// var AllProducts = ["apple", "banana", "carrot"];


export default class FoodFinder {
    constructor () {
        this.supplier = new FoodSupplier();
    }

    findProduct = (productName) => {
        if (productsList.includes(productName)) {
            let stockedVendors = this.supplier.findVendorsWithProduct(productName);
            var vendorInventory = {}
            for (vendor in stockedVendors) {
                let productInfo = vendor.getProductInfo();
                // let price = productInfo.price;
                // let quantity = productInfo.quantity;
                vendorInventory[vendor.name] = productInfo;
            }
        } 
    }

}