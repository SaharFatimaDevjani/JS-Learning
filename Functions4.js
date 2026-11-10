// 04: Functions & scope
// greet() → "Hello, Guest!", greet("Sahar") → "Hello, Sahar!" (default parameter)
function greet(name = "Guest"){
    return `Hello, ${name}!`
}
console.log(greet("Sahar"))


// sumAll(1,2,3) → 6, sumAll() → 0 (rest parameter)
function sumAll(...nums){
    let total = 0
    for(let num of nums){
        total += num
    }
    return total
}
console.log(sumAll(1,2,3))


// applyTwice(n => n * 2, 3) → 12
function applyTwice(func,n){
    let ans1 = func(n)
    return func(ans1)
}
console.log(applyTwice(n => n * 2, 3))


// describeHotel({ name: "Pearl Inn", rooms: 20 }) → "Pearl Inn has 20 rooms" (and “1 room” for 1)
function describeHotel(roomDet){
    let {name,rooms}=roomDet
    if(rooms == 1){
        return `${name} has ${rooms} room`
    }else{
        return `${name} has ${rooms} rooms`
    }
}
console.log(describeHotel({ name: "Pearl Inn", rooms:1  }))


// makeMultiplier(3)(5) → 15 (a function that returns a function)
function makeMultiplier(num1){
    return (num2)=>(num1*num2)
}
console.log(makeMultiplier(3)(5))



