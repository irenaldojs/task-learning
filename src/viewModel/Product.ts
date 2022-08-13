export class Product {
    public name: string;
    public value: number;
    public count: number;
    
    constructor({
        name,
        value = 0.0, 
        count = 1
    }:{
        name: string,
        value: number,
        count: number

    }){
        this.name = name
        this.value = value
        this.count = count
    }

    public getTotalValues(){
        return this.value * this.count
    }
}