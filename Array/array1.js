const myArray = ['a', 'hello', 4, 8, 2, 'world', 'javascript', 'course', 99, 1];
const myArray2 = [5, 12, 8, 130, 44];

console.log(myArray)

myArray.sort()
console.log(myArray)

myArray.reverse(myArray)
console.log(myArray)

if(myArray.indexOf("hello")!==-1){
    console.log("item found");
}
else{
    console.log("not found");
}

let newArray = myArray.concat(myArray2);
console.log(newArray);


let find = myArray.find(function(el){
    console.log(el);
    return el > 0   ;
})