import FoodVendor from "./FoodVendor";

export default class FoodSupplier {
    constructor () {
        this.vendors = [];
        this.initializeRandomVendors();

        
        this.findVendorsWithProduct = (productName) => {
            var stockedVendors = [];
            for (var vendor of this.vendors) {
                if (vendor.hasProduct(productName)) {
                    stockedVendors.push(vendor);
                }
            }
            return stockedVendors;
        }
    }

    initializeRandomVendors () {
        for (var charVal = 0; charVal < 10; charVal++) {
            let vendorName = "Vendor " + String.fromCharCode(65 + charVal);
            let vendor = new FoodVendor(vendorName);
            this.vendors.push(vendor);
        }
        console.log("Finished initializing vendors");
    }


    
}
