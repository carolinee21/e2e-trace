import FoodVendor from "./FoodVendor";

export default class FoodSupplier {
    constructor () {
        this.vendors = [];
        initializeRandomVendors();
    }

    initializeRandomVendors () {
        for (var charVal = 0; charVal < 10; charVal++) {
            let vendorName = "Vendor " + String.fromCharCode(97 + charVal);
            let vendor = new FoodVendor(vendorName);
            this.vendors.push(vendor);
        }
    }

    findVendorsWithProduct = (productName) => {
        stockedVendors = [];
        for (vendor in this.vendors) {
            if (vendor.hasProduct()) {
                stockedVendors.push(vendor);
            }
        }
        return stockedVendors;
    }

}
