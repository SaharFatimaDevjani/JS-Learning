// 07: map / filter / reduce

// Use this data:

// js
const rooms = [
  { no: 101, type: "single", price: 5000,  booked: true  },
  { no: 102, type: "double", price: 8000,  booked: false },
  { no: 103, type: "suite",  price: 15000, booked: true  },
  { no: 104, type: "single", price: 5000,  booked: false },
  { no: 105, type: "double", price: 8500,  booked: true  },
];
// All room numbers → [101, 102, 103, 104, 105] (map)
let roomNums = rooms.map((r)=>r.no)
console.log(roomNums)


// Numbers of available rooms → [102, 104] (filter + map)
let availRoom = rooms.filter((r)=>r.booked === false).map((r=>r.no))
console.log(availRoom)

// Total price of booked rooms → 28500 (filter + reduce)
let price = rooms.filter((r)=>r.booked === true).reduce((sum,r)=>r.price+sum,0)
console.log(price)


// Count by type → { single: 2, double: 2, suite: 1 } (reduce)
let roomType = rooms.reduce((rt,r)=>{
    if(r.type in rt){
        rt[r.type] +=1
    }else{
        rt[r.type] = 1
    }
    return rt
},{})
console.log(roomType)

// Most expensive room → room 103 (reduce)
let expRoom = rooms.reduce((max,r)=>r.price > max.price ? r : max)
console.log(expRoom.no)

// Average price → 8300
let average = rooms.map((r)=>(r.price)).reduce((sum,r) => sum+r.price,0)/rooms.length
console.log(average)

// Apply a 10% discount, returning a new array without changing rooms

// Write your own myMap(arr, fn) without using .map