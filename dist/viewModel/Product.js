"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
//exports.Product = void 0;
class Product {
    constructor({ name, value = 0.0, count = 1 }) {
        this.name = name;
        this.value = value;
        this.count = count;
    }
    getTotalValues() {
        return this.value * this.count;
    }
}
//exports.Product = Product;
