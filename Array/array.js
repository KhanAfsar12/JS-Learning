const theList = ['Afsar', 'Khan', true, 20, null, undefined, {
    test : 'one'
    , score: 55
},['one', 'two']]

let temp = Array.isArray(theList);

theList[1] = "Hello World"
temp = theList.indexOf("Afsar");
console.log(temp)
theList.push("pushed")  //Add to end 
theList.pop()
theList.shift() // removes the first element from the Array
theList.unshift("pull")  // add the element at the beginnig of Array
theList.splice(1,2)
console.log(theList)