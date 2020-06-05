import FoodSupplier from './FoodSupplier.js';
import productsList from '../AllProducts.js';


export default class FoodFinder {
    constructor () {
        this.supplier = new FoodSupplier();


        this.findProduct = (productName) => {
            if ( productsList.includes(productName)) {
                let stockedVendors = this.supplier.findVendorsWithProduct(productName);
                var vendorInventory = {}
                for (var vendor of stockedVendors) {
                    let productInfo = vendor.getProductInfo(productName);
                    vendorInventory[vendor.name] = productInfo;
                }
                console.log(vendorInventory);
                return vendorInventory;
            } 
            console.log("Invalid product name: " + productName);
            return {};
        }
    }
}