/**
 * Created by faced on 11.02.2017.
 */
class Product {
    constructor(name,price){
       this.name = name;
       this.price = price;
    }
    toString(){
        return (`product name = ${this.name}; product price = ${this.price}`)
    }
}

class Bird extends Product {

    //this.sold = 0;
    constructor(name, price,quantity,sold = 4){
        super(name, price);
        this.quantity = quantity;
        this.sold = sold;
    };

    toString(){
        return( super.toString() + `; quantity = ${this.quantity}; sold = ${this.sold}` )
    }
}

class BirdShop {

    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    toString(){
        return (`product name = ${this.name}; product price = ${this.price}`)
    }
}

//var pr1 = new Product("milk",34);

//pr1.toString();

var eagle = new Bird("eagle",45,14);
var print = eagle.toString();
console.log(print);


