// Class Movie task ---------------------------------------------

class Movie {
    constructor(title = "", studio = "", rating = "PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}

function getPG (movieArr) {
    let arrPG = movieArr.filter(movie => movie.rating === "PG");
    return arrPG;
}

let movie1 = new Movie("Casino Royale", "Eon Productions", "PG13");
let movie2 = new Movie("Bahubali", "Dharma Productions", "PG");
let movie3 = new Movie("Chicchhore", "Unknown", "PG");

let pgarr = getPG([movie1, movie2, movie3]);

console.log(pgarr);


// Class Circle task ---------------------------------------------

class Circle {
    constructor(radius = 1, color = "red"){
        this.radius = radius;
        this.color = color;
    }

    getRadius(){
        return this.radius;
    }

    getColor(){
        return this.color;
    }

    setRadius(rad){
        this.radius = rad;
    }

    setColor(col){
        this.color = col;
    }

    toString(){
        return `Circle[radius=${this.radius}, color=${this.color}]`;
    }

    getArea(){
        return Math.PI * this.radius * this.radius;
    }

    getCircumference(){
        return 2 * Math.PI * this.radius;
    }
}

let c1 = new Circle();
let c2 = new Circle(2);
let c3 = new Circle(2, "blue");

console.log(c1.getColor());
console.log(c1.getRadius());

c1.setColor("orange");
c1.setRadius(8);
console.log(c1.toString());

console.log(c2.getArea());
console.log(c2.getCircumference());

console.log(c3.toString());


// Class Person task ---------------------------------------------

class Person {
    constructor(name="", age=NaN, address=""){
        this.name = name;
        this.age = age;
        this.address = address;
    }
}


// Class Uber task ---------------------------------------------

class Uber {
    constructor(travelledKM=NaN, pricePerKM = 15){
        this.travelledKM = travelledKM;
        this.pricePerKM = pricePerKM;
    }

    getPrice(){
        return this.travelledKM * this.pricePerKM;
    }
}

let customer = new Uber(10);
console.log(customer.getPrice());