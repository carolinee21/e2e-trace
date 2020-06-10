import FoodSupplier from './FoodSupplier.js';
import productsList from './AllProducts.js';


export default class FoodFinder {
    constructor (tracer) {
        this.supplier = new FoodSupplier(tracer);
        this.tracer = tracer;

        this.findProduct = async (productName) => {
            productName = productName.charAt(0).toUpperCase() + productName.slice(1);
            if ( productsList.includes(productName)) {
                const span = this.tracer.startChildSpan( { name: "find-product" } );
                span.start();
                span.addAnnotation('invoking doWork');
                let stockedVendors = await this.supplier.findVendorsWithProduct(productName);
                var vendorInventory = {}
                for (var vendor of stockedVendors) {
                    const vendorSpan = this.tracer.startChildSpan( { name: "querying " + vendor.name } );
                    vendorSpan.start();
                    let productInfo = await vendor.getProductInfo(productName);
                    vendorInventory[vendor.name] = productInfo;
                    vendorSpan.end();
                }
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