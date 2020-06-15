import FoodSupplier from './FoodSupplier.js';
import productsList from './AllProducts.js';
import each from 'async/each';


export default class FoodFinder {
    constructor (tracer) {
        this.supplier = new FoodSupplier(tracer);
        this.tracer = tracer;

        this.findProduct = async (productName, parentSpan) => {
            productName = productName.charAt(0).toUpperCase() + productName.slice(1);
            if ( productsList.includes(productName)) {
                var vendorInventory = {};
                const span = this.tracer.startSpan("find-product", { parentSpan });
                span.addEvent("Product: " + productName);
                await tracer.withSpan(span, async () => {
                    let stockedVendors = await this.supplier.findVendorsWithProduct(productName, span);
                    await each(stockedVendors, async (vendor) => {
                        const vendorSpan = this.tracer.startSpan("Querying " + vendor.name, { parentSpan });
                        await tracer.withSpan(vendorSpan, async () => {
                            let productInfo = await vendor.getProductInfo(productName);
                            vendorInventory[vendor.name] = productInfo;
                            vendorSpan.end();
                        });
                    })
                    console.log(vendorInventory);
                    span.end();
                });
                return vendorInventory;  
            } else {
                console.log("Invalid product name: " + productName);
                return {};
            }
        }
    }
}