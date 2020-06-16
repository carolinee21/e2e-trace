import FoodVendor from "./FoodVendor";

export default class FoodSupplier {
    constructor (tracer) {
        this.vendors = [];
        this.tracer = tracer;
        this.initializeRandomVendors();

        
        this.findVendorsWithProduct = async (productName, parentSpan) => {
            var stockedVendors = [];
            const span = this.tracer.startSpan("finding-vendors" , { parentSpan });
            await tracer.withSpan(span, async () => {
                for (var vendor of this.vendors) {
                    let inStock = await vendor.hasProduct(productName);
                    if (inStock) {
                        stockedVendors.push(vendor);
                    }
                }
                span.end();
            });
            return stockedVendors;
        }
    }

    initializeRandomVendors () {
        for (var charVal = 0; charVal < 10; charVal++) {
            let vendorName = "Vendor " + String.fromCharCode(65 + charVal);
            let vendor = new FoodVendor(vendorName, this.tracer);
            this.vendors.push(vendor);
        }
        console.log("Finished initializing vendors");
    }
    
}
