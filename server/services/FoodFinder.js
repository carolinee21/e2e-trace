import FoodSupplier from './FoodSupplier.js';
import productsList from './AllProducts.js';
import each from 'async/each';


export default class FoodFinder {
    constructor (tracer) {
        this.supplier = new FoodSupplier(tracer);
        this.tracer = tracer;

        this.findProduct = async (productName) => {
            productName = productName.charAt(0).toUpperCase() + productName.slice(1);
            if ( productsList.includes(productName)) {
                const span = this.tracer.startChildSpan( { name: "find-product" } );
                span.start();
                span.addAnnotation("Product: " + productName);
                let stockedVendors = await this.supplier.findVendorsWithProduct(productName);
                var vendorInventory = {}
                await each(stockedVendors, async (vendor) => {
                    const vendorSpan = this.tracer.startChildSpan( { name: "querying " + vendor.name } );
                    vendorSpan.start();
                    let productInfo = await vendor.getProductInfo(productName);
                    vendorInventory[vendor.name] = productInfo;
                    vendorSpan.end();

                })
                console.log(vendorInventory);
                span.end();
                return vendorInventory;  
            } else {
                console.log("Invalid product name: " + productName);
                return {};
            }
        }
    }
}