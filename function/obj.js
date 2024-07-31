function car(miles, company, color){
    this.color = color
    this.miles = miles
    this.company = company
}

const myCar1 = new car(100, 'BMW', 'WHITE');
console.log(myCar1);
myCar1.price = 30000
console.log(myCar1);


const myCar = {
    color : 'red',
    topSpeed: 300,
    model: 'mustang',
    company: 'ford',
    price: 500000,
    turnOn: function(){console.log("started")},
    drive: function(){console.log("You "+ this.model +" driving")}
};